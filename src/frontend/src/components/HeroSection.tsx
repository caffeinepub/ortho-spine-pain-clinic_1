import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCountUp } from "@/hooks/useCountUp";
import { useClinicInfo } from "@/hooks/useQueries";
import {
  Calendar,
  ChevronDown,
  Copy,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

function HeroStats() {
  const { count: yearsCount, ref: yearsRef } = useCountUp(6, 1200);
  const { count: patientsCount, ref: patientsRef } = useCountUp(5000, 1800);
  const { count: treatmentsCount, ref: treatmentsRef } = useCountUp(10, 1000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.75 }}
      className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
    >
      <div ref={yearsRef} className="text-center">
        <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          {yearsCount}+
        </div>
        <div className="text-white/60 text-xs sm:text-sm mt-1">
          Years Experience
        </div>
      </div>
      <div ref={patientsRef} className="text-center">
        <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          {patientsCount}+
        </div>
        <div className="text-white/60 text-xs sm:text-sm mt-1">
          Patients Treated
        </div>
      </div>
      <div ref={treatmentsRef} className="text-center">
        <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          {treatmentsCount}+
        </div>
        <div className="text-white/60 text-xs sm:text-sm mt-1">Treatments</div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { data: clinic } = useClinicInfo();
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const pageUrl = window.location.href;
  const shareText = `ORTHO-SPINE PAIN CLINIC — Expert Physiotherapy Care in Surat. Dr. Arbaz Shaikh, Consultant Physiotherapist. Book your appointment today! ${pageUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link.");
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setShareOpen(false);
  };

  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/ortho_spine.pain_clinic",
      "_blank",
      "noopener,noreferrer",
    );
    setShareOpen(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "ORTHO-SPINE PAIN CLINIC",
          text: "Expert Physiotherapy Care in Surat by Dr. Arbaz Shaikh",
          url: pageUrl,
        });
        setShareOpen(false);
      } catch {
        // User cancelled or error — no action needed
      }
    }
  };

  const hasNativeShare = typeof navigator !== "undefined" && !!navigator.share;

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
        {/* Soft rose overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.20_0.04_15/0.82)] via-[oklch(0.45_0.14_15/0.75)] to-[oklch(0.62_0.18_15/0.55)]" />
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

      {/* Spine illustration watermark */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 h-[90%] opacity-10 pointer-events-none select-none hidden lg:block">
        <img
          src="/assets/generated/spine-illustration-transparent.dim_400x800.png"
          alt=""
          aria-hidden="true"
          className="h-full w-auto object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

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
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.88 0.10 15)" }}
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
          <span style={{ color: "oklch(0.90 0.10 15)" }}>PAIN CLINIC</span>
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
          <span style={{ color: "oklch(0.90 0.10 15)" }}>
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
                backgroundColor: "oklch(0.62 0.18 15)",
                boxShadow: "0 4px 20px -2px oklch(62% 0.18 15 / 0.40)",
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

          {/* Share Button with Popover */}
          <Popover open={shareOpen} onOpenChange={setShareOpen}>
            <PopoverTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.share_button"
                className="w-full sm:w-auto font-semibold text-base px-6 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Share this clinic"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </PopoverTrigger>
            <PopoverContent
              data-ocid="share.popover"
              side="bottom"
              align="center"
              className="w-64 p-0 overflow-hidden border-0 shadow-2xl"
              style={{
                background: "oklch(1 0 0)",
                borderRadius: "1rem",
                boxShadow:
                  "0 20px 60px -10px oklch(0.62 0.18 15 / 0.30), 0 4px 16px oklch(0.62 0.18 15 / 0.12)",
              }}
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  {/* Popover Header */}
                  <div
                    className="px-4 py-3 border-b"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.96 0.018 15), oklch(0.99 0.004 15))",
                      borderColor: "oklch(0.92 0.014 15)",
                    }}
                  >
                    <p
                      className="text-sm font-bold tracking-wide"
                      style={{ color: "oklch(0.28 0.04 18)" }}
                    >
                      Share Clinic
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.52 0.025 20)" }}
                    >
                      Spread the word about ORTHO-SPINE
                    </p>
                  </div>

                  {/* Share Options */}
                  <div className="p-2 flex flex-col gap-1">
                    {/* Copy Link */}
                    <button
                      type="button"
                      data-ocid="share.copy_link_button"
                      onClick={handleCopyLink}
                      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all duration-150 group"
                      style={{ color: "oklch(0.28 0.04 18)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "oklch(0.96 0.018 15)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-all duration-150"
                        style={{
                          background: copied
                            ? "oklch(0.55 0.18 150)"
                            : "oklch(0.95 0.025 15)",
                        }}
                      >
                        <Copy
                          className="w-4 h-4"
                          style={{
                            color: copied
                              ? "oklch(1 0 0)"
                              : "oklch(0.62 0.18 15)",
                          }}
                        />
                      </span>
                      <span className="text-sm font-medium">
                        {copied ? "Copied!" : "Copy Link"}
                      </span>
                    </button>

                    {/* WhatsApp */}
                    <button
                      type="button"
                      data-ocid="share.whatsapp_button"
                      onClick={handleWhatsApp}
                      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all duration-150"
                      style={{ color: "oklch(0.28 0.04 18)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "oklch(0.96 0.018 15)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                        style={{ background: "oklch(0.93 0.12 150)" }}
                      >
                        <MessageCircle
                          className="w-4 h-4"
                          style={{ color: "oklch(0.38 0.18 150)" }}
                        />
                      </span>
                      <span className="text-sm font-medium">
                        Share on WhatsApp
                      </span>
                    </button>

                    {/* Instagram */}
                    <button
                      type="button"
                      data-ocid="share.instagram_button"
                      onClick={handleInstagram}
                      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all duration-150"
                      style={{ color: "oklch(0.28 0.04 18)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "oklch(0.96 0.018 15)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.72 0.18 50), oklch(0.62 0.22 20), oklch(0.55 0.22 310))",
                        }}
                      >
                        <Instagram
                          className="w-4 h-4"
                          style={{ color: "oklch(1 0 0)" }}
                        />
                      </span>
                      <span className="text-sm font-medium">
                        View on Instagram
                      </span>
                    </button>

                    {/* Native Share — only shown on supported devices */}
                    {hasNativeShare && (
                      <button
                        type="button"
                        data-ocid="share.native_share_button"
                        onClick={handleNativeShare}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all duration-150"
                        style={{ color: "oklch(0.28 0.04 18)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "oklch(0.96 0.018 15)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "transparent";
                        }}
                      >
                        <span
                          className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                          style={{ background: "oklch(0.93 0.06 240)" }}
                        >
                          <Share2
                            className="w-4 h-4"
                            style={{ color: "oklch(0.45 0.14 240)" }}
                          />
                        </span>
                        <span className="text-sm font-medium">
                          More Options
                        </span>
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </PopoverContent>
          </Popover>
        </motion.div>

        {/* Stats */}
        <HeroStats />
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
