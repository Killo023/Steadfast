import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { PricingCards } from "@/components/PricingCards";
import { TrainingProcess } from "@/components/TrainingProcess";
import { AdditionalServices } from "@/components/AdditionalServices";
import { Testimonials } from "@/components/Testimonials";
import { TrustSignals } from "@/components/TrustSignals";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <FeaturedCourses />
        <PricingCards />
        <TrainingProcess />
        <AdditionalServices />
        <Testimonials />
        <TrustSignals />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
