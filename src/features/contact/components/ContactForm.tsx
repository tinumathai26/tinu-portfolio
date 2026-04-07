import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot field
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    // Honeypot check - if filled, it's spam
    if (formData.website.trim()) {
      return "Spam detected. Please try again.";
    }

    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!emailRegex.test(formData.email)) return "Please enter a valid email";
    if (!formData.message.trim()) return "Message is required";

    return "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      // Generate current time in readable format
      const currentTime = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      // Reset form
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto"
      noValidate
    >
      {/* Honeypot - completely hidden from real users */}
      <div className="hidden">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="
            w-full px-5 py-4 rounded-lg bg-secondary text-foreground
            placeholder:text-muted-foreground outline-none
            focus:ring-2 focus:ring-primary transition
            border border-transparent focus:border-primary/50
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="
            w-full px-5 py-4 rounded-lg bg-secondary text-foreground
            placeholder:text-muted-foreground outline-none
            focus:ring-2 focus:ring-primary transition
            border border-transparent focus:border-primary/50
          "
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        rows={6}
        placeholder="Your message..."
        value={formData.message}
        onChange={handleChange}
        required
        className="
          w-full px-5 py-4 rounded-lg bg-secondary text-foreground
          placeholder:text-muted-foreground outline-none
          focus:ring-2 focus:ring-primary transition resize-none
          border border-transparent focus:border-primary/50
        "
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          w-full py-4 rounded-lg bg-primary text-primary-foreground
          font-semibold hover:opacity-90 transition
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2
        "
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {/* Feedback Messages */}
      {status === "success" && (
        <div className="flex items-center justify-center gap-2 text-green-600 text-sm mt-2">
          <CheckCircle className="w-5 h-5" />
          <span>Message sent successfully!</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center justify-center gap-2 text-red-600 text-sm mt-2">
          <AlertCircle className="w-5 h-5" />
          <span>{errorMsg}</span>
        </div>
      )}
    </form>
  );
}
