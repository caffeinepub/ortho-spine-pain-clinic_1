import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    question: "How many physiotherapy sessions will I need?",
    answer:
      "The number of sessions depends on the nature, severity, and duration of your condition. Acute injuries may resolve in 4–8 sessions, while chronic or post-surgical conditions may require 12–20+ sessions. Dr. Arbaz Shaikh will assess your condition and provide a personalized treatment plan with realistic timelines at your first visit.",
  },
  {
    question: "Do I need a doctor's referral to visit a physiotherapist?",
    answer:
      "No, you do not need a referral. Physiotherapists are primary healthcare practitioners — you can book directly. However, if you have a complex medical history, surgical implants, or fractures, bringing a doctor's report or imaging (X-ray/MRI) helps us design a safer and more effective treatment plan.",
  },
  {
    question: "What should I wear and bring to my first appointment?",
    answer:
      "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated (e.g., shorts for knee/hip, sleeveless top for shoulder). Bring any relevant medical reports, X-rays, MRI scans, or previous physiotherapy records. Arrive 10 minutes early to complete your intake form.",
  },
  {
    question: "Is physiotherapy treatment painful?",
    answer:
      "Physiotherapy should not cause sharp or intense pain. Some techniques like deep tissue massage, joint mobilization, or dry needling may cause mild soreness during or after treatment — similar to post-exercise soreness — which typically resolves within 24–48 hours. Always communicate your comfort level to the therapist during treatment.",
  },
  {
    question:
      "What is the difference between physiotherapy and chiropractic treatment?",
    answer:
      "Physiotherapy focuses on a broad rehabilitation approach — exercises, manual therapy, electrotherapy, and functional recovery. Chiropractic care primarily addresses spinal alignment through spinal manipulation. At Ortho-Spine Pain Clinic, we offer both disciplines, and Dr. Shaikh may combine techniques based on your specific diagnosis for optimal results.",
  },
  {
    question: "Can physiotherapy help with a disc bulge or herniated disc?",
    answer:
      "Yes. Conservative physiotherapy is often the first-line treatment for disc bulges. Techniques include traction, McKenzie exercises, core stabilization, neural mobilization, and posture correction. Surgery is rarely required. Most patients see significant improvement within 6–12 weeks of structured physiotherapy.",
  },
  {
    question: "How soon should I start physiotherapy after surgery?",
    answer:
      "Post-surgical physiotherapy timing depends on your surgeon's protocol and the type of surgery. In most cases — knee replacement, shoulder repair, spinal surgery — physiotherapy begins within 24–72 hours post-operation for gentle mobility work, and progresses over weeks to restore strength and function. Early intervention reduces stiffness, scar tissue, and improves long-term outcomes.",
  },
  {
    question: "Can I do exercises at home between sessions?",
    answer:
      "Yes, home exercise programs are a critical part of recovery. Dr. Shaikh will prescribe specific exercises tailored to your condition, with clear instructions on sets, reps, and frequency. Consistency with home exercises significantly accelerates recovery and reduces total sessions needed.",
  },
  {
    question: "Is dry needling safe? What conditions does it treat?",
    answer:
      "Dry needling is a safe, evidence-based technique when performed by a trained physiotherapist. It involves inserting fine, sterile needles into myofascial trigger points to release muscle tension, reduce pain, and restore function. It is effective for neck pain, back pain, tennis elbow, plantar fasciitis, fibromyalgia, and chronic muscle tightness. Side effects are minimal — mild soreness or bruising at the needle site.",
  },
  {
    question: "Does Ortho-Spine Pain Clinic offer home visit physiotherapy?",
    answer:
      "Yes. We offer home visit physiotherapy for patients who are unable to travel due to severe pain, post-surgical immobility, neurological conditions, or elderly care needs. Home visits are available within Surat. Please call 8401282296 or WhatsApp us to check availability and schedule a visit.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="absolute top-0 left-0 w-80 h-80 opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.15 15), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.15 15), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">FAQs</span>
            <div className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading font-display text-4xl sm:text-5xl font-extrabold text-foreground">
            Frequently Asked{" "}
            <span style={{ color: "oklch(0.55 0.18 15)" }}>Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Evidence-based answers to common questions about physiotherapy,
            treatment, and what to expect at your visit.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index + 1}`}
                data-ocid={`faq.item.${index + 1}`}
                className="rounded-xl overflow-hidden border px-0"
                style={{
                  borderColor: "oklch(0.90 0.016 15)",
                  boxShadow: "0 2px 8px oklch(0.62 0.18 15 / 0.04)",
                }}
              >
                <AccordionTrigger
                  className="px-6 py-5 text-sm sm:text-base font-semibold text-left hover:no-underline transition-colors group"
                  style={{ color: "oklch(0.28 0.04 18)" }}
                >
                  <span className="flex items-start gap-3 text-left">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.60 0.18 12), oklch(0.72 0.16 18))",
                      }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <div
                    className="ml-9 text-sm leading-relaxed"
                    style={{ color: "oklch(0.45 0.025 20)" }}
                  >
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-3">
            Still have questions? We're happy to help.
          </p>
          <a
            href="tel:8401282296"
            className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-200 hover:gap-3 group"
            style={{ color: "oklch(0.55 0.18 15)" }}
          >
            <span>Call us directly</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
