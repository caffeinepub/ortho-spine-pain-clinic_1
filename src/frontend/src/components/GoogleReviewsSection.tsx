import { Star } from "lucide-react";
import { motion } from "motion/react";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/2dbsJBFvPj29VffY7";

const reviews = [
  {
    name: "Priya Patel",
    rating: 5,
    date: "2 weeks ago",
    review:
      "Dr. Arbaz Shaikh is exceptionally skilled. My chronic back pain of 3 years reduced significantly in just 8 sessions. Highly recommended!",
    color: "#4285F4",
  },
  {
    name: "Rahul Desai",
    rating: 5,
    date: "1 month ago",
    review:
      "Excellent physiotherapy for my sports knee injury. Back on the field in 6 weeks. Very professional and caring throughout recovery.",
    color: "#EA4335",
  },
  {
    name: "Sunita Shah",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Post-surgical rehab was outstanding. Dr. Shaikh's expertise in manual therapy made a huge difference. Very gentle yet effective.",
    color: "#FBBC05",
  },
  {
    name: "Mohammed Shaikh",
    rating: 5,
    date: "1 month ago",
    review:
      "Best physiotherapy clinic in Surat. Treated my sciatica with dry needling — the relief was almost immediate. Great home visit service too.",
    color: "#34A853",
  },
];

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
          className={`w-3 h-3 ${n <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section
      id="google-reviews"
      className="py-10 lg:py-14 relative overflow-hidden"
      style={{ background: "oklch(0.99 0.003 20)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact header row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        >
          {/* Left: title + rating */}
          <div className="flex items-center gap-4">
            <GoogleGLogo size={28} />
            <div>
              <h2
                className="font-display text-xl font-extrabold leading-tight"
                style={{ color: "oklch(0.25 0.04 18)" }}
              >
                Google Reviews
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className="font-bold text-lg leading-none"
                  style={{ color: "oklch(0.45 0.18 15)" }}
                >
                  4.9
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  · Based on Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right: CTA buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="google_reviews.leave_review_button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
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
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{
                border: "1.5px solid oklch(0.88 0.025 15)",
                color: "oklch(0.55 0.18 15)",
                background: "oklch(0.99 0.004 15)",
              }}
            >
              Read All →
            </motion.a>
          </div>
        </motion.div>

        {/* Review Cards — 2-col on sm+, max 2-col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reviews.map((review, index) => {
            const initial = review.name.charAt(0).toUpperCase();
            return (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl p-4 flex flex-col gap-2.5 border"
                style={{ borderColor: "oklch(0.93 0.012 15)" }}
                data-ocid={`google_reviews.item.${index + 1}`}
              >
                {/* Header */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    {initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs text-foreground leading-tight truncate">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                  <GoogleGLogo size={14} />
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Review text */}
                <p className="text-xs leading-relaxed text-foreground/70 flex-1">
                  {review.review}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
