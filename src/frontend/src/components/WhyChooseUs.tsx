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
      "Dr. Arbaz Shaikh brings 6+ years of specialized clinical experience in orthopedic and neurological physiotherapy, ensuring accurate diagnosis and effective treatment.",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description:
      "Our clinic is equipped with the latest physiotherapy technology including ultrasound therapy, laser therapy, IFT, TENS, and traction equipment for superior outcomes.",
  },
  {
    icon: Heart,
    title: "Personalized Treatment",
    description:
      "Every patient receives a customized treatment plan designed specifically for their condition, lifestyle, and recovery goals — not a one-size-fits-all approach.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Practice",
    description:
      "All treatments are grounded in the latest clinical research and evidence-based physiotherapy protocols to ensure safe and effective care.",
  },
  {
    icon: Clock,
    title: "Flexible Appointments",
    description:
      "We offer convenient morning and evening slots, 7 days a week, plus home visit services for patients who can't travel to the clinic.",
  },
  {
    icon: Star,
    title: "Proven Results",
    description:
      "With over 5000 satisfied patients and a high success rate, our track record speaks for itself. We are committed to delivering measurable improvements in your health.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            We combine medical expertise, advanced technology, and compassionate
            care to deliver physiotherapy outcomes that truly transform lives.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                className="group card-hover-glow"
              >
                <div
                  className="h-full p-7 rounded-2xl border bg-white transition-colors duration-300"
                  style={{
                    borderColor: "oklch(0.90 0.016 15)",
                  }}
                >
                  {/* Icon with number */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.58 0.18 12), oklch(0.72 0.16 18))",
                        boxShadow: "0 4px 14px oklch(0.62 0.18 15 / 0.22)",
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span
                      className="font-display text-5xl font-extrabold leading-none select-none"
                      style={{
                        color: "oklch(0.88 0.016 15)",
                        letterSpacing: "-0.04em",
                      }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-lg text-foreground mb-2"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 rounded-2xl p-8 sm:p-10 text-white text-center relative overflow-hidden"
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
          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              Ready to Begin Your Recovery Journey?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Book your appointment today and take the first step toward a
              pain-free, active life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8401282296"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: "oklch(0.62 0.18 15)", color: "white" }}
              >
                📞 84012 82296
              </a>
              <a
                href="tel:6351002510"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 bg-white/10 hover:bg-white/20 border border-white/20"
              >
                📞 63510 02510
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
