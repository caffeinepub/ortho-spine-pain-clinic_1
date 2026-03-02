import { useClinicInfo } from "@/hooks/useQueries";
import { Heart, Instagram, MapPin, Phone } from "lucide-react";

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
      className="relative overflow-hidden"
      style={{ background: "oklch(0.14 0.03 240)" }}
    >
      {/* Top accent */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.42 0.13 200), oklch(0.55 0.16 195), oklch(0.42 0.13 200))",
        }}
      />

      {/* Decorative */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-5 -translate-x-1/3 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.16 195), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <img
              src="/assets/uploads/IMG-20250205-WA0003-1-1-1.jpg"
              alt="ORTHO-SPINE PAIN CLINIC"
              className="h-16 w-auto object-contain rounded-md"
              loading="lazy"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Expert physiotherapy care for a pain-free, active life. Under the
              guidance of{" "}
              <span className="text-white/80 font-medium">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white transition-colors"
              style={{ background: "oklch(1 0 0 / 0.08)" }}
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
              style={{ color: "oklch(0.65 0.16 195)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors text-left"
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
              style={{ color: "oklch(0.65 0.16 195)" }}
            >
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  {clinic?.address ??
                    "Mez floor, Swastik chambers, Athugar Street, opp. Kailash Sweets, Nanpura Timalyawad, Surat"}
                </p>
              </div>
              {(clinic?.contactNumbers ?? ["8401282296", "6351002510"]).map(
                (phone) => (
                  <div key={phone} className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <a
                      href={`tel:${phone}`}
                      className="text-white/60 hover:text-white text-sm transition-colors"
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
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {year} ORTHO-SPINE PAIN CLINIC. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
