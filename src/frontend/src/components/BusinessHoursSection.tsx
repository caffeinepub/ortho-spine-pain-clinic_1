import { useBusinessHours } from "@/hooks/useQueries";
import { CheckCircle, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function BusinessHoursSection() {
  const { data: hours = [] } = useBusinessHours();

  // Determine today
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="hours" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-label">Visit Us</span>
              <div className="section-eyebrow-line" />
            </div>
            <h2 className="section-heading font-display text-4xl sm:text-5xl font-extrabold text-foreground">
              Clinic{" "}
              <span style={{ color: "oklch(0.62 0.18 15)" }}>Timings</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              We are open 7 days a week to serve you better.
            </p>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-card border border-border"
          >
            {/* Header */}
            <div
              className="p-5 flex items-center gap-3"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 12), oklch(0.70 0.16 18))",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">
                  Business Hours
                </h3>
                <p className="text-white/60 text-sm">ORTHO-SPINE PAIN CLINIC</p>
              </div>
            </div>

            {/* Hours List */}
            <div className="bg-white divide-y divide-border">
              {hours.map((hour, index) => {
                const isToday = hour.day === today;
                return (
                  <motion.div
                    key={hour.day}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex items-center justify-between px-6 py-4 transition-colors ${
                      isToday
                        ? "bg-clinic-teal-light/30"
                        : "hover:bg-secondary/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "oklch(0.62 0.18 15)" }}
                        />
                      )}
                      <span
                        className={`font-medium text-sm ${
                          isToday ? "font-semibold" : "text-foreground"
                        }`}
                        style={isToday ? { color: "oklch(0.45 0.18 15)" } : {}}
                      >
                        {hour.day}
                        {isToday && (
                          <span
                            className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{
                              background: "oklch(0.72 0.15 15 / 0.15)",
                              color: "oklch(0.55 0.18 15)",
                            }}
                          >
                            Today
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={
                        isToday
                          ? { color: "oklch(0.55 0.18 15)", fontWeight: "600" }
                          : { color: "oklch(0.5 0.02 25)" }
                      }
                    >
                      {hour.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer note */}
            <div
              className="px-6 py-4 text-center text-sm"
              style={{
                background: "oklch(0.97 0.010 15)",
                color: "oklch(0.50 0.02 15)",
              }}
            >
              📍 Walk-ins welcome · Home visits available on request ·{" "}
              <a
                href="tel:8401282296"
                className="font-semibold hover:underline"
                style={{ color: "oklch(0.55 0.18 15)" }}
              >
                Call for appointment
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
