"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { 
  GraduationCap, 
  FileText, 
  ShoppingCart, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Info
} from "lucide-react";

const acquisitionSteps = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Training and Proficiency (Proficiency Certificate)",
    description: "Complete training at an accredited training institution and pass tests regarding the Firearms Control Act, 2000, and safe, efficient handling of the specific firearm type.",
    details: [
      "Locate Accredited Training: Find a PFTC (Professional Firearm Training Council) or Sasseta accredited institution",
      "Complete Coursework: Attend training, which includes both theoretical (knowledge of the Act) and practical (safe handling) tests for specific firearm types (handgun, rifle, shotgun)",
      "Pass Assessments: Complete open-book tests, closed-book exams, and practical shooting assessments",
      "Obtain Certificate: Upon passing, the training provider will issue a proficiency certificate and a Statement of Results"
    ],
    color: "from-accent/20 to-accent-muted/10"
  },
  {
    number: "02",
    icon: FileText,
    title: "Apply for Competency Certificate (SAPS 517)",
    description: "Submit your training certificate and required documents to your local Designated Firearms Officer (DFO) for background checks and competency approval.",
    details: [
      "Gather Documents: Prepare your ID, training proficiency certificate, Statement of Results, two color passport photos, and proof of residence",
      "Obtain Testimonials: Get two character testimonials from friends or family",
      "Submit Application: Take all documents to your local DFO to fill out the SAPS 517 form",
      "Background Check & Fingerprints: SAPS will conduct background checks to verify no criminal record, mental health issues, or substance abuse problems exist",
      "Waiting Period: The competency application process can take several months"
    ],
    color: "from-[#fbbf24]/20 to-[#f59e0b]/10",
    useBullseye: true,
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Purchase the Firearm",
    description: "Once you have a competency certificate, you can purchase a firearm from a licensed dealer. The firearm remains with the dealer until your license is approved.",
    details: [
      "Select firearm from licensed dealer",
      "Pay for the firearm",
      "Firearm remains with dealer until licensed",
      "Dealer provides dealer stock return (SAP350a)",
      "Receive necessary documentation from dealer"
    ],
    color: "from-accent/20 to-accent-muted/10"
  },
  {
    number: "04",
    icon: FileText,
    title: "Apply for the Firearm License (SAPS 271)",
    description: "Submit the license application (SAPS 271) to your DFO with competency certificate, dealer documentation, and a detailed motivation letter explaining why you need the firearm.",
    details: [
      "Complete SAPS 271 license application",
      "Submit competency certificate",
      "Provide dealer documentation (SAP350a)",
      "Write detailed motivation letter",
      "Explain reason (self-defense, sport, hunting)",
      "Police may inspect your safe",
      "Ensure safe complies with regulations",
      "Submit all documents to DFO"
    ],
    color: "from-[#fbbf24]/20 to-[#f59e0b]/10"
  },
  {
    number: "05",
    icon: Shield,
    title: "Collection",
    description: "Once the license is approved, you will receive a license card and can collect your firearm from the dealer.",
    details: [
      "Wait for license approval",
      "Receive license card from SAPS",
      "Present license card to dealer",
      "Collect firearm from dealer",
      "Firearm is now legally yours"
    ],
    color: "from-accent/20 to-accent-muted/10"
  },
];

