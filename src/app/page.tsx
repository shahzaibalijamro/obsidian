import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ToolsTechnologiesSection from "@/components/ToolsTechnologiesSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <IndustriesSection />
        <TestimonialsSection />
        <ToolsTechnologiesSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
