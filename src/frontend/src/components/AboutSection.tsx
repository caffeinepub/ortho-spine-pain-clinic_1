import { Badge } from "@/components/ui/badge";
import { useClinicInfo } from "@/hooks/useQueries";
import { Award, GraduationCap, Stethoscope, Users } from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const credentials = [
  { icon: GraduationCap, label: "B.P.T. Graduate" },
  { icon: Stethoscope, label: "M.P.T. Orthopedics" },
  { icon: Award, label: "Certified Manual Therapist" },
  { icon: Users, label: "Sports Rehab Specialist" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  const { data: clinic } = useClinicInfo();

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.16 195), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Doctor Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative inline-block w-full max-w-sm mx-auto lg:mx-0">
              {/* Background shape */}
              <div
                className="absolute -inset-4 rounded-2xl"
                style={{ background: "oklch(0.88 0.06 195 / 0.35)" }}
              />
              {/* Accent dot */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-60"
                style={{ background: "oklch(0.55 0.16 195 / 0.2)" }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full opacity-40"
                style={{ background: "oklch(0.55 0.16 195 / 0.3)" }}
              />

              <img
                src="/assets/generated/doctor-portrait.dim_400x500.jpg"
                alt={clinic?.doctorName || "Dr. Arbaz Shaikh"}
                className="relative z-10 w-full rounded-xl object-cover shadow-hero"
                style={{ aspectRatio: "4/5" }}
                loading="lazy"
              />

              {/* Experience badge */}
              <div
                className="absolute -bottom-4 right-4 z-20 bg-white rounded-xl shadow-card px-4 py-3 text-center"
                style={{ border: "2px solid oklch(0.55 0.16 195 / 0.2)" }}
              >
                <div
                  className="font-display text-3xl font-extrabold"
                  style={{ color: "oklch(0.42 0.13 200)" }}
                >
                  {Number(clinic?.experienceYears ?? 8)}+
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Years Expertise
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Section label */}
            <div className="flex items-center gap-3">
              <div
                className="h-px w-8 rounded-full"
                style={{ background: "oklch(0.55 0.16 195)" }}
              />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "oklch(0.55 0.16 195)" }}
              >
                Meet the Doctor
              </span>
            </div>

            <div>
              <h2
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-none"
                style={{ letterSpacing: "-0.02em" }}
              >
                {clinic?.doctorName || "Dr. Arbaz Shaikh"}
              </h2>
              <p
                className="text-base font-semibold mt-3 tracking-wide"
                style={{ color: "oklch(0.52 0.15 195)" }}
              >
                {clinic?.specialization || "Consultant Physiotherapist"}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base">
              {clinic?.about ||
                "Dr. Arbaz Shaikh is a highly qualified and experienced Consultant Physiotherapist dedicated to providing comprehensive physiotherapy care. With over 8 years of clinical experience, he specializes in diagnosing and treating musculoskeletal disorders, spine conditions, sports injuries, and neurological conditions."}
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2">
              {credentials.map(({ icon: Icon, label }) => (
                <Badge
                  key={label}
                  variant="secondary"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full"
                  style={{
                    background: "oklch(0.88 0.06 195 / 0.4)",
                    color: "oklch(0.35 0.1 200)",
                    border: "1px solid oklch(0.55 0.16 195 / 0.2)",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </Badge>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: "5000+", label: "Patients Healed" },
                { value: "16+", label: "Specializations" },
                { value: "100%", label: "Dedication" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: "oklch(0.96 0.015 220)",
                    border: "1px solid oklch(0.88 0.015 220)",
                  }}
                >
                  <div
                    className="font-display text-2xl font-extrabold"
                    style={{
                      color: "oklch(0.42 0.13 200)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
