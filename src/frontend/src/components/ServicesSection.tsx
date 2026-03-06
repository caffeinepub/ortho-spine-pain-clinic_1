import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Search,
  Star,
  Syringe,
  User,
  Waves,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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
  "Migraine & Headache Relief":
    "/assets/generated/service-migraine-headache.dim_600x400.jpg",
  "Flexion Distraction Therapy":
    "/assets/generated/service-flexion-distraction.dim_600x400.jpg",
  "Spine Adjustor Tool":
    "/assets/generated/service-spine-adjustor.dim_600x400.jpg",
  "Air Compression Therapy":
    "/assets/generated/service-air-compression.dim_600x400.jpg",
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
  headache: Brain,
  flexion: Bone,
  spineadjust: Crosshair,
  aircompression: Wind,
  default: Activity,
};

// Category tab definitions
const CATEGORIES = [
  {
    id: "spinal",
    label: "Spinal & Pain",
    services: [
      "Back Pain Treatment",
      "Neck Pain & Cervical",
      "Sciatica & Disc Problems",
      "Knee Pain Management",
      "Shoulder Disorders",
      "Migraine & Headache Relief",
      "Flexion Distraction Therapy",
      "Spine Adjustor Tool",
    ],
  },
  {
    id: "rehab",
    label: "Rehab & Recovery",
    services: [
      "Sports Injury Rehab",
      "Post-Surgical Rehab",
      "Neurological Physiotherapy",
      "Postural Correction",
      "Pediatric Physiotherapy",
      "Geriatric Physiotherapy",
    ],
  },
  {
    id: "therapies",
    label: "Specialized Therapies",
    services: [
      "Electrotherapy",
      "Dry Needling",
      "Manual Therapy",
      "Cupping Therapy",
      "Air Compression Therapy",
    ],
  },
  {
    id: "wellness",
    label: "Home & Wellness",
    services: ["Home Visit Physiotherapy"],
  },
];

const FEATURED_SERVICES = ["Chiropractic", "Osteopathy"];
const SHOW_MORE_THRESHOLD = 6;

// Compact service card for category tabs
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.35,
        delay: (index % 6) * 0.05,
        ease: "easeOut",
      }}
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
        {hasImage ? (
          <div className="relative overflow-hidden h-28">
            <img
              src={imageUrl}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.62 0.18 15 / 0.08) 0%, oklch(0.25 0.08 15 / 0.30) 100%)",
              }}
            />
            <div
              className="absolute bottom-2 left-3 w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                boxShadow: "0 4px 12px oklch(0.62 0.18 15 / 0.35)",
              }}
            >
              <Icon className="w-4 h-4 text-white" />
            </div>
          </div>
        ) : (
          <div
            className="px-4 pt-4 pb-3 relative"
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
              className="relative z-10 w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                boxShadow: "0 4px 12px oklch(0.62 0.18 15 / 0.25)",
              }}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>
        )}

        <div className="px-4 py-3 flex flex-col flex-1">
          <h3
            className="font-display font-bold text-sm text-foreground mb-1 leading-snug tracking-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            {service.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
            {service.description}
          </p>

          <div className="mt-2.5 pt-2.5 border-t border-border/50">
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
              className="h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-0.5"
              style={{ background: "oklch(0.62 0.18 15)" }}
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

// Featured hero card (larger, always visible)
function FeaturedCard({
  service,
  index,
  onSelect,
  ocid,
}: {
  service: Service;
  index: number;
  onSelect: (service: Service) => void;
  ocid: string;
}) {
  const Icon = iconMap[service.iconName] ?? iconMap.default;
  const imageUrl = SERVICE_IMAGE_MAP[service.name];

  return (
    <motion.button
      type="button"
      data-ocid={ocid}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{
        y: -6,
        boxShadow: "0 24px 56px oklch(0.55 0.18 15 / 0.22)",
      }}
      className="card-hover-glow group cursor-pointer w-full text-left"
      onClick={() => onSelect(service)}
      aria-label={`Learn more about ${service.name}`}
    >
      <div
        className="h-full bg-white rounded-2xl border overflow-hidden flex flex-col"
        style={{
          borderColor: "oklch(0.85 0.025 15)",
          boxShadow: "0 4px 16px oklch(0.62 0.18 15 / 0.10)",
        }}
      >
        {/* Featured badge */}
        <div className="relative overflow-hidden" style={{ height: "11rem" }}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0.025 15), oklch(0.88 0.035 15))",
              }}
            />
          )}
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.62 0.18 15 / 0.05) 0%, oklch(0.20 0.06 15 / 0.45) 100%)",
            }}
          />
          {/* Featured pill badge */}
          <div
            className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
              boxShadow: "0 2px 8px oklch(0.55 0.18 15 / 0.40)",
            }}
          >
            <Star className="w-3 h-3 text-white fill-white" />
            <span className="text-white text-[10px] font-bold tracking-wider uppercase">
              Featured
            </span>
          </div>
          {/* Icon badge */}
          <div
            className="absolute bottom-3 left-4 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
              boxShadow: "0 4px 16px oklch(0.55 0.18 15 / 0.40)",
            }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="px-5 py-4 flex flex-col flex-1">
          <h3
            className="font-display font-extrabold text-base text-foreground mb-2 leading-snug"
            style={{ letterSpacing: "-0.02em" }}
          >
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {service.description}
          </p>

          <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
            <span
              className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300"
              style={{ color: "oklch(0.55 0.18 15)" }}
            >
              Explore treatment
              <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

