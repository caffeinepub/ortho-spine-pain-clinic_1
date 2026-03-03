import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [phase, setPhase] = useState<"logo-in" | "hold" | "fade-out" | "done">(
    "logo-in",
  );

  useEffect(() => {
    // Logo fades in: 0.4s
    const holdTimer = setTimeout(() => setPhase("hold"), 400);
    // Hold briefly: 0.9s
    const fadeTimer = setTimeout(() => setPhase("fade-out"), 1300);
    // Unmount: 0.5s fade out
    const doneTimer = setTimeout(() => setPhase("done"), 1800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="page-loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "fade-out" ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        aria-hidden="true"
      >
        {/* Decorative background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, oklch(0.62 0.18 15), transparent 60%)",
          }}
        />

        <div className="relative flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="/assets/uploads/IMG-20250205-WA0003-1-1-1.jpg"
              alt="ORTHO-SPINE PAIN CLINIC"
              className="h-24 w-auto object-contain rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Clinic name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-center"
          >
            <p
              className="font-display text-lg font-bold tracking-wide"
              style={{ color: "oklch(0.55 0.18 15)" }}
            >
              ORTHO-SPINE PAIN CLINIC
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.65 0.05 15)" }}
            >
              Expert Physiotherapy Care
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-48 h-1 rounded-full overflow-hidden"
            style={{ background: "oklch(0.93 0.025 15)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.62 0.18 12), oklch(0.75 0.15 18))",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
