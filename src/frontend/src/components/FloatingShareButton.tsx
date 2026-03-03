import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Copy, Instagram, MessageCircle, Share2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function FloatingShareButton() {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
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
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={shareOpen} onOpenChange={setShareOpen}>
        <PopoverTrigger asChild>
          <motion.button
            type="button"
            data-ocid="floating.share_button"
            aria-label="Share this clinic"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={shareOpen ? { scale: 1.05 } : { scale: 1 }}
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-shadow duration-300"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
              boxShadow: shareOpen
                ? "0 8px 30px oklch(0.62 0.18 15 / 0.55)"
                : "0 4px 20px oklch(0.62 0.18 15 / 0.40)",
            }}
          >
            <motion.div
              animate={{ rotate: shareOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Share2 className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </PopoverTrigger>

        {/* Pulse ring animation */}
        {!shareOpen && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            }}
            style={{ background: "oklch(0.62 0.18 15)" }}
          />
        )}

        <PopoverContent
          data-ocid="floating.share_popover"
          side="top"
          align="end"
          sideOffset={12}
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
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
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
                  data-ocid="floating.share.copy_link_button"
                  onClick={handleCopyLink}
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
                        color: copied ? "oklch(1 0 0)" : "oklch(0.62 0.18 15)",
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
                  data-ocid="floating.share.whatsapp_button"
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
                  <span className="text-sm font-medium">Share on WhatsApp</span>
                </button>

                {/* Instagram */}
                <button
                  type="button"
                  data-ocid="floating.share.instagram_button"
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
                  <span className="text-sm font-medium">View on Instagram</span>
                </button>

                {/* Native Share — only shown on supported devices */}
                {hasNativeShare && (
                  <button
                    type="button"
                    data-ocid="floating.share.native_share_button"
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
                    <span className="text-sm font-medium">More Options</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </PopoverContent>
      </Popover>
    </div>
  );
}