export function FirearmAcquisitionGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section
      className="bg-[#0a0a0a] px-4 py-16 md:py-24"
      aria-labelledby="acquisition-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="acquisition-heading" className="sr-only">
            How to acquire a firearm
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 rounded-lg border border-accent/20 bg-accent/5 flex items-center justify-center">
              <i className="fa-solid fa-person-rifle text-accent text-4xl md:text-5xl" aria-hidden />
            </div>
          </div>
          <SectionTitle className="mb-6">How to Acquire a Firearm</SectionTitle>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Click on each step in the diagram below to learn more about the process. Follow these steps 
            to legally acquire a firearm in South Africa.
          </p>
        </motion.div>

        {/* Unsplash hero image - professional training context */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative aspect-[21/9] min-h-[200px] md:min-h-[260px] w-full overflow-hidden rounded-lg border border-accent/20 bg-[#0d1117]">
            <Image
              src="https://images.unsplash.com/photo-1577905027675-fcbe1521b1c8?w=1400&q=85"
              alt="Man doing practice shooting at a range — firearm training and proficiency"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-accent/10 mix-blend-overlay"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-sm font-sans font-medium uppercase tracking-wider text-white/90">
                Accredited training · Safe handling · Legal process
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Visual Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 px-4">
            {acquisitionSteps.map((step, i) => {
              const IconComponent = step.icon;
              const isExpanded = expandedStep === i;
              const isHovered = hoveredStep === i;
              
              return (
                <div key={step.number} className="flex flex-col md:flex-row items-center">
                  {/* Clickable Step Node */}
                  <motion.button
                    onClick={() => setExpandedStep(isExpanded ? null : i)}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`relative flex flex-col items-center gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${step.color} border-2 ${isExpanded ? 'border-accent' : 'border-accent/30'} flex items-center justify-center relative transition-all duration-300 ${isHovered ? 'shadow-lg shadow-accent/30' : ''}`}>
                      {(step as any).useBullseye ? (
                        <i className={`fa-solid fa-bullseye text-accent transition-transform duration-300 ${isHovered ? 'scale-110' : ''} text-4xl md:text-5xl`} aria-hidden></i>
                      ) : (
                        <IconComponent className={`h-10 w-10 md:h-12 md:w-12 text-accent transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} aria-hidden />
                      )}
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                      {!isExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          className="absolute inset-0 bg-accent/10 flex items-center justify-center"
                        >
                          <Info className="h-6 w-6 text-accent" aria-hidden />
                        </motion.div>
                      )}
                    </div>
                    <div className="text-center max-w-[120px] md:max-w-[140px]">
                      <span className={`text-xs md:text-sm font-medium transition-colors ${isExpanded ? 'text-accent' : 'text-gray-400'}`}>
                        {step.title.split("(")[0].trim()}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-accent ${isExpanded ? 'block' : 'hidden'}`}
                    >
                      <ChevronDown className="h-5 w-5" aria-hidden />
                    </motion.div>
                  </motion.button>

                  {/* Arrow Connector */}
                  {i < acquisitionSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      className="hidden md:flex items-center mx-2 lg:mx-4"
                    >
                      <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8 text-accent/50" aria-hidden />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Expanded Step Details */}
          <AnimatePresence>
            {expandedStep !== null && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-12 overflow-hidden"
              >
                <HexagonCard className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-br ${acquisitionSteps[expandedStep].color} border border-accent/20`}>
                        {(acquisitionSteps[expandedStep] as any).useBullseye ? (
                          <i className="fa-solid fa-bullseye text-accent text-3xl" aria-hidden></i>
                        ) : (
                          (() => {
                            const IconComponent = acquisitionSteps[expandedStep].icon;
                            return <IconComponent className="h-8 w-8 text-accent" aria-hidden />;
                          })()
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Step {acquisitionSteps[expandedStep].number}: {acquisitionSteps[expandedStep].title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {acquisitionSteps[expandedStep].description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedStep(null)}
                      className="flex-shrink-0 p-2 hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Close details"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-400 rotate-180" aria-hidden />
                    </button>
                  </div>
                  
                  <div className="pt-6 border-t border-accent/10">
                    <h4 className="text-lg font-semibold text-accent-muted mb-6 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" aria-hidden />
                      Step-by-Step Instructions:
                    </h4>
                    <div className="space-y-4">
                      {acquisitionSteps[expandedStep].details.map((detail, idx) => {
                        // Split detail into title and description if it contains a colon
                        const parts = detail.split(": ");
                        const title = parts[0];
                        const description = parts.slice(1).join(": ");
                        
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start gap-4 p-4 bg-[#0d1117]/50 border border-accent/10 hover:border-accent/30 transition-colors group"
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent-muted/10 border border-accent/30 flex items-center justify-center text-accent font-bold text-sm group-hover:scale-110 transition-transform">
                                {idx + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              {title && description ? (
                                <>
                                  <h5 className="text-white font-semibold mb-1 text-sm">{title}:</h5>
                                  <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
                                </>
                              ) : (
                                <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </HexagonCard>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


        {/* SEO-Friendly Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <HexagonCard className="p-8 md:p-10">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">Complete Guide to Firearm Competency Training in South Africa</h2>
              
              <div className="space-y-6 text-gray-300">
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Requirements for Firearm Ownership</h3>
                  <p className="mb-3 leading-relaxed">
                    To legally acquire a firearm in South Africa, you must meet specific requirements set by the South African Police Service (SAPS). 
                    Applicants must be 21 years or older, be a South African citizen or permanent resident, have no criminal record, and be mentally 
                    and physically fit to handle firearms responsibly. It's important to note that a separate license is required for every firearm you 
                    wish to own, and all licenses must be renewed 90 days before expiry to maintain legal compliance.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">Training and Certification Process</h3>
                  <p className="mb-3 leading-relaxed">
                    Professional firearm competency training typically spans 2-3 days at an accredited institution, depending on the firearm categories 
                    you select. Our SAPS & PFTC accredited training programs cover all essential aspects of firearm safety, legal requirements, and 
                    practical handling. After completing your training, you'll receive a proficiency certificate and Statement of Results, which are 
                    required for your competency certificate application.
                  </p>
                  <p className="mb-3 leading-relaxed">
                    The competency certificate processing time varies by Designated Firearms Officer (DFO) and can take several months. Once approved, 
                    you can proceed with purchasing your firearm and applying for your license. The license application process typically takes 3-6 months, 
                    during which time your firearm will remain securely stored with the licensed dealer until approval.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">What's Included in Our Training Program</h3>
                  <p className="mb-3 leading-relaxed">
                    Our comprehensive firearm competency training includes comprehensive theory training covering the Firearms Control Act, 2000, hands-on 
                    practical training with live fire exercises, all assessment materials and evaluations, range fees, qualification shoot ammunition, 
                    training firearms provided for use, safety equipment including eye and ear protection, and your SAPS & PFTC accredited competency 
                    certificate upon successful completion. We ensure transparent pricing with no hidden charges.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">Important Safety and Legal Considerations</h3>
                  <p className="mb-3 leading-relaxed">
                    Safe storage is a critical requirement for firearm ownership. A police official may inspect your safe to ensure it complies with SAPS 
                    regulations before your license is approved. All safes must meet specific security standards to prevent unauthorized access. Additionally, 
                    responsible firearm ownership requires ongoing commitment to safety protocols, regular training, and compliance with all South African 
                    firearm laws and regulations.
                  </p>
                </section>
              </div>
            </div>
          </HexagonCard>
        </motion.div>
      </div>
    </section>
  );
}

