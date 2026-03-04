import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CheckCircle, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const TIME_SLOTS = [
  {
    group: "Morning",
    slots: [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
    ],
  },
  {
    group: "Afternoon",
    slots: [
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
    ],
  },
  {
    group: "Evening",
    slots: [
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
    ],
  },
];

const SERVICES = [
  "Chiropractic",
  "Osteopathy",
  "Back Pain Treatment",
  "Knee Pain Management",
  "Shoulder Disorders",
  "Neck Pain & Cervical",
  "Sports Injury Rehab",
  "Post-Surgical Rehab",
  "Sciatica & Disc Problems",
  "Electrotherapy",
  "Dry Needling",
  "Neurological Physiotherapy",
  "Postural Correction",
  "Pediatric Physiotherapy",
  "Geriatric Physiotherapy",
  "Manual Therapy",
  "Cupping Therapy",
  "Home Visit Physiotherapy",
];

const today = new Date().toISOString().split("T")[0];

export default function AppointmentSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [treatment, setTreatment] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `New Appointment Request:\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${timeSlot}\nTreatment: ${treatment}\nMessage: ${message}`;
    const waUrl = `https://wa.me/918401282296?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setDate("");
    setTimeSlot("");
    setTreatment("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section
      id="appointment"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "oklch(0.975 0.010 15)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "oklch(0.72 0.15 15)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "oklch(0.80 0.12 15)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
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
            <span className="section-eyebrow-label">Schedule Your Visit</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl font-extrabold text-foreground">
            Book an{" "}
            <span style={{ color: "oklch(0.55 0.18 15)" }}>Appointment</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Fill in your details and we'll confirm your appointment. Your
            request is sent directly via WhatsApp for a quick response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
          style={{
            border: "1.5px solid oklch(0.88 0.025 15)",
            boxShadow:
              "0 8px 40px -8px oklch(0.62 0.18 15 / 0.12), 0 2px 12px oklch(0 0 0 / 0.04)",
          }}
        >
          {/* Icon header strip */}
          <div
            className="flex items-center gap-3 mb-6 pb-5 border-b"
            style={{ borderColor: "oklch(0.93 0.016 15)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
              }}
            >
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <p
                className="font-semibold text-sm"
                style={{ color: "oklch(0.30 0.04 18)" }}
              >
                Request an Appointment
              </p>
              <p className="text-xs text-muted-foreground">
                We'll WhatsApp you to confirm your slot
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="appt-name"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.35 0.04 18)" }}
                  >
                    Full Name{" "}
                    <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                  </Label>
                  <Input
                    id="appt-name"
                    data-ocid="appointment.name_input"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 text-sm focus-visible:ring-1"
                    style={
                      {
                        borderColor: "oklch(0.88 0.025 15)",
                        "--tw-ring-color": "oklch(0.62 0.18 15)",
                      } as React.CSSProperties
                    }
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="appt-phone"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.35 0.04 18)" }}
                  >
                    Phone Number{" "}
                    <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                  </Label>
                  <Input
                    id="appt-phone"
                    data-ocid="appointment.phone_input"
                    type="tel"
                    placeholder="Your phone number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 text-sm focus-visible:ring-1"
                    style={
                      {
                        borderColor: "oklch(0.88 0.025 15)",
                        "--tw-ring-color": "oklch(0.62 0.18 15)",
                      } as React.CSSProperties
                    }
                  />
                </div>

                {/* Date + Time row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="appt-date"
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.35 0.04 18)" }}
                    >
                      Preferred Date{" "}
                      <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                    </Label>
                    <Input
                      id="appt-date"
                      data-ocid="appointment.date_input"
                      type="date"
                      min={today}
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="h-11 text-sm focus-visible:ring-1"
                      style={
                        {
                          borderColor: "oklch(0.88 0.025 15)",
                          "--tw-ring-color": "oklch(0.62 0.18 15)",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  {/* Preferred Time (dropdown) */}
                  <div className="space-y-2">
                    <Label
                      className="text-sm font-semibold flex items-center gap-1.5"
                      style={{ color: "oklch(0.35 0.04 18)" }}
                    >
                      <Clock
                        className="w-3.5 h-3.5"
                        style={{ color: "oklch(0.55 0.18 15)" }}
                      />
                      Preferred Time{" "}
                      <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                    </Label>
                    <Select
                      required
                      value={timeSlot}
                      onValueChange={setTimeSlot}
                    >
                      <SelectTrigger
                        data-ocid="appointment.time_select"
                        className="h-11 text-sm focus:ring-1"
                        style={
                          {
                            borderColor: "oklch(0.88 0.025 15)",
                            "--tw-ring-color": "oklch(0.62 0.18 15)",
                          } as React.CSSProperties
                        }
                      >
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="max-h-64">
                        {TIME_SLOTS.map(({ group, slots }) => (
                          <div key={group}>
                            <div
                              className="px-2 py-1.5 text-xs font-bold uppercase tracking-widest"
                              style={{ color: "oklch(0.55 0.18 15)" }}
                            >
                              {group}
                            </div>
                            {slots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Visual time slot quick-picker (shown after date is selected) */}
                {date && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-xl border"
                    style={{
                      borderColor: "oklch(0.90 0.020 15)",
                      background: "oklch(0.985 0.006 15)",
                    }}
                  >
                    <div
                      className="px-4 py-2.5 border-b flex items-center gap-2"
                      style={{
                        borderColor: "oklch(0.92 0.016 15)",
                        background: "oklch(0.97 0.012 15)",
                      }}
                    >
                      <Clock
                        className="w-3.5 h-3.5"
                        style={{ color: "oklch(0.55 0.18 15)" }}
                      />
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.40 0.04 18)" }}
                      >
                        Quick-pick a time slot
                      </p>
                      {timeSlot && (
                        <span
                          className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: "oklch(0.60 0.18 12)",
                            color: "white",
                          }}
                        >
                          {timeSlot}
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-4">
                      {TIME_SLOTS.map(({ group, slots }) => (
                        <div key={group}>
                          <p
                            className="text-xs font-bold mb-2 uppercase tracking-wider"
                            style={{ color: "oklch(0.62 0.18 15)" }}
                          >
                            {group}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {slots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setTimeSlot(slot)}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 hover:scale-105"
                                style={
                                  timeSlot === slot
                                    ? {
                                        background:
                                          "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                                        color: "white",
                                        borderColor: "transparent",
                                        boxShadow:
                                          "0 2px 8px oklch(0.62 0.18 15 / 0.30)",
                                      }
                                    : {
                                        background: "oklch(0.99 0.004 15)",
                                        color: "oklch(0.40 0.04 18)",
                                        borderColor: "oklch(0.88 0.025 15)",
                                      }
                                }
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Treatment Needed */}
                <div className="space-y-2">
                  <Label
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.35 0.04 18)" }}
                  >
                    Treatment Needed{" "}
                    <span style={{ color: "oklch(0.55 0.18 15)" }}>*</span>
                  </Label>
                  <Select
                    required
                    value={treatment}
                    onValueChange={setTreatment}
                  >
                    <SelectTrigger
                      data-ocid="appointment.treatment_select"
                      className="h-11 text-sm focus:ring-1"
                      style={
                        {
                          borderColor: "oklch(0.88 0.025 15)",
                          "--tw-ring-color": "oklch(0.62 0.18 15)",
                        } as React.CSSProperties
                      }
                    >
                      <SelectValue placeholder="Select a treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((svc) => (
                        <SelectItem key={svc} value={svc}>
                          {svc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message / Symptoms */}
                <div className="space-y-2">
                  <Label
                    htmlFor="appt-message"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.35 0.04 18)" }}
                  >
                    Message / Symptoms{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Textarea
                    id="appt-message"
                    data-ocid="appointment.message_textarea"
                    placeholder="Describe your symptoms or concerns..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-sm resize-none focus-visible:ring-1"
                    style={
                      {
                        borderColor: "oklch(0.88 0.025 15)",
                        "--tw-ring-color": "oklch(0.62 0.18 15)",
                      } as React.CSSProperties
                    }
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  data-ocid="appointment.submit_button"
                  className="w-full h-12 text-white font-semibold text-base"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                    boxShadow: "0 4px 20px oklch(0.62 0.18 15 / 0.30)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                data-ocid="appointment.success_state"
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center py-6 gap-5"
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
                    Appointment Request Received!
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                    Your appointment request has been received. We will contact
                    you within{" "}
                    <strong style={{ color: "oklch(0.45 0.18 15)" }}>
                      12 hours
                    </strong>{" "}
                    to confirm your slot.
                  </p>
                </div>

                {/* Booking details card */}
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
                      { label: "Time Slot", value: timeSlot },
                      { label: "Treatment", value: treatment },
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

                {/* Clinic info row */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.35 }}
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
                  data-ocid="appointment.reset_button"
                  variant="outline"
                  onClick={handleReset}
                  className="font-semibold"
                  style={{
                    borderColor: "oklch(0.72 0.15 15)",
                    color: "oklch(0.55 0.18 15)",
                  }}
                >
                  Book Another Appointment
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
