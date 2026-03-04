import { Star } from "lucide-react";
import { motion } from "motion/react";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/2dbsJBFvPj29VffY7";

const reviews = [
  {
    name: "Priya Patel",
    rating: 5,
    date: "2 weeks ago",
    review:
      "Dr. Arbaz Shaikh is exceptionally skilled and patient. My chronic back pain of 3 years reduced significantly in just 8 sessions. The clinic is well-equipped and hygienically maintained. Highly recommended!",
    color: "#4285F4",
  },
  {
    name: "Rahul Desai",
    rating: 5,
    date: "1 month ago",
    review:
      "Excellent physiotherapy for my sports knee injury. The treatment plan was well-structured and I was back on the field in 6 weeks. The staff is very professional and caring throughout the recovery process.",
    color: "#EA4335",
  },
  {
    name: "Sunita Shah",
    rating: 5,
    date: "3 weeks ago",
    review:
      "After my shoulder surgery, Dr. Shaikh's post-surgical rehabilitation was outstanding. His expertise in manual therapy made a huge difference in my recovery. Very gentle yet effective treatment approach.",
    color: "#FBBC05",
  },
  {
    name: "Mohammed Shaikh",
    rating: 5,
    date: "1 month ago",
    review:
      "Best physiotherapy clinic in Surat. Dr. Arbaz treated my sciatica with dry needling and traction — the relief was almost immediate. The home visit service is a great addition for elderly patients.",
    color: "#34A853",
  },
];

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

function GoogleGLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`w-3.5 h-3.5 ${n <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[0];
  index: number;
}) {
  const initial = review.name.charAt(0).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 16px 40px oklch(0.62 0.18 15 / 0.13)",
      }}
      style={{ transition: "box-shadow 0.2s ease" }}
      className="bg-white rounded-2xl p-6 flex flex-col gap-4"
      data-ocid={`google_reviews.item.${index + 1}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
          style={{ backgroundColor: review.color }}
        >
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground leading-tight truncate">
            {review.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{review.date}</p>
        </div>
        <GoogleGLogo size={18} />
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Review text */}
      <p className="text-sm leading-relaxed text-foreground/75 flex-1">
        {review.review}
      </p>
    </motion.div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section
      id="google-reviews"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.99 0.003 20)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none -translate-x-1/3 -translate-y-1/3"
        style={{ background: "oklch(0.62 0.15 15)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none translate-x-1/3 translate-y-1/3"
        style={{ background: "oklch(0.72 0.15 15)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="section-eyebrow-label flex items-center gap-1.5">
              <GoogleGLogo size={14} />
              Google Reviews
            </span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
            What Patients Say{" "}
            <span style={{ color: "oklch(0.55 0.18 15)" }}>on Google</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            Genuine reviews from patients who experienced the Ortho-Spine
            difference.
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-sm mx-auto mb-14 bg-white rounded-2xl p-8 text-center shadow-lg"
          style={{
            border: "1.5px solid oklch(0.90 0.014 15)",
            boxShadow:
              "0 8px 40px -8px oklch(0.62 0.18 15 / 0.12), 0 2px 12px oklch(0 0 0 / 0.04)",
          }}
        >
          {/* Google logo */}
          <div className="flex justify-center mb-3">
            <GoogleGLogo size={36} />
          </div>

          {/* Big rating number */}
          <div
            className="font-display text-6xl font-extrabold leading-none mb-2"
            style={{ color: "oklch(0.25 0.04 18)", letterSpacing: "-0.04em" }}
          >
            4.9
          </div>

          {/* Stars */}
          <div className="flex gap-1 justify-center mb-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Based on Google Reviews
          </p>

          {/* G logo row */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {GOOGLE_COLORS.map((color) => (
              <span
                key={color}
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2">
            <motion.a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="google_reviews.leave_review_button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-2.5 px-5 rounded-xl text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                boxShadow: "0 4px 14px oklch(0.62 0.18 15 / 0.28)",
              }}
            >
              ✍️ Leave a Review
            </motion.a>
            <motion.a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="google_reviews.read_reviews_button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-2.5 px-5 rounded-xl text-sm font-semibold text-center transition-all duration-200"
              style={{
                border: "1.5px solid oklch(0.88 0.025 15)",
                color: "oklch(0.55 0.18 15)",
                background: "oklch(0.99 0.004 15)",
              }}
            >
              Read All Reviews →
            </motion.a>
          </div>
        </motion.div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-3">
            Satisfied with our service? Share your experience.
          </p>
          <motion.a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-200 hover:gap-3 group"
            style={{ color: "oklch(0.55 0.18 15)" }}
          >
            <span>Rate us on Google</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
