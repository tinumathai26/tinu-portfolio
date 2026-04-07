import { Link } from "react-router-dom";
import { paths } from "@/app/routes/paths";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
      <p className="text-2xl md:text-3xl text-muted-foreground mb-10">
        Page not found
      </p>
      <Link
        to={paths.home}
        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-lg font-medium"
      >
        Return to Home
      </Link>
    </div>
  );
}
