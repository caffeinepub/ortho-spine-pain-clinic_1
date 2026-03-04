import { Button } from "@/components/ui/button";
import {
  Calendar,
  Camera,
  Home,
  Info,
  Layers,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Star,
  ThumbsUp,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Why Us", href: "#why-us", icon: ThumbsUp },
  { label: "Results", href: "#results", icon: Camera },
  { label: "Reviews", href: "#google-reviews", icon: Star },
  { label: "Appointment", href: "#appointment", icon: Calendar },
  { label: "FAQ", href: "#faq", icon: MessageSquare },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const navHeight = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        isScrolled
          ? {
              background:
                "linear-gradient(135deg, oklch(0.28 0.12 15) 0%, oklch(0.38 0.16 12) 50%, oklch(0.32 0.14 20) 100%)",
              boxShadow:
                "0 4px 32px oklch(0.25 0.14 15 / 0.50), 0 1px 0 oklch(0.55 0.15 15 / 0.20)",
              borderBottom: "1px solid oklch(0.50 0.12 15 / 0.30)",
            }
          : {
              background: "transparent",
            }
      }
    >
      {/* Top accent glow line when scrolled */}
      {isScrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.75 0.18 15), oklch(0.85 0.12 25), oklch(0.75 0.18 15), transparent)",
          }}
        />
      )}

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-xl"
          aria-label="Go to top"
          data-ocid="nav.button"
        >
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 22 }}
            className="relative rounded-xl p-1 transition-all duration-300"
            style={{
              background: "oklch(1 0 0 / 0.12)",
              boxShadow: isScrolled
                ? "0 0 0 1.5px oklch(1 0 0 / 0.22), 0 4px 16px oklch(0.25 0.14 15 / 0.40), 0 0 24px oklch(0.75 0.18 15 / 0.18)"
                : "0 4px 20px rgba(0,0,0,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <img
              src="/assets/uploads/IMG-20250205-WA0003-1-1-1.jpg"
              alt="ORTHO-SPINE PAIN CLINIC"
              className="h-14 lg:h-[72px] w-auto object-contain rounded-lg"
            />
          </motion.div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                style={{
                  color: isActive ? "white" : "oklch(0.96 0.01 15 / 0.82)",
                  background: isActive ? "oklch(1 0 0 / 0.16)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(1 0 0 / 0.10)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.96 0.01 15 / 0.82)";
                  }
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "oklch(1 0 0 / 0.16)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "oklch(0.85 0.12 20)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:8401282296"
            className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{ color: "oklch(0.92 0.08 20)" }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "oklch(1 0 0 / 0.15)" }}
            >
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>84012 82296</span>
          </a>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={() => scrollTo("#appointment")}
              className="font-bold text-sm px-5 h-9 border-none"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.18 25), oklch(0.88 0.14 30))",
                color: "oklch(0.20 0.06 15)",
                boxShadow:
                  "0 4px 16px oklch(0.75 0.18 25 / 0.40), 0 0 0 1px oklch(0.88 0.14 30 / 0.30)",
              }}
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              Book Now
            </Button>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          type="button"
          className="lg:hidden p-2 rounded-xl transition-colors"
          style={{
            color: "white",
            background: mobileOpen ? "oklch(1 0 0 / 0.15)" : "transparent",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.28 0.12 15 / 0.98) 0%, oklch(0.22 0.10 15 / 0.99) 100%)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid oklch(0.50 0.12 15 / 0.30)",
            }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.22 }}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-3 transition-all duration-150"
                    style={
                      isActive
                        ? {
                            background: "oklch(1 0 0 / 0.12)",
                            color: "white",
                            borderLeft: "3px solid oklch(0.80 0.15 20)",
                          }
                        : {
                            color: "oklch(0.92 0.02 15)",
                            borderLeft: "3px solid transparent",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.background =
                          "oklch(1 0 0 / 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                    }}
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive
                          ? "oklch(0.62 0.18 15)"
                          : "oklch(1 0 0 / 0.10)",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    {link.label}
                  </motion.button>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05 }}
                className="pt-3 mt-2 flex flex-col gap-2"
                style={{ borderTop: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                <a
                  href="tel:8401282296"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm"
                  style={{
                    color: "oklch(0.90 0.10 20)",
                    background: "oklch(1 0 0 / 0.08)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(0.62 0.18 15)" }}
                  >
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  84012 82296
                </a>
                <Button
                  onClick={() => scrollTo("#appointment")}
                  className="w-full font-bold h-11 text-sm border-none"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.75 0.18 25), oklch(0.88 0.14 30))",
                    color: "oklch(0.20 0.06 15)",
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
