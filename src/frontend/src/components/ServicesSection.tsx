import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { serviceDetails } from "@/data/serviceDetails";
import { useServices } from "@/hooks/useQueries";
import {
  Activity,
  Baby,
  Bike,
  Bone,
  Brain,
  CheckCircle,
  CircleDot,
  Crosshair,
  Hand,
  HeartPulse,
  Home,
  Layers,
  PersonStanding,
  RefreshCw,
  Scissors,
  Syringe,
  User,
  Waves,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Service } from "../backend.d";

// Local image lookup by service name
const SERVICE_IMAGE_MAP: Record<string, string> = {
  Chiropractic: "/assets/generated/service-chiropractic.dim_600x400.jpg",
  Osteopathy: "/assets/generated/service-osteopathy.dim_600x400.jpg",
  "Back Pain Treatment": "/assets/generated/service-back.dim_600x400.jpg",
  "Knee Pain Management": "/assets/generated/service-knee.dim_600x400.jpg",
  "Shoulder Disorders": "/assets/generated/service-shoulder.dim_600x400.jpg",
  "Neck Pain & Cervical":
    "/assets/generated/service-neck-cervical.dim_600x400.jpg",
  "Sports Injury Rehab":
    "/assets/generated/service-sports-rehab.dim_600x400.jpg",
  "Post-Surgical Rehab":
    "/assets/generated/service-post-surgical.dim_600x400.jpg",
  "Sciatica & Disc Problems":
    "/assets/generated/service-sciatica.dim_600x400.jpg",
  Electrotherapy: "/assets/generated/service-electrotherapy.dim_600x400.jpg",
  "Dry Needling": "/assets/generated/service-dry-needling.dim_600x400.jpg",
  "Neurological Physiotherapy":
    "/assets/generated/service-neuro-physio.dim_600x400.jpg",
  "Postural Correction":
    "/assets/generated/service-postural-correction.dim_600x400.jpg",
  "Pediatric Physiotherapy":
    "/assets/generated/service-pediatric.dim_600x400.jpg",
  "Geriatric Physiotherapy":
    "/assets/generated/service-geriatric.dim_600x400.jpg",
  "Manual Therapy": "/assets/generated/service-manual-therapy.dim_600x400.jpg",
  "Cupping Therapy": "/assets/generated/service-cupping.dim_600x400.jpg",
  "Home Visit Physiotherapy":
    "/assets/generated/service-home-visit.dim_600x400.jpg",
};

const iconMap: Record<string, React.ElementType> = {
  spine: Bone,
  neck: PersonStanding,
  sports: Bike,
  surgery: Scissors,
  knee: Activity,
  shoulder: Layers,
  nerve: Zap,
  electric: HeartPulse,
  needle: Syringe,
  brain: Brain,
  posture: PersonStanding,
  child: Baby,
  elderly: User,
  hands: Hand,
  cup: CircleDot,
  home: Home,
  waves: Waves,
  osteopathy: RefreshCw,
  chiropractic: Crosshair,
  default: Activity,
};

