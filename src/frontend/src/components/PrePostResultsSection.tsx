import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const IMAGES = [
  { src: "/assets/uploads/WA_1772619138958-1.jpeg", alt: "Patient result 1" },
  { src: "/assets/uploads/WA_1772619160725-2.jpeg", alt: "Patient result 2" },
  { src: "/assets/uploads/WA_1772619224409-3.jpeg", alt: "Patient result 3" },
  { src: "/assets/uploads/WA_1772619087024-4.jpeg", alt: "Patient result 4" },
  { src: "/assets/uploads/IMG-20260304-WA0018-5.jpg", alt: "Patient result 5" },
  { src: "/assets/uploads/WA_1772619244141-6.jpeg", alt: "Patient result 6" },
  { src: "/assets/uploads/WA_1772619116591-7.jpeg", alt: "Patient result 7" },
  { src: "/assets/uploads/WA_1772619063538-8.jpeg", alt: "Patient result 8" },
  { src: "/assets/uploads/WA_1772619020804-9.jpeg", alt: "Patient result 9" },
  {
    src: "/assets/uploads/IMG-20260304-WA0006-10.jpg",
    alt: "Patient result 10",
  },
  {
    src: "/assets/uploads/WA_1772619204542-11.jpeg",
    alt: "Patient result 11",
  },
  {
    src: "/assets/uploads/WA_1772619266624-12.jpeg",
    alt: "Patient result 12",
  },
  {
    src: "/assets/uploads/WA_1772619184627-13.jpeg",
    alt: "Patient result 13",
  },
];

const TOTAL = IMAGES.length;

