import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import TeamGallery from "@/components/TeamGallery";
import ServicesGrid from "@/components/ServicesGrid";
import AudienceSection from "@/components/AudienceSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <AboutSection />
        <ServicesGrid />
        <AudienceSection />
        <DifferentiatorsSection />
        <TeamGallery />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
