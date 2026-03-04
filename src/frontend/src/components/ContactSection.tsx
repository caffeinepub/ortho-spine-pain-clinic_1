import { Button } from "@/components/ui/button";
import { useClinicInfo } from "@/hooks/useQueries";
import {
  Calendar,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const contactItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ContactSection() {
  const { data: clinic } = useClinicInfo();

  const phones = clinic?.contactNumbers ?? ["8401282296", "6351002510"];
  const address =
    clinic?.address ??
    "Ortho-Spine Pain Clinic, Mez floor, Swastik chambers, Athugar Street, opp. Kailash Sweets, Nanpura Timalyawad, Surat";
  const instagram =
    clinic?.instagramUrl ??
    "https://www.instagram.com/ortho_spine.pain_clinic?igsh=NHh2MWcwcHM0aGQx";

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 relative"
      style={{ background: "oklch(0.99 0.004 15)" }}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.72 0.15 15), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Get In Touch</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
            Contact &{" "}
            <span style={{ color: "oklch(0.62 0.18 15)" }}>Location</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Ready to start your recovery? Reach out to us to book an appointment
            or get directions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Appointment CTA Card */}
            <motion.div
              custom={0}
              variants={contactItemVariants}
              className="p-6 rounded-2xl text-white relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 12), oklch(0.72 0.16 18))",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, oklch(0.85 0.10 15), transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <Calendar className="w-8 h-8 mb-3 text-white/80" />
                <h3 className="font-display text-xl font-bold mb-2">
                  Book an Appointment
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Call us directly or walk in. We welcome all patients with open
                  arms and expert care.
                </p>
                <div className="flex flex-col gap-2">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3"
                    >
                      <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                      <span className="font-semibold tracking-wide">
                        {phone}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              custom={1}
              variants={contactItemVariants}
              className="p-6 rounded-2xl bg-white border border-border space-y-4"
              style={{ boxShadow: "0 4px 24px -4px rgba(120,0,0,0.08)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "oklch(0.94 0.025 15 / 0.5)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(0.62 0.18 15)" }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Clinic Address
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {address}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/2dbsJBFvPj29VffY7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold hover:underline"
                    style={{ color: "oklch(0.62 0.18 15)" }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5">
                    Follow on Instagram
                  </h4>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#dc2743" }}
                  >
                    @ortho_spine.pain_clinic
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* WhatsApp prompt */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/918401282296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#25D366" }}
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Call Buttons */}
            <motion.div
              custom={2}
              variants={contactItemVariants}
              className="grid grid-cols-2 gap-3"
            >
              {phones.map((phone) => (
                <Button
                  key={phone}
                  asChild
                  className="font-semibold"
                  style={{
                    background: "oklch(0.62 0.18 15)",
                    color: "white",
                  }}
                >
                  <a href={`tel:${phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    {phone}
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-card border border-border min-h-[400px] lg:min-h-0"
          >
            <div
              className="px-4 py-3 flex items-center gap-2"
              style={{ background: "oklch(0.55 0.18 12)" }}
            >
              <MapPin className="w-4 h-4 text-white/70" />
              <span className="text-sm font-medium text-white/90">
                Swastik Chambers, Nanpura, Surat
              </span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Swastik+Chambers+Athugar+Street+Nanpura+Surat&output=embed"
              title="ORTHO-SPINE PAIN CLINIC Location"
              width="100%"
              height="450"
              className="block w-full"
              style={{ border: 0 }}
              allow="fullscreen"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