// Category tab panel with show more/less
function CategoryPanel({
  categoryServices,
  allServices,
  onSelect,
}: {
  categoryServices: string[];
  allServices: Service[];
  onSelect: (service: Service) => void;
}) {
  const [showAll, setShowAll] = useState(false);

  const matchedServices = categoryServices
    .map((name) => allServices.find((s) => s.name === name))
    .filter((s): s is Service => !!s);

  const visibleServices = showAll
    ? matchedServices
    : matchedServices.slice(0, SHOW_MORE_THRESHOLD);
  const hasMore = matchedServices.length > SHOW_MORE_THRESHOLD;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {visibleServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              onSelect={onSelect}
            />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 flex justify-center"
        >
          <Button
            data-ocid="services.show_more_button"
            variant="outline"
            onClick={() => setShowAll((prev) => !prev)}
            className="font-semibold px-6 py-2 rounded-full transition-all duration-300"
            style={{
              borderColor: "oklch(0.75 0.12 15)",
              color: "oklch(0.55 0.18 15)",
            }}
          >
            {showAll ? (
              <span className="flex items-center gap-2">Show Less ↑</span>
            ) : (
              <span className="flex items-center gap-2">
                Show {matchedServices.length - SHOW_MORE_THRESHOLD} More ↓
              </span>
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default function ServicesSection() {
  const { data: services = [] } = useServices();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Separate featured and category services
  const featuredServices = FEATURED_SERVICES.map((name) =>
    services.find((s) => s.name === name),
  ).filter((s): s is Service => !!s);

  // Search filtered services
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const searchResults = trimmedQuery
    ? services.filter(
        (s) =>
          s.name.toLowerCase().includes(trimmedQuery) ||
          s.description.toLowerCase().includes(trimmedQuery),
      )
    : [];

  return (
    <section
      id="services"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.975 0.010 15)" }}
    >
      {/* Decorative background shapes */}
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
          className="text-center mb-14"
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

        {/* ── Search Bar ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-lg mx-auto"
        >
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: "oklch(0.62 0.18 15)" }}
            />
            <Input
              data-ocid="services.search_input"
              type="text"
              placeholder="Search treatments (e.g. back, knee, spine...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-3 rounded-full border-2 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              style={{
                borderColor: searchQuery
                  ? "oklch(0.62 0.18 15)"
                  : "oklch(0.88 0.020 15)",
                background: "oklch(1 0 0)",
                boxShadow: searchQuery
                  ? "0 0 0 3px oklch(0.62 0.18 15 / 0.12)"
                  : "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                data-ocid="services.search_clear_button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded-full transition-colors"
                style={{ color: "oklch(0.62 0.18 15)" }}
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Results */}
          {trimmedQuery && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-2 px-2"
            >
              {searchResults.length > 0 ? (
                <>
                  <p
                    className="text-xs mb-4"
                    style={{ color: "oklch(0.55 0.025 20)" }}
                  >
                    {searchResults.length} treatment
                    {searchResults.length !== 1 ? "s" : ""} found for "
                    {searchQuery}"
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence mode="popLayout">
                      {searchResults.map((service, index) => (
                        <ServiceCard
                          key={service.name}
                          service={service}
                          index={index}
                          onSelect={setSelectedService}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                <p
                  className="text-sm text-center py-4"
                  style={{ color: "oklch(0.55 0.025 20)" }}
                >
                  No treatments found for "{searchQuery}". Try "back", "knee",
                  or "spine".
                </p>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* ── Featured Hero Cards + Category Tabs (hidden during search) ── */}
        {!trimmedQuery && featuredServices.length > 0 && (
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "oklch(0.62 0.18 15)" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "oklch(0.62 0.18 15)" }}
              >
                Signature Treatments
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "oklch(0.90 0.016 15)" }}
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {featuredServices.map((service, index) => (
                <FeaturedCard
                  key={service.name}
                  service={service}
                  index={index}
                  onSelect={setSelectedService}
                  ocid={`services.featured.card.${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Category Tabs ───────────────────────────── */}
        {!trimmedQuery && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "oklch(0.62 0.18 15)" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "oklch(0.62 0.18 15)" }}
              >
                Browse by Category
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "oklch(0.90 0.016 15)" }}
              />
            </div>

            <Tabs defaultValue={CATEGORIES[0].id} className="w-full">
              {/* Tab Bar */}
              <TabsList
                className="flex flex-wrap gap-2 h-auto bg-transparent p-0 mb-7"
                aria-label="Service categories"
              >
                {CATEGORIES.map((cat, idx) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    data-ocid={`services.tab.${idx + 1}`}
                    className="services-tab-trigger"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tab Panels */}
              {CATEGORIES.map((cat) => (
                <TabsContent key={cat.id} value={cat.id} className="mt-0">
                  <CategoryPanel
                    categoryServices={cat.services}
                    allServices={services}
                    onSelect={setSelectedService}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        )}

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

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.45 0.025 20)" }}
                >
                  {detail?.fullDescription ?? selectedService.description}
                </p>

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

                <div className="flex gap-3">
                  <Button
                    data-ocid="service.modal.primary_button"
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
