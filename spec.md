# Ortho-Spine Pain Clinic

## Current State
The site is a single-page React frontend with the following sections:
- Navbar, HeroSection, AboutSection, ServicesSection, WhyChooseUs, TestimonialsSection, BusinessHoursSection, ContactSection, Footer
- FloatingShareButton (bottom-right, with pulse animation)
- Color theme: soft shades of red/rose and white using OKLCH
- Stats displayed as static text (no animation)
- Service cards show image + description but no click-through detail
- No appointment booking form, no FAQ section, no WhatsApp chat button, no page loader, no back-to-top button

## Requested Changes (Diff)

### Add
1. **WhatsApp Floating Chat Button** -- A green floating button (bottom-left) that opens `https://wa.me/918401282296` in a new tab. Has a pulse animation ring. Positioned bottom-left to avoid conflict with the existing share button (bottom-right). Label: "Chat on WhatsApp".
2. **Appointment Booking Section** (`AppointmentSection.tsx`) -- New section with id="appointment" placed between TestimonialsSection and BusinessHoursSection. Form fields: Full Name (text), Phone Number (tel), Preferred Date (date), Treatment Needed (select from services list), Message/Symptoms (textarea). On submit: show inline success confirmation message AND open WhatsApp with pre-filled message containing all form details to `wa.me/918401282296`. Add Navbar link "Appointment".
3. **FAQ Section** (`FAQSection.tsx`) -- New section with id="faq" placed between BusinessHoursSection and ContactSection. Accordion-style with 10 clinically accurate Q&A pairs covering: how many sessions needed, whether referral is required, what to wear/bring, difference between physio and chiro, when to seek physio, treatment for disc bulge, is physio painful, home exercises, insurance coverage, dry needling safety. Add Navbar link "FAQ".
4. **Page Loader** (`PageLoader.tsx`) -- Full-screen overlay shown while page first loads. Shows clinic logo centered, brief fade-in animation, then fades out and unmounts after 1.8s. Rendered in App.tsx above all sections.
5. **Animated Stats Counter** -- Stats in HeroSection (6+, 5000+, 10+) and AboutSection (5000+, 10+, 100%) should count up from 0 to their target value when scrolled into view using an Intersection Observer. Use a custom `useCountUp` hook. Suffix ("+", "%") preserved. Duration ~1.5s with easeOut.
6. **Service Detail Modal** -- Clicking any ServiceCard opens a Dialog/Modal with: service image (large), service name, full description, key benefits (3 bullet points per service), and a "Book Appointment" CTA that scrolls to #appointment section. Add detailed descriptions and bullet points for all 18 services in a local data map.
7. **Back to Top Button** -- Fixed button (bottom-center or above the floating share button) that appears only after scrolling 400px down. Smooth scroll to top on click. Animated fade in/out.

### Modify
- `ServicesSection.tsx`: Make each ServiceCard clickable to open the Service Detail Modal. Add `cursor-pointer` styling and hover effect. Change "Learn more →" from opacity-hidden-on-hover to always visible and styled as a button-like element.
- `App.tsx`: Import and add `AppointmentSection`, `FAQSection`, `PageLoader`, `BackToTopButton`, `WhatsAppChatButton` components. Correct section order: Hero → About → Services → WhyChooseUs → Testimonials → Appointment → BusinessHours → FAQ → Contact → Footer.
- `Navbar.tsx`: Add "Appointment" and "FAQ" navigation links.
- `HeroSection.tsx`: "Book Appointment" CTA button should scroll to #appointment.
- `AboutSection.tsx`: Animate stats counter using `useCountUp` hook.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/hooks/useCountUp.ts` -- Intersection Observer + requestAnimationFrame counter hook
2. Create `src/components/PageLoader.tsx` -- full-screen logo loader with fade-out
3. Create `src/components/WhatsAppChatButton.tsx` -- floating green WhatsApp button (bottom-left)
4. Create `src/components/BackToTopButton.tsx` -- appears after scroll, smooth-scrolls to top
5. Create `src/data/serviceDetails.ts` -- full descriptions + 3 bullet benefits for all 18 services + modal open state
6. Modify `ServicesSection.tsx` -- integrate ServiceDetailModal using Dialog, use serviceDetails data
7. Create `src/components/AppointmentSection.tsx` -- booking form with WhatsApp send
8. Create `src/components/FAQSection.tsx` -- accordion FAQ with 10 accurate physiotherapy Q&As
9. Modify `HeroSection.tsx` and `AboutSection.tsx` -- wire useCountUp to stat numbers
10. Modify `Navbar.tsx` -- add Appointment and FAQ links
11. Modify `App.tsx` -- import and compose all new components in correct order
