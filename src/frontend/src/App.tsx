import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import AppointmentSection from "./components/AppointmentSection";
import BackToTopButton from "./components/BackToTopButton";
import BusinessHoursSection from "./components/BusinessHoursSection";
import ContactSection from "./components/ContactSection";
import FloatingShareButton from "./components/FloatingShareButton";
import Footer from "./components/Footer";
import GoogleReviewsSection from "./components/GoogleReviewsSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import PrePostResultsSection from "./components/PrePostResultsSection";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ServicesSection from "./components/ServicesSection";
import VideoConsultationSection from "./components/VideoConsultationSection";
import WaveDivider from "./components/WaveDivider";
import WhatsAppChatButton from "./components/WhatsAppChatButton";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Page Loader — shows for ~1.8s on first visit */}
      <PageLoader />

      <Navbar />
      <main>
        <HeroSection />
        {/* Hero → About */}
        <WaveDivider fromColor="oklch(0.12 0.035 15)" toColor="oklch(1 0 0)" />
        <AboutSection />
        {/* About → Services */}
        <WaveDivider fromColor="oklch(1 0 0)" toColor="oklch(0.975 0.010 15)" />
        <ServicesSection />
        {/* Services → Why Choose Us */}
        <WaveDivider fromColor="oklch(0.975 0.010 15)" toColor="oklch(1 0 0)" />
        <WhyChooseUs />
        {/* Why → Results */}
        <WaveDivider fromColor="oklch(1 0 0)" toColor="oklch(0.975 0.010 15)" />
        <PrePostResultsSection />
        {/* Results → Google Reviews */}
        <WaveDivider fromColor="oklch(0.975 0.010 15)" toColor="oklch(1 0 0)" />
        <GoogleReviewsSection />
        {/* Reviews → Appointment */}
        <WaveDivider fromColor="oklch(1 0 0)" toColor="oklch(0.975 0.010 15)" />
        <AppointmentSection />
        {/* Appointment → Video */}
        <WaveDivider fromColor="oklch(0.975 0.010 15)" toColor="oklch(1 0 0)" />
        <VideoConsultationSection />
        {/* Video → Business Hours */}
        <WaveDivider fromColor="oklch(1 0 0)" toColor="oklch(0.975 0.010 15)" />
        <BusinessHoursSection />
        {/* Business Hours → Contact */}
        <WaveDivider fromColor="oklch(0.975 0.010 15)" toColor="oklch(1 0 0)" />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating elements */}
      <FloatingShareButton />
      <WhatsAppChatButton />
      <BackToTopButton />

      <Toaster position="bottom-center" richColors />
    </div>
  );
}
