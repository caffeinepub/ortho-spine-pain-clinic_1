import AboutSection from "./components/AboutSection";
import BusinessHoursSection from "./components/BusinessHoursSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <BusinessHoursSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
