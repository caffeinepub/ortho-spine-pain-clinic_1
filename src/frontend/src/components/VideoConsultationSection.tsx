import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  CreditCard,
  IndianRupee,
  Info,
  QrCode,
  Smartphone,
  Video,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiGooglemeet, SiZoom } from "react-icons/si";
import upiQrCode from "/assets/uploads/WA_1772648312707-1.jpeg";

const PLATFORMS = [
  {
    id: "WhatsApp Video Call",
    label: "WhatsApp",
    sublabel: "Video Call",
    icon: Smartphone,
    color: "#25D366",
    bg: "oklch(0.95 0.06 145)",
    activeBg:
      "linear-gradient(135deg, oklch(0.55 0.18 145), oklch(0.68 0.16 145))",
  },
  {
    id: "Google Meet",
    label: "Google Meet",
    sublabel: "Video Call",
    // Google Meet brand icon from react-icons
    Icon: SiGooglemeet,
    color: "#1A73E8",
    bg: "oklch(0.95 0.03 230)",
    activeBg:
      "linear-gradient(135deg, oklch(0.52 0.16 230), oklch(0.65 0.14 230))",
  },
  {
    id: "Zoom",
    label: "Zoom",
    sublabel: "Video Call",
    Icon: SiZoom,
    color: "#2D8CFF",
    bg: "oklch(0.94 0.04 220)",
    activeBg:
      "linear-gradient(135deg, oklch(0.53 0.17 220), oklch(0.65 0.14 220))",
  },
];

const today = new Date().toISOString().split("T")[0];