function ServiceCard({
  service,
  index,
  onSelect,
}: {
  service: Service;
  index: number;
  onSelect: (service: Service) => void;
}) {
  const Icon = iconMap[service.iconName] ?? iconMap.default;
  const imageUrl = SERVICE_IMAGE_MAP[service.name];
  const hasImage = !!imageUrl;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: "easeOut" }}
      whileHover={{
        y: -4,
        boxShadow: "0 16px 40px oklch(0.62 0.18 15 / 0.15)",
      }}
      className="card-hover-glow group cursor-pointer w-full text-left"
      onClick={() => onSelect(service)}
      aria-label={`Learn more about ${service.name}`}
    >
      <div
        className="h-full bg-white rounded-2xl border overflow-hidden flex flex-col"
        style={{
          borderColor: "oklch(0.90 0.016 15)",
          boxShadow: "0 2px 8px oklch(0.62 0.18 15 / 0.06)",
        }}
      >
        {/* Image or Color bar + icon */}
        {hasImage ? (
          <div className="relative overflow-hidden h-36">
            <img
              src={imageUrl}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.62 0.18 15 / 0.10) 0%, oklch(0.25 0.08 15 / 0.35) 100%)",
              }}
            />
            {/* Icon badge on image */}
            <div
              className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                boxShadow: "0 4px 14px oklch(0.62 0.18 15 / 0.35)",
              }}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>
        ) : (
          <div
            className="px-6 pt-6 pb-4 relative"
            style={{ background: "oklch(0.97 0.012 15)" }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, oklch(0.72 0.15 15 / 0.12) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div
              className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                boxShadow: "0 4px 14px oklch(0.62 0.18 15 / 0.25)",
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        {/* Text content */}
        <div className="px-6 py-4 flex flex-col flex-1">
          <h3
            className="font-display font-bold text-sm text-foreground mb-1.5 leading-snug tracking-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            {service.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {service.description}
          </p>

          {/* Bottom hover accent */}
          <div className="mt-3 pt-3 border-t border-border/50">
            <span
              className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
              style={{ color: "oklch(0.55 0.18 15)" }}
            >
              Learn more
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                →
              </span>
            </span>
            <div
              className="h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"
              style={{ background: "oklch(0.62 0.18 15)" }}
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export default function ServicesSection() {
  const { data: services = [] } = useServices();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const detail = selectedService ? serviceDetails[selectedService.name] : null;
  const imageUrl = selectedService
    ? SERVICE_IMAGE_MAP[selectedService.name]
    : null;

  const handleBookAppointment = () => {
    setSelectedService(null);
    setTimeout(() => {
      const el = document.querySelector("#appointment");
      if (el) {
        const navHeight = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.975 0.010 15)" }}
    >
      {/* Decorative background shape */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "oklch(0.72 0.15 15)" }}
      />
      <div
        className="absolute -top-16 right-0 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "oklch(0.80 0.12 15)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Our Treatments</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
            Comprehensive{" "}
            <span
              className="relative inline-block"
              style={{ color: "oklch(0.55 0.18 15)" }}
            >
              Physiotherapy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 3 Q50 0 100 3 Q150 6 200 3"
                  stroke="oklch(0.72 0.15 15)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Services
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Evidence-based physiotherapy treatments tailored to your specific
            needs for optimal recovery and long-term wellness.
            <span
              className="block mt-1 text-sm"
              style={{ color: "oklch(0.62 0.18 15)" }}
            >
              Tap any treatment to learn more
            </span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4 text-sm">
            Not sure which treatment is right for you?
          </p>
          <a
            href="tel:8401282296"
            className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-200 hover:gap-3 group"
            style={{ color: "oklch(0.55 0.18 15)" }}
          >
            <span>Call us for a free consultation</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog
        open={!!selectedService}
        onOpenChange={(open) => !open && setSelectedService(null)}
      >
        <DialogContent
          data-ocid="service.modal"
          className="max-w-lg w-full p-0 overflow-hidden rounded-2xl max-h-[90vh] overflow-y-auto"
          style={{
            border: "1.5px solid oklch(0.90 0.016 15)",
            boxShadow:
              "0 24px 64px -12px oklch(0.62 0.18 15 / 0.22), 0 8px 32px -4px oklch(0 0 0 / 0.08)",
          }}
        >
          {selectedService && (
            <>
              {/* Service Image */}
              {imageUrl && (
                <div className="relative overflow-hidden h-52 w-full flex-shrink-0">
                  <img
                    src={imageUrl}
                    alt={selectedService.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, oklch(0.15 0.05 15 / 0.60) 100%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/70">
                      Treatment
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <DialogHeader className="mb-4">
                  <DialogTitle
                    className="font-display text-2xl font-extrabold leading-tight"
                    style={{ color: "oklch(0.28 0.04 18)" }}
                  >
                    {selectedService.name}
                  </DialogTitle>
                </DialogHeader>

                {/* Full description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.45 0.025 20)" }}
                >
                  {detail?.fullDescription ?? selectedService.description}
                </p>

                {/* Key Benefits */}
                {detail && (
                  <div className="mb-6">
                    <h4
                      className="text-sm font-bold tracking-wide uppercase mb-3"
                      style={{ color: "oklch(0.55 0.18 15)" }}
                    >
                      Key Benefits
                    </h4>
                    <ul className="space-y-2.5">
                      {detail.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: "oklch(0.55 0.18 15)" }}
                          />
                          <span
                            className="text-sm leading-snug"
                            style={{ color: "oklch(0.38 0.03 18)" }}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    data-ocid="service.modal.book_button"
                    onClick={handleBookAppointment}
                    className="flex-1 text-white font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                    }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    data-ocid="service.modal.close_button"
                    variant="outline"
                    onClick={() => setSelectedService(null)}
                    className="font-semibold"
                    style={{
                      borderColor: "oklch(0.88 0.025 15)",
                      color: "oklch(0.45 0.04 18)",
                    }}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
