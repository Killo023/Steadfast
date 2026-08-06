"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, FileText, ShoppingCart, Shield, ArrowRight, ChevronDown, Info, Target } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { GlowOrb } from "@/components/motion/GlowOrb";

const acquisitionSteps = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Training and Proficiency (Proficiency Certificate)",
    short: "Training & Proficiency",
    description:
      "Complete training at an accredited training institution and pass tests regarding the Firearms Control Act, 2000, and safe, efficient handling of the specific firearm type.",
    details: [
      "Locate Accredited Training: Find a PFTC or Sasseta accredited institution",
      "Complete Coursework: Attend training covering theory (knowledge of the Act) and practical (safe handling) tests for handgun, rifle, and shotgun",
      "Pass Assessments: Complete open-book tests, closed-book exams, and practical shooting assessments",
      "Obtain Certificate: Upon passing, the provider issues a proficiency certificate and a Statement of Results",
    ],
    color: "from-cyan-500/25 to-transparent",
  },
  {
    number: "02",
    icon: FileText,
    title: "Apply for Competency Certificate (SAPS 517)",
    short: "Competency Certificate",
    description:
      "Submit your training certificate and required documents to your local Designated Firearms Officer (DFO) for background checks and competency approval.",
    details: [
      "Gather Documents: ID, training proficiency certificate, Statement of Results, two colour passport photos, proof of residence",
      "Obtain Testimonials: Get two character testimonials from friends or family",
      "Submit Application: Take documents to your local DFO to complete the SAPS 517 form",
      "Background Check & Fingerprints: SAPS verifies no criminal record, mental health issues, or substance abuse problems",
      "Waiting Period: The competency application process can take several months",
    ],
    color: "from-amber-500/25 to-transparent",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Purchase the Firearm",
    short: "Purchase the Firearm",
    description:
      "Once you have a competency certificate, you can purchase a firearm from a licensed dealer. The firearm remains with the dealer until your license is approved.",
    details: [
      "Select a firearm from a licensed dealer",
      "Pay for the firearm",
      "Firearm remains with the dealer until licensed",
      "Dealer provides dealer stock return (SAP350a)",
      "Receive necessary documentation from the dealer",
    ],
    color: "from-cyan-500/25 to-transparent",
  },
  {
    number: "04",
    icon: FileText,
    title: "Apply for the Firearm License (SAPS 271)",
    short: "Firearm License",
    description:
      "Submit the license application (SAPS 271) to your DFO with competency certificate, dealer documentation, and a detailed motivation letter explaining why you need the firearm.",
    details: [
      "Complete the SAPS 271 license application",
      "Submit your competency certificate",
      "Provide dealer documentation (SAP350a)",
      "Write a detailed motivation letter",
      "Explain your reason (self-defence, sport, hunting)",
      "Police may inspect your safe",
      "Ensure the safe complies with regulations",
      "Submit all documents to the DFO",
    ],
    color: "from-amber-500/25 to-transparent",
  },
  {
    number: "05",
    icon: Shield,
    title: "Collection",
    short: "Collection",
    description:
      "Once the license is approved, you will receive a license card and can collect your firearm from the dealer.",
    details: [
      "Wait for license approval",
      "Receive license card from SAPS",
      "Present license card to the dealer",
      "Collect firearm from the dealer",
      "Firearm is now legally yours",
    ],
    color: "from-cyan-500/25 to-transparent",
  },
];

