import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { StatsBar } from "@/components/StatsBar";
import { PricingCards } from "@/components/PricingCards";
import { AboutSection } from "@/components/AboutSection";
import { MissionSection } from "@/components/MissionSection";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { TrainingProcess } from "@/components/TrainingProcess";
import { AccreditationSection } from "@/components/AccreditationSection";
import { FirearmAcquisitionGuide } from "@/components/FirearmAcquisitionGuide";
import { AdditionalServices } from "@/components/AdditionalServices";
import { Testimonials } from "@/components/Testimonials";
import { TrustSignals } from "@/components/TrustSignals";
import { FAQ } from "@/components/FAQ";
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
        <MarqueeStrip />
        <StatsBar />
        <PricingCards />
        <AboutSection />
        <MissionSection />
        <FeaturedCourses />
        <TrainingProcess />
        <AccreditationSection />
        <FirearmAcquisitionGuide />
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