const TIME_SLOTS = [
  { group: "Morning", slots: ["9:00 AM", "10:00 AM", "11:00 AM"] },
  { group: "Afternoon", slots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"] },
  { group: "Evening", slots: ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"] },
];

export default function VideoConsultationSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [platform, setPlatform] = useState("");
  const [concern, setConcern] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform) return;

    const text = [
      "New Video Consultation Request:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${timeSlot || "Flexible"}`,
      `Platform: ${platform}`,
      `Concern: ${concern || "Not specified"}`,
      "Consultation Fee: ₹700",
      "Payment: Will pay at the time of appointment via UPI (shaikh.arbaz581@okhdfcbank)",
    ].join("\n");

    const waUrl = `https://wa.me/918401282296?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setDate("");
    setTimeSlot("");
    setPlatform("");
    setConcern("");
    setSubmitted(false);
    setShowQr(false);
  };

  return (
    <section
      id="video-consult"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.980 0.008 250) 0%, oklch(0.975 0.010 15) 50%, oklch(0.980 0.006 250) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "oklch(0.62 0.20 230)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "oklch(0.62 0.18 15)" }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, oklch(0.50 0.10 230) 0px, transparent 1px, transparent 60px, oklch(0.50 0.10 230) 61px), repeating-linear-gradient(90deg, oklch(0.50 0.10 230) 0px, transparent 1px, transparent 60px, oklch(0.50 0.10 230) 61px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Consult From Home</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl font-extrabold text-foreground">
            Video{" "}
            <span style={{ color: "oklch(0.55 0.18 15)" }}>Consultation</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Connect with Dr. Arbaz Shaikh from the comfort of your home. Get
            expert physiotherapy consultation via video call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="bg-white rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid oklch(0.88 0.025 15)",
            boxShadow:
              "0 8px 40px -8px oklch(0.52 0.16 230 / 0.14), 0 2px 12px oklch(0 0 0 / 0.04)",
          }}
        >
          {/* Fee banner at top */}
          <div
            className="px-8 py-5 flex items-center justify-between gap-4 flex-wrap"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.28 0.12 15) 0%, oklch(0.38 0.16 12) 60%, oklch(0.32 0.14 20) 100%)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(1 0 0 / 0.15)" }}
              >
                <Video className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  Online Video Consultation
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "oklch(0.90 0.08 20)" }}
                >
                  Dr. Arbaz Shaikh · Consultant Physiotherapist
                </p>
              </div>
            </div>
            {/* Fee badge */}
            <div
              className="flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.18 25), oklch(0.88 0.14 30))",
                color: "oklch(0.18 0.06 15)",
                boxShadow: "0 2px 12px oklch(0.75 0.18 25 / 0.40)",
              }}
            >
              <IndianRupee className="w-3.5 h-3.5" />
              <span>700 per session</span>
            </div>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="vc-name"
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.35 0.04 18)" }}
                    >
                      Full Name{" "}
                      <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                    </Label>
                    <Input
                      id="vc-name"
                      data-ocid="video_consult.name_input"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 text-sm focus-visible:ring-1"
                      style={
                        {
                          borderColor: "oklch(0.88 0.025 15)",
                          "--tw-ring-color": "oklch(0.52 0.16 230)",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="vc-phone"
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.35 0.04 18)" }}
                    >
                      Phone Number{" "}
                      <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                    </Label>
                    <Input
                      id="vc-phone"
                      data-ocid="video_consult.phone_input"
                      type="tel"
                      placeholder="Your phone number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-11 text-sm focus-visible:ring-1"
                      style={
                        {
                          borderColor: "oklch(0.88 0.025 15)",
                          "--tw-ring-color": "oklch(0.52 0.16 230)",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="vc-date"
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.35 0.04 18)" }}
                    >
                      Preferred Date{" "}
                      <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                    </Label>
                    <Input
                      id="vc-date"
                      data-ocid="video_consult.date_input"
                      type="date"
                      min={today}
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="h-11 text-sm focus-visible:ring-1"
                      style={
                        {
                          borderColor: "oklch(0.88 0.025 15)",
                          "--tw-ring-color": "oklch(0.52 0.16 230)",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  {/* Preferred Time Slot */}
                  {date && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <Label
                        className="text-sm font-semibold"
                        style={{ color: "oklch(0.35 0.04 18)" }}
                      >
                        Preferred Time Slot{" "}
                        <span className="text-muted-foreground font-normal text-xs">
                          (optional)
                        </span>
                      </Label>
                      {TIME_SLOTS.map((group) => (
                        <div key={group.group}>
                          <p
                            className="text-xs font-bold uppercase tracking-wider mb-2"
                            style={{ color: "oklch(0.55 0.08 18)" }}
                          >
                            {group.group}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.slots.map((slot) => {
                              const isActive = timeSlot === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() =>
                                    setTimeSlot(isActive ? "" : slot)
                                  }
                                  data-ocid={`video_consult.time_slot.${slot.replace(/[: ]/g, "_")}`}
                                  className="px-3 py-1.5 rounded-lg text-xs font-semibold border-2 transition-all duration-200"
                                  style={
                                    isActive
                                      ? {
                                          background:
                                            "linear-gradient(135deg, oklch(0.55 0.18 15), oklch(0.68 0.16 18))",
                                          borderColor: "transparent",
                                          color: "white",
                                          boxShadow:
                                            "0 2px 10px oklch(0.62 0.18 15 / 0.30)",
                                          transform: "translateY(-1px)",
                                        }
                                      : {
                                          background: "oklch(0.97 0.010 18)",
                                          borderColor: "oklch(0.88 0.025 15)",
                                          color: "oklch(0.40 0.06 18)",
                                        }
                                  }
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      <div
                        className="flex items-start gap-2 rounded-lg px-3 py-2.5"
                        style={{
                          background: "oklch(0.96 0.04 220)",
                          border: "1px solid oklch(0.88 0.06 220)",
                        }}
                      >
                        <Info
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: "oklch(0.52 0.16 230)" }}
                        />
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "oklch(0.38 0.10 230)" }}
                        >
                          Dr. Arbaz will confirm the final timing within{" "}
                          <strong>12 hours</strong>.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Platform selector */}
                  <div className="space-y-3">
                    <Label
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.35 0.04 18)" }}
                    >
                      Preferred Platform{" "}
                      <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                    </Label>
                    <div
                      data-ocid="video_consult.platform_select"
                      className="grid grid-cols-3 gap-3"
                    >
                      {PLATFORMS.map((p) => {
                        const isSelected = platform === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setPlatform(p.id)}
                            className="relative flex flex-col items-center gap-2 py-4 px-2 rounded-xl border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                            style={
                              isSelected
                                ? {
                                    background: p.activeBg,
                                    borderColor: "transparent",
                                    boxShadow:
                                      "0 4px 16px oklch(0.52 0.16 230 / 0.25)",
                                    color: "white",
                                    transform: "translateY(-2px)",
                                  }
                                : {
                                    background: p.bg,
                                    borderColor: "oklch(0.90 0.02 15)",
                                    color: "oklch(0.32 0.05 18)",
                                  }
                            }
                          >
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{
                                background: isSelected
                                  ? "oklch(1 0 0 / 0.20)"
                                  : "oklch(1 0 0 / 0.60)",
                              }}
                            >
                              {p.icon ? (
                                <p.icon
                                  className="w-5 h-5"
                                  style={{
                                    color: isSelected ? "white" : p.color,
                                  }}
                                />
                              ) : (
                                p.Icon && (
                                  <p.Icon
                                    size={20}
                                    style={{
                                      color: isSelected ? "white" : p.color,
                                    }}
                                  />
                                )
                              )}
                            </div>
                            <div className="text-center leading-tight">
                              <p className="font-bold text-xs">{p.label}</p>
                              <p
                                className="text-xs opacity-75 mt-0.5"
                                style={{
                                  color: isSelected
                                    ? "oklch(1 0 0 / 0.80)"
                                    : "oklch(0.50 0.04 18)",
                                }}
                              >
                                {p.sublabel}
                              </p>
                            </div>
                            {isSelected && (
                              <motion.div
                                layoutId="platform-selected"
                                className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center"
                                style={{ background: "oklch(1 0 0 / 0.25)" }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                }}
                              >
                                <div className="w-2 h-2 rounded-full bg-white" />
                              </motion.div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    {!platform && (
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.04 18)" }}
                      >
                        Select your preferred video call platform
                      </p>
                    )}
                  </div>

                  {/* Concern / Symptoms */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="vc-concern"
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.35 0.04 18)" }}
                    >
                      Concern / Symptoms{" "}
                      <span className="text-muted-foreground font-normal text-xs">
                        (optional)
                      </span>
                    </Label>
                    <Textarea
                      id="vc-concern"
                      data-ocid="video_consult.concern_textarea"
                      placeholder="Briefly describe your concern..."
                      rows={3}
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      className="text-sm resize-none focus-visible:ring-1"
                      style={
                        {
                          borderColor: "oklch(0.88 0.025 15)",
                          "--tw-ring-color": "oklch(0.52 0.16 230)",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  {/* Payment info pre-submit */}
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: "oklch(0.97 0.012 50)",
                      border: "1px solid oklch(0.88 0.04 50)",
                    }}
                  >
                    <div className="px-4 py-4 flex items-start gap-3">
                      <CreditCard
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: "oklch(0.55 0.14 50)" }}
                      />
                      <div className="text-xs leading-relaxed space-y-1 flex-1">
                        <p
                          className="font-bold text-sm"
                          style={{ color: "oklch(0.35 0.08 50)" }}
                        >
                          Payment: ₹700 at the time of appointment
                        </p>
                        <p style={{ color: "oklch(0.50 0.06 50)" }}>
                          UPI ID:{" "}
                          <a
                            href="upi://pay?pa=shaikh.arbaz581@okhdfcbank&pn=Dr%20Arbaz%20Shaikh&am=700&cu=INR"
                            className="font-bold underline underline-offset-2 transition-opacity hover:opacity-80 active:opacity-60"
                            style={{ color: "oklch(0.38 0.16 50)" }}
                          >
                            shaikh.arbaz581@okhdfcbank
                          </a>
                        </p>
                        <p style={{ color: "oklch(0.55 0.04 50)" }}>
                          Make payment only after Dr. confirms the timing.
                        </p>
                        <button
                          type="button"
                          onClick={() => setShowQr((v) => !v)}
                          className="flex items-center gap-1.5 mt-2 text-xs font-semibold transition-opacity hover:opacity-80"
                          style={{ color: "oklch(0.45 0.14 50)" }}
                        >
                          <QrCode className="w-3.5 h-3.5" />
                          {showQr ? "Hide QR Code" : "Show UPI QR Code"}
                        </button>
                      </div>
                    </div>
                    <AnimatePresence>
                      {showQr && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-4 pb-4 flex flex-col items-center gap-2"
                            style={{
                              borderTop: "1px solid oklch(0.88 0.04 50)",
                            }}
                          >
                            <p
                              className="text-xs font-semibold pt-3"
                              style={{ color: "oklch(0.45 0.08 50)" }}
                            >
                              Scan to Pay via UPI
                            </p>
                            <img
                              src={upiQrCode}
                              alt="UPI QR Code - Dr. Arbaz Shaikh"
                              className="w-52 h-52 rounded-xl object-cover"
                              style={{
                                border: "2px solid oklch(0.85 0.06 50)",
                              }}
                            />
                            <p
                              className="text-xs text-center"
                              style={{ color: "oklch(0.55 0.04 50)" }}
                            >
                              shaikh.arbaz581@okhdfcbank
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    data-ocid="video_consult.submit_button"
                    className="w-full h-12 text-white font-semibold text-base"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                      boxShadow: "0 4px 20px oklch(0.62 0.18 15 / 0.30)",
                      opacity: !platform ? 0.7 : 1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book Video Consult via WhatsApp
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  data-ocid="video_consult.success_state"
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center text-center py-4 gap-5"
                >
                  {/* Green checkmark */}
                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.1,
                    }}
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.94 0.08 145)" }}
                  >
                    <CheckCircle
                      className="w-10 h-10"
                      style={{ color: "oklch(0.55 0.20 145)" }}
                    />
                  </motion.div>

                  {/* Heading */}
                  <div>
                    <h3
                      className="font-display text-2xl font-bold mb-2"
                      style={{ color: "oklch(0.30 0.04 18)" }}
                    >
                      Video Consult Booked!
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                      We will confirm your video call timing within{" "}
                      <strong style={{ color: "oklch(0.45 0.18 15)" }}>
                        12 hours
                      </strong>
                      .
                    </p>
                  </div>

                  {/* Booking details */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.35 }}
                    className="w-full rounded-xl overflow-hidden text-left"
                    style={{
                      background: "oklch(0.97 0.012 145)",
                      border: "1px solid oklch(0.88 0.06 145)",
                    }}
                  >
                    <div
                      className="px-4 py-2 text-xs font-bold uppercase tracking-widest"
                      style={{
                        background: "oklch(0.92 0.06 145)",
                        color: "oklch(0.40 0.14 145)",
                      }}
                    >
                      Your Booking Details
                    </div>
                    <div className="px-4 py-4 space-y-2.5">
                      {[
                        { label: "Full Name", value: name },
                        { label: "Phone", value: phone },
                        { label: "Preferred Date", value: date },
                        {
                          label: "Preferred Time",
                          value: timeSlot || "Flexible",
                        },
                        { label: "Platform", value: platform },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="flex items-start justify-between gap-4 text-sm"
                        >
                          <span
                            className="font-semibold flex-shrink-0"
                            style={{ color: "oklch(0.40 0.10 145)" }}
                          >
                            {label}
                          </span>
                          <span
                            className="text-right leading-snug"
                            style={{ color: "oklch(0.28 0.06 145)" }}
                          >
                            {value || "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Payment instructions */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.35 }}
                    className="w-full rounded-xl overflow-hidden text-left"
                    style={{
                      background: "oklch(0.97 0.012 50)",
                      border: "1.5px solid oklch(0.82 0.08 50)",
                    }}
                  >
                    <div
                      className="px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.88 0.10 50), oklch(0.92 0.08 50))",
                        color: "oklch(0.38 0.12 50)",
                      }}
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      Payment Instructions
                    </div>
                    <div className="px-4 py-4 space-y-2.5">
                      <div className="flex items-center justify-between text-sm">
                        <span
                          className="font-semibold"
                          style={{ color: "oklch(0.40 0.08 50)" }}
                        >
                          Payment Time
                        </span>
                        <span
                          className="font-bold"
                          style={{ color: "oklch(0.35 0.12 50)" }}
                        >
                          At the time of appointment
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span
                          className="font-semibold"
                          style={{ color: "oklch(0.40 0.08 50)" }}
                        >
                          Amount
                        </span>
                        <span
                          className="font-bold text-base"
                          style={{ color: "oklch(0.35 0.12 50)" }}
                        >
                          ₹700
                        </span>
                      </div>
                      <div
                        className="text-sm pt-1.5 border-t"
                        style={{ borderColor: "oklch(0.88 0.06 50)" }}
                      >
                        <p
                          className="font-semibold mb-0.5"
                          style={{ color: "oklch(0.40 0.08 50)" }}
                        >
                          UPI ID
                        </p>
                        <a
                          href="upi://pay?pa=shaikh.arbaz581@okhdfcbank&pn=Dr%20Arbaz%20Shaikh&am=700&cu=INR"
                          className="font-bold text-base tracking-wide underline underline-offset-2 hover:opacity-80 active:opacity-60 transition-opacity"
                          style={{ color: "oklch(0.32 0.14 50)" }}
                        >
                          shaikh.arbaz581@okhdfcbank
                        </a>
                      </div>
                      {/* QR Code in success state */}
                      <div className="flex flex-col items-center gap-2 pt-2">
                        <p
                          className="text-xs font-semibold"
                          style={{ color: "oklch(0.45 0.08 50)" }}
                        >
                          Or scan to pay
                        </p>
                        <img
                          src={upiQrCode}
                          alt="UPI QR Code"
                          className="w-44 h-44 rounded-xl object-cover"
                          style={{ border: "2px solid oklch(0.85 0.06 50)" }}
                        />
                      </div>
                      <div
                        className="mt-2 flex items-start gap-2 rounded-lg px-3 py-2.5"
                        style={{
                          background: "oklch(0.94 0.06 50)",
                          border: "1px solid oklch(0.85 0.08 50)",
                        }}
                      >
                        <Info
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: "oklch(0.52 0.12 50)" }}
                        />
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "oklch(0.45 0.08 50)" }}
                        >
                          Make payment only after Dr. Arbaz confirms your
                          appointment timing.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Clinic contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.35 }}
                    className="w-full rounded-xl px-4 py-3 text-center space-y-1.5"
                    style={{
                      background: "oklch(0.97 0.008 20)",
                      border: "1px solid oklch(0.90 0.012 20)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold"
                      style={{ color: "oklch(0.45 0.03 20)" }}
                    >
                      📞 8401282296 &nbsp;|&nbsp; 6351002510
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "oklch(0.55 0.02 20)" }}
                    >
                      Mez floor, Swastik Chambers, Athugar Street, Nanpura
                      Timalyawad, Surat
                    </p>
                  </motion.div>

                  <Button
                    type="button"
                    data-ocid="video_consult.reset_button"
                    variant="outline"
                    onClick={handleReset}
                    className="font-semibold"
                    style={{
                      borderColor: "oklch(0.72 0.15 15)",
                      color: "oklch(0.55 0.18 15)",
                    }}
                  >
                    Book Another Consultation
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
