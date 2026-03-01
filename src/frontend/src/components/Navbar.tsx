import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-teal rounded-md"
          aria-label="Go to top"
        >
          <img
            src="/assets/generated/clinic-logo-transparent.dim_300x100.png"
            alt="ORTHO-SPINE PAIN CLINIC"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-teal ${
                isScrolled
                  ? "text-foreground hover:text-clinic-teal hover:bg-clinic-teal-light"
                  : "text-white hover:text-white hover:bg-white/15"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:8401282296"
            className="flex items-center gap-2 text-sm font-medium text-clinic-teal hover:text-clinic-teal/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>84012 82296</span>
          </a>
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-clinic-teal text-white hover:bg-clinic-teal/90 shadow-teal font-semibold"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded-md transition-colors ${
            isScrolled
              ? "text-foreground hover:bg-secondary"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-white border-b border-border shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-clinic-teal hover:bg-clinic-teal-light rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-border flex flex-col gap-2">
                <a
                  href="tel:8401282296"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-clinic-teal"
                >
                  <Phone className="w-4 h-4" />
                  84012 82296
                </a>
                <Button
                  onClick={() => scrollTo("#contact")}
                  className="bg-clinic-teal text-white w-full font-semibold"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
