import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import AppointmentSection from "./components/AppointmentSection";
import BackToTopButton from "./components/BackToTopButton";
import BusinessHoursSection from "./components/BusinessHoursSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import FloatingShareButton from "./components/FloatingShareButton";
import Footer from "./components/Footer";
import GoogleReviewsSection from "./components/GoogleReviewsSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import PrePostResultsSection from "./components/PrePostResultsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import VideoConsultationSection from "./components/VideoConsultationSection";
import WhatsAppChatButton from "./components/WhatsAppChatButton";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      {/* Page Loader — shows for ~1.8s on first visit */}
      <PageLoader />

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <PrePostResultsSection />
        <GoogleReviewsSection />
        <VideoConsultationSection />
        <AppointmentSection />
        <BusinessHoursSection />
        <FAQSection />
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