function getVisibleCount(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function PrePostResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Extended array: clone tail + original + clone head for seamless loop
  // We prepend TOTAL images (for prev-wrap) and append TOTAL images (for next-wrap)
  const EXTENDED = [...IMAGES, ...IMAGES, ...IMAGES];
  const OFFSET = TOTAL; // currentIndex starts at TOTAL (pointing to original first image)

  const [trackIndex, setTrackIndex] = useState(OFFSET);

  const goNext = useCallback(() => {
    setIsAnimating(true);
    setTrackIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setIsAnimating(true);
    setTrackIndex((prev) => prev - 1);
  }, []);

  // After reaching boundaries of extended array, silently reset to middle copy
  useEffect(() => {
    if (trackIndex >= TOTAL * 2) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTrackIndex(trackIndex - TOTAL);
      }, 520);
      return () => clearTimeout(timer);
    }
    if (trackIndex < TOTAL) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTrackIndex(trackIndex + TOTAL);
      }, 520);
      return () => clearTimeout(timer);
    }
  }, [trackIndex]);

  // Keep currentIndex in sync with dot indicator
  // biome-ignore lint/correctness/useExhaustiveDependencies: OFFSET is a module-level constant
  useEffect(() => {
    setCurrentIndex((((trackIndex - OFFSET) % TOTAL) + TOTAL) % TOTAL);
  }, [trackIndex]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidthPercent = 100 / visibleCount;
  const translateXPercent = -trackIndex * cardWidthPercent;

  const goToDot = (dotIdx: number) => {
    const targetTrackIndex = OFFSET + dotIdx;
    setIsAnimating(true);
    setTrackIndex(targetTrackIndex);
  };

  return (
    <section
      id="results"
      data-ocid="results.section"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.99 0.004 15) 0%, oklch(0.96 0.018 12) 50%, oklch(0.98 0.010 15) 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-[0.07] pointer-events-none blur-3xl"
        style={{ background: "oklch(0.62 0.18 15)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none blur-3xl"
        style={{ background: "oklch(0.70 0.16 18)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Before &amp; After</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-3">
            Patient{" "}
            <span style={{ color: "oklch(0.62 0.18 15)" }}>Results</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Real transformations from our clinic — evidence of effective
            physiotherapy treatment.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            type="button"
            onClick={goPrev}
            data-ocid="results.prev_button"
            aria-label="Previous result"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-4 sm:-translate-x-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 group hover:scale-110 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.18 15), oklch(0.72 0.15 18))",
              boxShadow:
                "0 4px 20px oklch(0.62 0.18 15 / 0.35), 0 1px 0 oklch(1 0 0 / 0.20) inset",
              color: "white",
            }}
          >
            <ChevronLeft className="w-5 h-5 transition-transform duration-150 group-hover:-translate-x-0.5" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={goNext}
            data-ocid="results.next_button"
            aria-label="Next result"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-4 sm:translate-x-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 group hover:scale-110 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.18 15), oklch(0.72 0.15 18))",
              boxShadow:
                "0 4px 20px oklch(0.62 0.18 15 / 0.35), 0 1px 0 oklch(1 0 0 / 0.20) inset",
              color: "white",
            }}
          >
            <ChevronRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </button>

          {/* Viewport clip */}
          <div className="overflow-hidden rounded-2xl">
            {/* Track */}
            <div
              className="flex"
              style={{
                transform: `translateX(${translateXPercent}%)`,
                transition: isAnimating
                  ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
                willChange: "transform",
              }}
            >
              {EXTENDED.map((image, idx) => {
                const originalIdx = idx % TOTAL;
                // Only apply data-ocid to the middle copy (TOTAL … 2*TOTAL-1)
                const isMiddleCopy = idx >= TOTAL && idx < TOTAL * 2;
                const ocid = isMiddleCopy
                  ? (`results.item.${originalIdx + 1}` as const)
                  : undefined;
                // Key: use copy-group prefix to avoid index-as-key lint while keeping it stable
                const copyGroup = Math.floor(idx / TOTAL);
                const stableKey = `copy${copyGroup}-result${originalIdx}`;

                return (
                  <div
                    key={stableKey}
                    data-ocid={ocid}
                    style={{
                      flexShrink: 0,
                      width: `${cardWidthPercent}%`,
                      padding: "0 8px",
                    }}
                  >
                    <ResultCard image={image} index={originalIdx} />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Dot indicators */}
        <div
          className="flex justify-center items-center gap-2 mt-8"
          role="tablist"
          aria-label="Patient result slides"
        >
          {IMAGES.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={currentIndex === i}
              aria-label={`Go to result ${i + 1}`}
              onClick={() => goToDot(i)}
              className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              style={{
                width: currentIndex === i ? "28px" : "8px",
                height: "8px",
                background:
                  currentIndex === i
                    ? "oklch(0.62 0.18 15)"
                    : "oklch(0.62 0.18 15 / 0.22)",
              }}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-xs mt-5"
          style={{ color: "oklch(0.60 0.015 20)" }}
        >
          Results may vary. Individual patient outcomes depend on condition
          severity and treatment adherence.
        </motion.p>
      </div>
    </section>
  );
}

function ResultCard({
  image,
  index,
}: {
  image: { src: string; alt: string };
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer"
      style={{
        boxShadow:
          "0 4px 20px oklch(0.62 0.18 15 / 0.08), 0 1px 4px oklch(0.20 0.02 15 / 0.07)",
        border: "1px solid oklch(0.90 0.016 15)",
        background: "white",
      }}
    >
      {/* Fixed 4:3 aspect ratio container */}
      <div className="relative w-full" style={{ paddingBottom: "75%" }}>
        {/* Skeleton while loading */}
        {!loaded && !errored && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{ background: "oklch(0.94 0.018 15)" }}
          />
        )}

        {/* Error fallback */}
        {errored && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: "oklch(0.97 0.010 15)" }}
          >
            <ImageIcon
              className="w-10 h-10"
              style={{ color: "oklch(0.70 0.10 15)" }}
            />
            <span
              className="text-xs font-semibold"
              style={{ color: "oklch(0.55 0.08 15)" }}
            >
              Result {index + 1}
            </span>
          </div>
        )}

        {!errored && (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.35s ease, transform 0.5s ease",
            }}
          />
        )}

        {/* Hover gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(0.28 0.12 15 / 0.50) 0%, transparent 55%)",
          }}
        />

        {/* Result badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.62 0.18 15), oklch(0.72 0.15 18))",
            color: "white",
            boxShadow: "0 2px 10px oklch(0.62 0.18 15 / 0.45)",
          }}
        >
          #{index + 1}
        </div>
      </div>
    </motion.div>
  );
}
