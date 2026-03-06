import {
  Clock,
  Heart,
  Microscope,
  Shield,
  Star,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: UserCheck,
    title: "Expert Specialist Doctor",
    description:
      "8+ years of specialized orthopedic & neurological physiotherapy.",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description: "Latest ultrasound, laser, IFT, TENS & traction technology.",
  },
  {
    icon: Heart,
    title: "Personalized Treatment",
    description: "Custom treatment plans tailored to your condition & goals.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Practice",
    description:
      "Treatments grounded in the latest clinical research protocols.",
  },
  {
    icon: Clock,
    title: "Flexible Appointments",
    description: "Morning & evening slots, 7 days a week, plus home visits.",
  },
  {
    icon: Star,
    title: "Proven Results",
    description:
      "5000+ satisfied patients with measurable health improvements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-10 lg:py-16 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Our Advantage</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
            Why Choose{" "}
            <span style={{ color: "oklch(0.62 0.18 15)" }}>Ortho-Spine</span>?
          </h2>
        </motion.div>

        {/* Reasons — compact 2-column list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: (index % 2) * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-4 rounded-xl border bg-white transition-shadow duration-200 hover:shadow-md"
                style={{ borderColor: "oklch(0.90 0.016 15)" }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.18 12), oklch(0.72 0.16 18))",
                    boxShadow: "0 3px 10px oklch(0.62 0.18 15 / 0.20)",
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <h3
                    className="font-display font-bold text-base text-foreground leading-snug"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-sm mt-0.5 leading-snug"
                    style={{ color: "oklch(0.50 0.05 15)" }}
                  >
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner — slim */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="rounded-2xl px-6 py-5 text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 12), oklch(0.72 0.16 18))",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, oklch(0.85 0.10 15), transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
              Ready to Begin Your Recovery Journey?
            </h3>
            <div className="flex flex-row gap-3 shrink-0">
              <motion.a
                href="tel:8401282296"
                data-ocid="why_us.call_primary.button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 whitespace-nowrap"
                style={{ background: "oklch(0.45 0.15 12)", color: "white" }}
              >
                📞 84012 82296
              </motion.a>
              <motion.a
                href="tel:6351002510"
                data-ocid="why_us.call_secondary.button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 bg-white/10 hover:bg-white/20 border border-white/25 whitespace-nowrap"
              >
                📞 63510 02510
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
