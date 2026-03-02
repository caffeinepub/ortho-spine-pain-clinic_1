import { Button } from "@/components/ui/button";
import { useClinicInfo } from "@/hooks/useQueries";
import { Calendar, ChevronDown, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const { data: clinic } = useClinicInfo();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Physiotherapy clinic"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.035_240/0.92)] via-[oklch(0.25_0.06_220/0.85)] to-[oklch(0.35_0.1_195/0.7)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.9 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6"
        >
          <MapPin
            className="w-3.5 h-3.5 text-clinic-teal"
            style={{ color: "oklch(0.65 0.16 195)" }}
          />
          Nanpura Timalyawad, Surat, Gujarat
        </motion.div>

        {/* Clinic Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4"
        >
          ORTHO-SPINE
          <br />
          <span style={{ color: "oklch(0.65 0.16 195)" }}>PAIN CLINIC</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4 font-light leading-relaxed"
        >
          {clinic?.tagline || "Expert Physiotherapy Care for a Pain-Free Life"}
        </motion.p>

        {/* Doctor info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/60 text-sm sm:text-base mb-10"
        >
          Under the guidance of{" "}
          <span className="text-white font-semibold">
            {clinic?.doctorName || "Dr. Arbaz Shaikh"}
          </span>{" "}
          —{" "}
          <span style={{ color: "oklch(0.65 0.16 195)" }}>
            {clinic?.specialization || "Consultant Physiotherapist"}
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="tel:8401282296">
            <Button
              size="lg"
              className="w-full sm:w-auto font-semibold text-base px-8 py-6 text-white"
              style={{
                backgroundColor: "oklch(0.55 0.16 195)",
                boxShadow: "0 4px 20px -2px oklch(55% 0.16 195 / 0.5)",
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto font-semibold text-base px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white hover:border-white/50"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "5000+", label: "Patients Treated" },
            { value: "10+", label: "Treatments" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: {
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
