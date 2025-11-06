import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Briefcase, Menu, X } from "lucide-react";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/fonctionnalites", label: "Fonctionnalités" },
    { path: "/tarifs", label: "Tarifs" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-mobile max-w-7xl flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">
              Book N' Glow
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              asChild
              className="flex items-center gap-2"
            >
              <a href="https://app.book-n-glow.fr/sign-in/prestataire" target="_blank" rel="noopener noreferrer">
                <Briefcase className="w-4 h-4" />
                Je suis prestataire
              </a>
            </Button>
            <Button
              asChild
              className="flex items-center gap-2"
            >
              <a href="https://app.book-n-glow.fr/sign-in/customer" target="_blank" rel="noopener noreferrer">
                <User className="w-4 h-4" />
                Mon compte
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background animate-fade-in">
            <div className="container-mobile py-4 space-y-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  asChild
                  className="flex items-center gap-2 justify-center"
                >
                  <a href="https://app.book-n-glow.fr/sign-in/prestataire" target="_blank" rel="noopener noreferrer">
                    <Briefcase className="w-4 h-4" />
                    Je suis prestataire
                  </a>
                </Button>
                <Button
                  asChild
                  className="flex items-center gap-2 justify-center"
                >
                  <a href="https://app.book-n-glow.fr/sign-in/customer" target="_blank" rel="noopener noreferrer">
                    <User className="w-4 h-4" />
                    Mon compte
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default TopBar;
