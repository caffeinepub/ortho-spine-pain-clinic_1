import { useClinicInfo } from "@/hooks/useQueries";
import { Heart, Instagram, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { data: clinic } = useClinicInfo();
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: "oklch(0.975 0.010 15)",
        borderColor: "oklch(0.90 0.018 15)",
      }}
    >
      {/* Top accent */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.62 0.18 12), oklch(0.75 0.15 18), oklch(0.62 0.18 12))",
        }}
      />

      {/* Decorative */}
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-[0.06] translate-x-1/3 -translate-y-1/3 pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.15 15), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              className="inline-block rounded-xl p-1.5 bg-white/80"
              animate={{
                boxShadow: [
                  "0 4px 16px rgba(220, 38, 38, 0.15), 0 0 0 2px rgba(220, 38, 38, 0.12)",
                  "0 6px 28px rgba(220, 38, 38, 0.30), 0 0 0 3px rgba(220, 38, 38, 0.20)",
                  "0 4px 16px rgba(220, 38, 38, 0.15), 0 0 0 2px rgba(220, 38, 38, 0.12)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.04 }}
            >
              <img
                src="/assets/uploads/IMG-20250205-WA0003-1-1-1.jpg"
                alt="ORTHO-SPINE PAIN CLINIC"
                className="h-20 w-auto object-contain rounded-lg"
                loading="lazy"
              />
            </motion.div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "oklch(0.45 0.03 20)" }}
            >
              Expert physiotherapy care for a pain-free, active life. Under the
              guidance of{" "}
              <span
                className="font-semibold"
                style={{ color: "oklch(0.28 0.02 20)" }}
              >
                {clinic?.doctorName ?? "Dr. Arbaz Shaikh"}
              </span>
              , we help you recover faster and stronger.
            </p>
            {/* Social */}
            <a
              href={
                clinic?.instagramUrl ??
                "https://www.instagram.com/ortho_spine.pain_clinic?igsh=NHh2MWcwcHM0aGQx"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                background: "oklch(0.62 0.18 15 / 0.10)",
                color: "oklch(0.50 0.16 15)",
                border: "1px solid oklch(0.72 0.15 15 / 0.25)",
              }}
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              @ortho_spine.pain_clinic
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display font-bold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.18 15)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors text-left footer-nav-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-display font-bold text-sm uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.18 15)" }}
            >
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.72 0.15 15)" }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.03 20)" }}
                >
                  {clinic?.address ??
                    "Ortho-Spine Pain Clinic, Mez floor, Swastik chambers, Athugar Street, opp. Kailash Sweets, Nanpura Timalyawad, Surat"}
                </p>
              </div>
              {(clinic?.contactNumbers ?? ["8401282296", "6351002510"]).map(
                (phone) => (
                  <div key={phone} className="flex items-center gap-3">
                    <Phone
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "oklch(0.72 0.15 15)" }}
                    />
                    <a
                      href={`tel:${phone}`}
                      className="text-sm transition-colors hover:underline"
                      style={{ color: "oklch(0.45 0.03 20)" }}
                    >
                      {phone}
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "oklch(0.88 0.018 15)" }}
        >
          <p
            className="text-sm text-center sm:text-left"
            style={{ color: "oklch(0.55 0.03 20)" }}
          >
            © {year} ORTHO-SPINE PAIN CLINIC. All rights reserved.
          </p>
          <p
            className="text-sm flex items-center gap-1"
            style={{ color: "oklch(0.55 0.03 20)" }}
          >
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: "oklch(0.55 0.18 15)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
