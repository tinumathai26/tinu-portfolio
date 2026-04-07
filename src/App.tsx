import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/providers/use-theme";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/routes/ScrollToTop";
import AppRouter from "./app/routes/AppRouter";

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="pt-16">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
