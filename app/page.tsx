import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { PricingCards } from "@/components/PricingCards";
import { AccreditationSection } from "@/components/AccreditationSection";
import { MissionSection } from "@/components/MissionSection";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { FirearmAcquisitionGuide } from "@/components/FirearmAcquisitionGuide";
import { TrainingProcess } from "@/components/TrainingProcess";
import { AdditionalServices } from "@/components/AdditionalServices";
import { Testimonials } from "@/components/Testimonials";
import { TrustSignals } from "@/components/TrustSignals";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <AccreditationSection />
        <PricingCards />
        <AboutSection />
        <MissionSection />
        <FeaturedCourses />
        <FirearmAcquisitionGuide />
        <TrainingProcess />
        <AdditionalServices />
        <Testimonials />
        <TrustSignals />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
