import { useTestimonials } from "@/hooks/useQueries";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import type { Testimonial } from "../backend.d";

function StarRating({ rating }: { rating: bigint }) {
  const stars = Number(rating);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`w-3.5 h-3.5 ${n <= stars ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function PatientAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Pick a consistent hue based on name
  const hues = [195, 210, 180, 225, 165, 240];
  const hue = hues[name.charCodeAt(0) % hues.length];

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{
        background: `linear-gradient(135deg, oklch(0.42 0.13 ${hue}), oklch(0.58 0.16 ${hue}))`,
        boxShadow: `0 2px 8px oklch(0.42 0.13 ${hue} / 0.3)`,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="h-full card-hover-glow group"
    >
      <div
        className="h-full bg-white rounded-2xl flex flex-col overflow-hidden"
        style={{
          border: "1px solid oklch(0.88 0.015 220)",
          boxShadow: "0 2px 12px oklch(0.42 0.13 200 / 0.06)",
        }}
      >
        {/* Top gradient accent */}
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.45 0.14 200), oklch(0.58 0.17 195))",
          }}
        />

        <div className="p-6 flex flex-col flex-1">
          {/* Star rating at top */}
          <div className="flex items-center justify-between mb-4">
            <StarRating rating={testimonial.rating} />
            {/* Decorative large quote */}
            <div
              className="font-display text-6xl leading-none select-none pointer-events-none"
              style={{ color: "oklch(0.88 0.06 195 / 0.6)", lineHeight: "0.8" }}
              aria-hidden="true"
            >
              "
            </div>
          </div>

          {/* Review text */}
          <p className="text-foreground/75 text-sm leading-relaxed flex-1 mb-5">
            {testimonial.review}
          </p>

          {/* Patient info */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/60 mt-auto">
            <PatientAvatar name={testimonial.patientName} />
            <div>
              <p className="font-semibold text-sm text-foreground leading-tight">
                {testimonial.patientName}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {testimonial.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { data: testimonials = [] } = useTestimonials();

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.965 0.012 215)" }}
    >
      {/* Decorative circle */}
      <div
        className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "oklch(0.42 0.13 200)" }}
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
            <span className="section-eyebrow-label">Patient Stories</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
            What Our{" "}
            <span style={{ color: "oklch(0.42 0.13 200)" }}>Patients Say</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Real experiences from real patients who found relief and recovery at
            ORTHO-SPINE PAIN CLINIC.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div
            className="inline-flex items-center gap-6 px-8 py-5 rounded-2xl text-white"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.25 0.05 240), oklch(0.42 0.13 200))",
              boxShadow: "0 8px 32px oklch(0.42 0.13 200 / 0.25)",
            }}
          >
            <div className="text-center">
              <div className="font-display text-4xl font-extrabold tracking-tight">
                5.0
              </div>
              <div className="text-white/60 text-xs mt-0.5 tracking-wide">
                Rating
              </div>
            </div>
            <div className="w-px h-12 bg-white/15" />
            <div className="text-center">
              <div className="flex gap-0.5 mb-1 justify-center">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-white/60 text-xs tracking-wide">
                {testimonials.length}+ Reviews
              </div>
            </div>
            <div className="w-px h-12 bg-white/15" />
            <div className="text-center">
              <div className="font-display text-4xl font-extrabold tracking-tight">
                5K+
              </div>
              <div className="text-white/60 text-xs mt-0.5 tracking-wide">
                Patients
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.patientName}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
