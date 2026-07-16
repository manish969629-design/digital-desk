import FloatingAI from "@/components/ai/FloatingAI";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedServices from "@/components/FeaturedServices";
import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import PDFToolsSection from "@/components/PDFToolsSection";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedServices />

      <ServiceGrid />

      <Categories />

      <PDFToolsSection />

      <WhyChooseUs />

      <Testimonials />

      <Footer />

      <FloatingAI />

      <WhatsAppButton />
    </>
  );
}