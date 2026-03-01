import { useServices } from "@/hooks/useQueries";
import {
  Activity,
  Baby,
  Bike,
  Bone,
  Brain,
  CircleDot,
  Hand,
  HeartPulse,
  Home,
  Layers,
  PersonStanding,
  Scissors,
  Syringe,
  User,
  Waves,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import type { Service } from "../backend.d";

const iconMap: Record<string, React.ElementType> = {
  spine: Bone,
  neck: PersonStanding,
  sports: Bike,
  surgery: Scissors,
  knee: Activity,
  shoulder: Layers,
  nerve: Zap,
  electric: HeartPulse,
  needle: Syringe,
  brain: Brain,
  posture: PersonStanding,
  child: Baby,
  elderly: User,
  hands: Hand,
  cup: CircleDot,
  home: Home,
  waves: Waves,
  default: Activity,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.iconName] ?? iconMap.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: "easeOut" }}
      className="card-hover-glow group"
    >
      <div
        className="h-full bg-white rounded-2xl border overflow-hidden flex flex-col"
        style={{
          borderColor: "oklch(0.88 0.015 220)",
          boxShadow: "0 2px 8px oklch(0.42 0.13 200 / 0.06)",
        }}
      >
        {/* Color bar + icon */}
        <div
          className="px-6 pt-6 pb-4 relative"
          style={{ background: "oklch(0.97 0.014 210)" }}
        >
          {/* Subtle grid dot pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, oklch(0.55 0.16 195 / 0.12) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div
            className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.45 0.14 200), oklch(0.58 0.17 195))",
              boxShadow: "0 4px 14px oklch(0.42 0.13 200 / 0.3)",
            }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Text content */}
        <div className="px-6 py-4 flex flex-col flex-1">
          <h3
            className="font-display font-bold text-sm text-foreground mb-1.5 leading-snug tracking-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            {service.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {service.description}
          </p>

          {/* Bottom hover accent */}
          <div className="mt-3 pt-3 border-t border-border/50">
            <span
              className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
              style={{ color: "oklch(0.42 0.13 200)" }}
            >
              Learn more
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                →
              </span>
            </span>
            <div
              className="h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"
              style={{ background: "oklch(0.55 0.16 195)" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { data: services = [] } = useServices();

  return (
    <section
      id="services"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.965 0.012 215)" }}
    >
      {/* Decorative background shape */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "oklch(0.42 0.13 200)" }}
      />
      <div
        className="absolute -top-16 right-0 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "oklch(0.55 0.16 195)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Our Treatments</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
            Comprehensive{" "}
            <span
              className="relative inline-block"
              style={{ color: "oklch(0.42 0.13 200)" }}
            >
              Physiotherapy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 3 Q50 0 100 3 Q150 6 200 3"
                  stroke="oklch(0.55 0.16 195)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Services
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Evidence-based physiotherapy treatments tailored to your specific
            needs for optimal recovery and long-term wellness.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4 text-sm">
            Not sure which treatment is right for you?
          </p>
          <a
            href="tel:8401282296"
            className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-200 hover:gap-3 group"
            style={{ color: "oklch(0.42 0.13 200)" }}
          >
            <span>Call us for a free consultation</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
