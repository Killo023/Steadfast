"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BadgeCheck, Shield, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { GlowOrb } from "@/components/motion/GlowOrb";

const basicUnitStandards = [
  { title: "Demonstrate knowledge of the firearms control Act", code: "Unit Standard 117705" },
  { title: "Handle and use a Handgun", code: "Unit Standard 119649" },
  { title: "Handle and use a manually operated rifle or carbine", code: "Unit Standard 119651" },
  { title: "Handle and use a self-loading rifle or carbine", code: "Unit Standard 119650" },
  { title: "Handle and use a Shotgun", code: "Unit Standard 119652" },
];

const businessUnitStandards = [
  { title: "Handle and use a Handgun for Business Purpose", code: "Unit Standard 123515" },
  { title: "Handle and use a Manually Operated Rifle for Business Purpose", code: "Unit Standard 123519" },
  { title: "Handle and use a Self Loading Rifle for Business Purpose", code: "Unit Standard 123511" },
  { title: "Handle and use a Shotgun for Business Purpose", code: "Unit Standard 123514" },
];

const regulation21 = ["Handgun", "Shotgun", "Self Loading Rifle", "Manually Operated Rifle"];

type ExpandedSection = "basic" | "business" | "regulation21" | null;

export function AccreditationSection() {
  const [expanded, setExpanded] = useState<ExpandedSection>(null);

  const toggle = (key: ExpandedSection) =>
    setExpanded((prev) => (prev === key ? null : key));

  const tiles: {
    key: ExpandedSection;
    icon: typeof Shield;
    title: string;
    subtitle: string;
    count: string;
  }[] = [
    { key: "basic", icon: Shield, title: "Basic Unit Standards", subtitle: "Personal purpose", count: "5 standards" },
    { key: "business", icon: Building2, title: "Business Unit Standards", subtitle: "Commercial purpose", count: "4 standards" },
    { key: "regulation21", icon: BadgeCheck, title: "Regulation 21", subtitle: "Security compliance", count: "Annual refresher" },
  ];

  return (
    <section
      id="accreditation"
      className="relative scroll-mt-20 overflow-hidden bg-[#050505] py-24 md:py-32"
      aria-labelledby="accreditation-heading"
    >
      <div className="hazard-stripes absolute inset-x-0 bottom-0 h-2 opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.07),transparent_60%)]" aria-hidden />
      <GlowOrb className="left-[-100px] bottom-10" size="w-72 h-72" color="rgba(251,191,36,0.07)" duration={15} delay={1} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="accreditation-heading" className="sr-only">
          SAPS &amp; PFTC accreditation and unit standards
        </h2>
        <SectionHeading
          eyebrow="// 05 · Credentials"
          title="SAPS & PFTC"
          highlight="Accredited"
          description="We train and assess against national unit standards registered on the Professional Firearm Trainers Council. Select a category to view the standards we deliver."
          className="mb-14"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((tile, i) => {
            const IconComponent = tile.icon;
            const isOpen = expanded === tile.key;
            return (
              <motion.button
                key={tile.key}
                type="button"
                onClick={() => toggle(tile.key)}
                aria-expanded={isOpen}
                aria-controls={`accreditation-${tile.key}-content`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`tactical-card group relative p-6 text-left transition-colors duration-300 ${
                  isOpen ? "!border-accent/50" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center border border-accent/25 bg-accent/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                    <span className="ring-pulse absolute inset-0" aria-hidden />
                    <IconComponent className="h-6 w-6 text-accent" aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold uppercase leading-tight text-white">
                      {tile.title}
                    </h3>
                    <p className="readout mt-1 text-slate-400">{tile.subtitle}</p>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                    <ChevronDown className="h-5 w-5 text-accent" aria-hidden />
                  </motion.span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs text-slate-500">{tile.count}</span>
                  <span className="readout text-accent/70">{isOpen ? "HIDE" : "VIEW"}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {expanded === "basic" && (
            <motion.div
              key="basic"
              id="accreditation-basic-content"
              role="region"
              aria-label="Basic unit standards"
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {basicUnitStandards.map((standard, i) => (
                  <motion.div
                    key={standard.code}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="tactical-card p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-accent/30 bg-accent/10">
                        <BadgeCheck className="h-4 w-4 text-accent" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold leading-snug text-white">{standard.title}</p>
                        <p className="readout mt-1.5 text-accent">{standard.code}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {expanded === "business" && (
            <motion.div
              key="business"
              id="accreditation-business-content"
              role="region"
              aria-label="Business unit standards"
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {businessUnitStandards.map((standard, i) => (
                  <motion.div
                    key={standard.code}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="tactical-card p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-amber-400/30 bg-amber-400/10">
                        <Building2 className="h-4 w-4 text-amber-400" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold leading-snug text-white">{standard.title}</p>
                        <p className="readout mt-1.5 text-amber-400">{standard.code}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {expanded === "regulation21" && (
            <motion.div
              key="regulation21"
              id="accreditation-regulation21-content"
              role="region"
              aria-label="Regulation 21 compliance training"
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="tactical-card relative mt-8 overflow-hidden p-8 md:p-10">
                <div className="scanlines absolute inset-0 opacity-20" aria-hidden />
                <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      Each year, armed security officers are required by law to complete a
                      Regulation 21 refresher course. We hold small classes to deliver the
                      training needed to stay compliant — and we teach peripheral skills and
                      concepts not contained in the course, at no extra charge.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {regulation21.map((category, i) => (
                        <motion.span
                          key={category}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.06 }}
                          className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 px-3 py-2 text-sm text-white"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
                          {category}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="border border-accent/20 bg-accent/5 p-6 text-center">
                    <p className="font-display text-6xl font-extrabold text-gradient">21</p>
                    <p className="readout mt-2 text-slate-300">Regulation 21</p>
                    <p className="mt-1 text-xs text-slate-500">Annual compliance refresher for security professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Reveal direction="fade" delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Certificates are issued through SAPS-recognised providers and registered with the PFTC.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
