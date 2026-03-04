# Ortho-Spine Pain Clinic

## Current State
The site has all main sections: Hero, About, Services, WhyChooseUs, Testimonials, PrePostResults, GoogleReviews, AppointmentSection, BusinessHours, FAQ, Contact, Footer, plus floating WhatsApp, Share, and BackToTop buttons. It uses a soft red/white color theme with micro-animations throughout.

## Requested Changes (Diff)

### Add
- **VideoConsultationSection** -- A new standalone section for paid video consultations, placed between GoogleReviewsSection and AppointmentSection in App.tsx
- **Navbar link** -- "Video Consult" nav link pointing to #video-consult, with a Video icon, added between "Reviews" and "Appointment"

### Modify
- **Navbar** -- Add "Video Consult" nav entry (label, href, icon) to `navLinks` array

### Remove
- Nothing removed

## Implementation Plan

1. Create `VideoConsultationSection.tsx` component with:
   - Section id `video-consult`
   - Heading: "Online Video Consultation"
   - Subtext: consult from the comfort of your home
   - Fee: ₹700 per session
   - Platforms available: WhatsApp Video Call, Google Meet, Zoom (patient's choice)
   - Booking form: Name, Phone, Preferred Date, Platform (select: WhatsApp / Google Meet / Zoom), Message/Concern (optional)
   - NOTE: No time slot picker -- Dr. will confirm timing after booking
   - On submit: open WhatsApp to 8401282296 with pre-filled message including all details + consultation type + fee + UPI payment note (shaikh.arbaz581@okhdfcbank)
   - Confirmation screen: shows booking summary with payment instructions (UPI ID: shaikh.arbaz581@okhdfcbank, Amount: ₹700, note "Pay at the time of appointment")
   - Confirmation message: "We will confirm your video call timing within 12 hours"
   - Visual: soft red/white card design consistent with existing theme, video camera icon, platform badges

2. Add `VideoConsultation` to `navLinks` in `Navbar.tsx` with `Video` icon from lucide-react

3. Import and render `VideoConsultationSection` in `App.tsx` between `<GoogleReviewsSection />` and `<AppointmentSection />`
