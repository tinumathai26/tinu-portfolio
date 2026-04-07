import { PageTitle, BodyText } from "@/features/shared/components/Typography";
import ContactForm from "@/features/contact/components/ContactForm";
import ContactInfo from "@/features/contact/components/ContactInfo";

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <PageTitle className="mb-4">Get in Touch</PageTitle>

        <BodyText className="mb-12">
          Have a project in mind or want to collaborate? Feel free to reach
          out.
        </BodyText>

        <ContactInfo />

        <ContactForm />
      </div>
    </section>
  );
}
