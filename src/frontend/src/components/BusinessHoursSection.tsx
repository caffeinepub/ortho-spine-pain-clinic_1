import { Clock, Sun, Sunset } from "lucide-react";
import { motion } from "motion/react";

const SCHEDULE = [
  {
    key: "weekday",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    label: "Monday – Saturday",
    morning: "9:00 AM – 2:00 PM",
    evening: "4:00 PM – 9:00 PM",
    sunday: false,
  },
  {
    key: "sunday",
    days: ["Sunday"],
    label: "Sunday",
    morning: "10:00 AM – 2:00 PM",
    evening: null,
    sunday: true,
  },
];

function getTodayName(): string {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export default function BusinessHoursSection() {
  const todayName = getTodayName();
  const todaySchedule =
    SCHEDULE.find((s) => s.days.includes(todayName)) ?? null;

  return (
    <section id="hours" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-label">Visit Us</span>
              <div className="section-eyebrow-line" />
            </div>
            <h2 className="section-heading font-display text-3xl sm:text-4xl font-extrabold text-foreground">
              Clinic{" "}
              <span style={{ color: "oklch(0.62 0.18 15)" }}>Timings</span>
            </h2>
          </motion.div>

          {/* Today's Status Banner */}
          {todaySchedule && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-5 rounded-2xl px-5 py-4 flex items-center justify-between gap-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 12), oklch(0.70 0.16 18))",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                  <Clock className="w-4 h-4 text-white" />
                </span>
                <div>
                  <p className="text-white/80 text-xs font-medium tracking-wide uppercase">
                    Today — {todayName}
                  </p>
                  <p className="text-white font-bold text-sm">
                    {todaySchedule.morning}
                    {todaySchedule.evening && (
                      <span className="text-white/70 font-normal">
                        {" · Lunch 2–4 PM · "}
                        {todaySchedule.evening}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <span className="flex-shrink-0 flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                <span className="text-white text-xs font-semibold">Open</span>
              </span>
            </motion.div>
          )}

          {/* Schedule Cards */}
          <div className="space-y-3">
            {SCHEDULE.map((row, index) => {
              const isActiveRow = row.days.includes(todayName);
              return (
                <motion.div
                  key={row.key}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.09 }}
                  className={`rounded-2xl border overflow-hidden transition-shadow ${
                    isActiveRow
                      ? "border-rose-200 shadow-md"
                      : "border-border shadow-sm"
                  }`}
                  style={
                    isActiveRow
                      ? { background: "oklch(0.99 0.008 15)" }
                      : { background: "white" }
                  }
                >
                  {/* Row header */}
                  <div
                    className={`flex items-center justify-between px-4 py-2.5 border-b ${
                      isActiveRow ? "border-rose-100" : "border-border"
                    }`}
                    style={
                      isActiveRow
                        ? { background: "oklch(0.97 0.015 15)" }
                        : { background: "oklch(0.98 0.005 15)" }
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="font-display font-bold text-sm"
                        style={
                          isActiveRow
                            ? { color: "oklch(0.45 0.18 15)" }
                            : { color: "oklch(0.35 0.02 25)" }
                        }
                      >
                        {row.label}
                      </span>
                      {isActiveRow && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                          style={{
                            background: "oklch(0.62 0.18 15 / 0.15)",
                            color: "oklch(0.50 0.18 15)",
                          }}
                        >
                          Today
                        </span>
                      )}
                    </div>
                    {row.sunday ? (
                      <span className="text-xs text-amber-600 font-medium flex items-center gap-1">
                        <Sun className="w-3 h-3" /> Half Day
                      </span>
                    ) : (
                      <span
                        className="text-xs font-medium flex items-center gap-1"
                        style={{ color: "oklch(0.60 0.06 15)" }}
                      >
                        <Clock className="w-3 h-3" /> Full Day
                      </span>
                    )}
                  </div>

                  {/* Time blocks */}
                  <div className="px-4 py-3 space-y-2">
                    {/* Morning block */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.96 0.012 80)" }}
                      >
                        <Sun
                          className="w-3.5 h-3.5"
                          style={{ color: "oklch(0.65 0.14 70)" }}
                        />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wide w-14"
                          style={{ color: "oklch(0.60 0.10 70)" }}
                        >
                          Morning
                        </span>
                        <span
                          className="text-xs font-bold tabular-nums"
                          style={{ color: "oklch(0.30 0.04 18)" }}
                        >
                          {row.morning}
                        </span>
                      </div>
                    </div>

                    {!row.sunday && (
                      <>
                        {/* Lunch note inline */}
                        <div
                          className="text-[10px] pl-10 font-medium"
                          style={{ color: "oklch(0.62 0.06 55)" }}
                        >
                          ☕ Lunch break: 2:00 PM – 4:00 PM
                        </div>

                        {/* Evening block */}
                        <div className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: "oklch(0.96 0.015 12)" }}
                          >
                            <Sunset
                              className="w-3.5 h-3.5"
                              style={{ color: "oklch(0.62 0.18 15)" }}
                            />
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span
                              className="text-[10px] font-semibold uppercase tracking-wide w-14"
                              style={{ color: "oklch(0.55 0.14 15)" }}
                            >
                              Evening
                            </span>
                            <span
                              className="text-xs font-bold tabular-nums"
                              style={{ color: "oklch(0.30 0.04 18)" }}
                            >
                              {row.evening}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-5 text-center text-xs rounded-xl px-4 py-3"
            style={{
              background: "oklch(0.97 0.010 15)",
              color: "oklch(0.50 0.02 15)",
            }}
          >
            Walk-ins welcome · Home visits on request ·{" "}
            <a
              href="tel:8401282296"
              className="font-semibold hover:underline"
              style={{ color: "oklch(0.55 0.18 15)" }}
            >
              Call for appointment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
