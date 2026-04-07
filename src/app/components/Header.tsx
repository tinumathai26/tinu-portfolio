import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/app/providers/use-theme";
import { navLinks } from "@/app/routes/paths";

export default function Header() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 h-16 border-b-[0.1px] border-glass-border bg-glass backdrop-blur-sm">
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-8 text-lg mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-0">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden p-2 rounded-full hover:bg-secondary"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={toggle}
            className="p-2 rounded-full cursor-pointer hover-icon"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="sm:hidden fixed inset-0 top-16 z-40"
          aria-hidden="true"
          onClick={closeMenu}
        >
           {/* Mobile nav */}
          <nav
            className="flex flex-col pt-6 px-6 gap-1 border-glass-border bg-glass backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`py-3 px-4 rounded-lg text-base font-semibold transition-colors hover:bg-secondary ${
                  location.pathname === link.to
                    ? "text-foreground bg-secondary/50"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