export function FirearmAcquisitionGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section
      id="guide"
      className="relative scroll-mt-20 overflow-hidden bg-[#070a10] py-24 md:py-32"
      aria-labelledby="acquisition-heading"
    >
      <div className="tactical-grid absolute inset-0 opacity-15" aria-hidden />
      <GlowOrb className="right-[-120px] top-24" size="w-80 h-80" color="rgba(251,191,36,0.07)" duration={14} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="acquisition-heading" className="sr-only">
          How to acquire a firearm in South Africa
        </h2>
        <SectionHeading
          eyebrow="// 06 · The Journey"
          title="How to Acquire"
          highlight="a Firearm"
          description="Follow these steps to legally acquire a firearm in South Africa. Tap any step to see exactly what's involved."
          className="mb-14"
        />

        {/* Cinematic hero strip */}
        <Reveal direction="up" className="mb-16">
          <div className="group relative aspect-[21/9] min-h-[220px] w-full overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1577905027675-fcbe1521b1c8?w=1400&q=85"
              alt="Accredited firearm competency training and proficiency at a South African shooting range"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" aria-hidden />
            <div className="scanlines absolute inset-0 opacity-30" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-x-6 gap-y-2 p-6 md:p-8">
              <p className="readout text-white/90">Accredited training</p>
              <span className="hidden h-1 w-1 rounded-full bg-accent md:block" aria-hidden />
              <p className="readout text-white/90">Safe handling</p>
              <span className="hidden h-1 w-1 rounded-full bg-accent md:block" aria-hidden />
              <p className="readout text-white/90">Legal process</p>
            </div>
          </div>
        </Reveal>

        {/* Mobile: modal */}
        <div className="mb-16 md:hidden">
          <Reveal direction="fade">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="btn-primary text-sm"
              >
                View the 5 steps
              </button>
            </div>
          </Reveal>
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                  onClick={() => { setMobileOpen(false); setExpandedStep(null); }}
                  aria-hidden
                />
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed inset-x-0 bottom-0 z-[60] max-h-[90vh] overflow-y-auto border-t border-accent/20 bg-[#070a10] shadow-2xl"
                >
                  <div className="sticky top-0 flex items-center justify-between border-b border-accent/20 bg-[#070a10] px-4 py-3">
                    <h3 className="font-display text-lg font-bold uppercase text-white">
                      How to acquire a firearm
                    </h3>
                    <button
                      type="button"
                      onClick={() => { setMobileOpen(false); setExpandedStep(null); }}
                      className="p-2 text-white"
                      aria-label="Close"
                    >
                      <ChevronDown className="h-6 w-6 rotate-180" aria-hidden />
                    </button>
                  </div>
                  <div className="space-y-3 p-4 pb-10">
                    {acquisitionSteps.map((step, i) => {
                      const IconComponent = step.icon;
                      const isOpen = expandedStep === i;
                      return (
                        <div key={step.number} className="overflow-hidden border border-white/10 bg-black/40">
                          <button
                            type="button"
                            onClick={() => setExpandedStep(isOpen ? null : i)}
                            className="flex w-full items-center gap-3 p-4 text-left"
                            aria-expanded={isOpen}
                          >
                            <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center border border-accent/30 bg-gradient-to-br ${step.color}`}>
                              <IconComponent className="h-5 w-5 text-accent" aria-hidden />
                            </span>
                            <span className="flex-1 text-sm font-semibold text-white">{step.short}</span>
                            <span className="font-display text-xl font-bold text-accent/50">{step.number}</span>
                            <ChevronDown className={`h-5 w-5 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="border-t border-white/5"
                              >
                                <div className="space-y-3 p-4">
                                  <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
                                  <ul className="space-y-2">
                                    {step.details.map((detail, idx) => (
                                      <li key={idx} className="flex gap-2 text-sm">
                                        <span className="font-mono text-accent">{idx + 1}.</span>
                                        <span className="text-slate-400">{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop: interactive diagram */}
        <Reveal direction="fade" delay={0.1} className="hidden md:block">
          <div className="relative flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0 lg:gap-2">
            {/* Connector line */}
            <motion.div
              className="absolute left-[8%] right-[8%] top-12 hidden h-px origin-left bg-gradient-to-r from-accent/50 via-accent/20 to-transparent md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden
            />
            {acquisitionSteps.map((step, i) => {
              const IconComponent = step.icon;
              const isOpen = expandedStep === i;
              const isHovered = hoveredStep === i;
              return (
                <div key={step.number} className="relative z-10 flex flex-col items-center md:flex-1">
                  <motion.button
                    type="button"
                    onClick={() => setExpandedStep(isOpen ? null : i)}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    aria-label={`Step ${step.number}: ${step.short} — click to view details`}
                    aria-expanded={isOpen}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="group flex flex-col items-center gap-3 rounded-md p-2 focus:outline-none"
                  >
                    <div
                      className={`relative flex h-24 w-24 items-center justify-center border bg-black/60 backdrop-blur-sm transition-all duration-300 ${
                        isOpen ? "border-accent shadow-[0_0_30px_-6px_rgba(56,189,248,0.6)]" : "border-accent/30"
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color}`} aria-hidden />
                      <IconComponent
                        className={`relative z-10 h-9 w-9 text-accent transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                        aria-hidden
                      />
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center bg-gradient-to-r from-accent to-indigo-500 font-display text-xs font-bold text-black">
                        {step.number}
                      </span>
                      <AnimatePresence>
                        {!isOpen && isHovered && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-accent/10"
                          >
                            <Info className="h-6 w-6 text-accent" aria-hidden />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className={`max-w-[110px] text-center text-xs font-semibold uppercase tracking-wide ${isOpen ? "text-accent" : "text-slate-400"}`}>
                      {step.short}
                    </span>
                  </motion.button>
                  {i < acquisitionSteps.length - 1 && (
                    <ArrowRight className="absolute -right-2 top-11 z-20 hidden h-5 w-5 text-accent/40 md:block" aria-hidden />
                  )}
                </div>
              );
            })}
          </div>

          {/* Expanded details */}
          <AnimatePresence>
            {expandedStep !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="tactical-card relative mt-12 overflow-hidden p-8 md:p-10">
                  <div className="scanlines absolute inset-0 opacity-20" aria-hidden />
                  <div className="relative z-10">
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-white/5 pb-6">
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center border border-accent/30 bg-accent/10">
                          {(() => {
                            const IconComponent = acquisitionSteps[expandedStep].icon;
                            return <IconComponent className="h-7 w-7 text-accent" aria-hidden />;
                          })()}
                        </span>
                        <div>
                          <p className="readout text-accent">STEP {acquisitionSteps[expandedStep].number}</p>
                          <h3 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
                            {acquisitionSteps[expandedStep].title}
                          </h3>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setExpandedStep(null)}
                        className="border border-white/15 p-2 text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
                        aria-label="Close details"
                      >
                        <ChevronDown className="h-5 w-5 rotate-180" aria-hidden />
                      </button>
                    </div>

                    <p className="mb-6 text-slate-300">{acquisitionSteps[expandedStep].description}</p>

                    <div className="grid gap-3 md:grid-cols-2">
                      {acquisitionSteps[expandedStep].details.map((detail, idx) => {
                        const parts = detail.split(": ");
                        const title = parts[0];
                        const desc = parts.slice(1).join(": ");
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -14 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 border border-white/5 bg-black/30 p-4 transition-colors hover:border-accent/30"
                          >
                            <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center border border-accent/30 bg-accent/10 font-display text-xs font-bold text-accent">
                              {idx + 1}
                            </span>
                            <div>
                              {desc ? (
                                <>
                                  <p className="text-sm font-semibold text-white">{title}:</p>
                                  <p className="text-sm text-slate-400">{desc}</p>
                                </>
                              ) : (
                                <p className="text-sm text-slate-400">{detail}</p>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        {/* SEO-friendly content */}
        <Reveal direction="up" className="mt-16">
          <div className="tactical-card p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-3xl font-extrabold uppercase text-white md:text-4xl">
                Complete Guide to Firearm Competency Training in South Africa
              </h2>

              <div className="mt-8 space-y-8 text-slate-300">
                <section>
                  <h3 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-accent">
                    <Target className="h-5 w-5" aria-hidden /> Key Requirements for Firearm Ownership
                  </h3>
                  <p className="leading-relaxed">
                    To legally acquire a firearm in South Africa, you must meet specific requirements set by
                    the South African Police Service (SAPS). Applicants must be 21 years or older, be a South
                    African citizen or permanent resident, have no criminal record, and be mentally and
                    physically fit to handle firearms responsibly. A separate license is required for every
                    firearm you wish to own, and all licenses must be renewed 90 days before expiry to maintain
                    legal compliance.
                  </p>
                </section>

                <section>
                  <h3 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-accent">
                    <Target className="h-5 w-5" aria-hidden /> Training and Certification Process
                  </h3>
                  <p className="mb-3 leading-relaxed">
                    Professional firearm competency training typically spans 2–3 days at an accredited
                    institution, depending on the firearm categories you select. Our SAPS &amp; PFTC accredited
                    training programs cover all essential aspects of firearm safety, legal requirements, and
                    practical handling. After completing your training, you receive a proficiency certificate
                    and Statement of Results, both required for your competency certificate application.
                  </p>
                  <p className="leading-relaxed">
                    The competency certificate processing time varies by Designated Firearms Officer (DFO) and
                    can take several months. Once approved, you can proceed with purchasing your firearm and
                    applying for your license. The license application process typically takes 3–6 months,
                    during which time your firearm remains securely stored with the licensed dealer.
                  </p>
                </section>

                <section>
                  <h3 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-accent">
                    <Target className="h-5 w-5" aria-hidden /> What&apos;s Included in Our Training Program
                  </h3>
                  <p className="leading-relaxed">
                    Our comprehensive firearm competency training includes theory covering the Firearms Control
                    Act, 2000, hands-on practical training with live-fire exercises, all assessment materials,
                    range fees, qualification-shoot ammunition, training firearms, safety equipment including
                    eye and ear protection, and your SAPS &amp; PFTC accredited competency certificate upon
                    successful completion. Pricing is transparent — no hidden charges.
                  </p>
                </section>

                <section>
                  <h3 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-accent">
                    <Target className="h-5 w-5" aria-hidden /> Important Safety and Legal Considerations
                  </h3>
                  <p className="leading-relaxed">
                    Safe storage is a critical requirement for firearm ownership. A police official may inspect
                    your safe to ensure it complies with SAPS regulations before your license is approved. All
                    safes must meet specific security standards to prevent unauthorised access. Responsible
                    firearm ownership also requires ongoing commitment to safety protocols, regular training,
                    and compliance with all South African firearm laws and regulations.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
