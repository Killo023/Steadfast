"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const regulation21 = ["Handgun", "Shotgun", "Self Loading rifle", "Manually operated rifle"];

type ExpandedSection = "basic" | "business" | "regulation21" | null;

export function AccreditationSection() {
  const [expanded, setExpanded] = useState<ExpandedSection>(null);

  const toggle = (key: ExpandedSection) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <section
      className="bg-[#0d1117] px-4 py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="accreditation-heading"
    >
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 tactical-grid opacity-30" />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-[#fbbf24]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? "w-2 h-2 bg-[#fbbf24]" : i % 3 === 1 ? "w-1.5 h-1.5 bg-accent" : "w-1 h-1 bg-white/60"
            }`}
            style={{
              left: `${8 + (i * 7) % 85}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 id="accreditation-heading" className="sr-only">
            Accreditation and unit standards
          </h2>

          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="relative inline-block">
              SAPS & PFTC
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent" />
            </span>
            <br />
            <span className="text-accent">Accredited Training</span>
          </motion.h3>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer SAPS & PFTC accredited training and the following unit standards. Click a category to view details.
          </motion.p>
        </motion.div>

        {/* Minimal clickable tiles */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {/* Basic Unit Standards tile */}
          <motion.button
            type="button"
            onClick={() => toggle("basic")}
            aria-expanded={expanded === "basic"}
            aria-controls="accreditation-basic-content"
            id="accreditation-basic"
            className={`text-left w-full p-5 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0d1117] ${
              expanded === "basic"
                ? "border-accent bg-accent/10"
                : "border-accent/30 bg-black/30 hover:border-accent/50 hover:bg-accent/5"
            }`}
            whileHover={{ scale: expanded === "basic" ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 border border-accent/40 bg-accent/10 flex-shrink-0">
                <i className="fa-solid fa-bullseye text-accent text-xl" aria-hidden />
              </div>
              <div>
                <span className="text-white font-bold text-sm uppercase tracking-wide block">
                  Basic Unit Standards
                </span>
                <span className="text-accent/80 text-xs font-mono">{basicUnitStandards.length} standards</span>
              </div>
              <span className={`ml-auto text-accent text-lg transition-transform duration-300 ${expanded === "basic" ? "rotate-180" : ""}`}>
                <i className="fa-solid fa-chevron-down" aria-hidden />
              </span>
            </div>
          </motion.button>

          {/* Business Unit Standards tile */}
          <motion.button
            type="button"
            onClick={() => toggle("business")}
            aria-expanded={expanded === "business"}
            aria-controls="accreditation-business-content"
            id="accreditation-business"
            className={`text-left w-full p-5 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2 focus:ring-offset-[#0d1117] ${
              expanded === "business"
                ? "border-[#fbbf24] bg-[#fbbf24]/10"
                : "border-[#fbbf24]/30 bg-black/30 hover:border-[#fbbf24]/50 hover:bg-[#fbbf24]/5"
            }`}
            whileHover={{ scale: expanded === "business" ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 border border-[#fbbf24]/40 bg-[#fbbf24]/10 flex-shrink-0">
                <i className="fa-solid fa-gun text-[#fbbf24] text-xl" aria-hidden />
              </div>
              <div>
                <span className="text-white font-bold text-sm uppercase tracking-wide block">
                  Business Unit Standards
                </span>
                <span className="text-[#fbbf24]/80 text-xs font-mono">{businessUnitStandards.length} standards</span>
              </div>
              <span className={`ml-auto text-[#fbbf24] text-lg transition-transform duration-300 ${expanded === "business" ? "rotate-180" : ""}`}>
                <i className="fa-solid fa-chevron-down" aria-hidden />
              </span>
            </div>
          </motion.button>

          {/* Regulation 21 tile */}
          <motion.button
            type="button"
            onClick={() => toggle("regulation21")}
            aria-expanded={expanded === "regulation21"}
            aria-controls="accreditation-regulation21-content"
            id="accreditation-regulation21"
            className={`text-left w-full p-5 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0d1117] ${
              expanded === "regulation21"
                ? "border-accent bg-accent/10"
                : "border-white/20 bg-black/30 hover:border-white/40 hover:bg-white/5"
            }`}
            whileHover={{ scale: expanded === "regulation21" ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="p-2 border border-accent/40 bg-accent/10">
                  <i className="fa-solid fa-bullseye text-accent text-sm" aria-hidden />
                </div>
                <div className="p-2 border border-[#fbbf24]/40 bg-[#fbbf24]/10">
                  <i className="fa-solid fa-gun text-[#fbbf24] text-sm" aria-hidden />
                </div>
              </div>
              <div>
                <span className="text-white font-bold text-sm uppercase tracking-wide block">
                  Regulation 21
                </span>
                <span className="text-gray-400 text-xs">Compliance training</span>
              </div>
              <span className={`ml-auto text-white/70 text-lg transition-transform duration-300 ${expanded === "regulation21" ? "rotate-180" : ""}`}>
                <i className="fa-solid fa-chevron-down" aria-hidden />
              </span>
            </div>
          </motion.button>
        </div>

        {/* Expanded content */}
        <AnimatePresence mode="wait">
          {expanded === "basic" && (
            <motion.div
              id="accreditation-basic-content"
              role="region"
              aria-labelledby="accreditation-basic"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {basicUnitStandards.map((standard, i) => (
                  <motion.div
                    key={standard.code}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className="group relative"
                  >
                    <div className="relative p-4 border border-accent/20 bg-black/40 backdrop-blur-sm rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-2 border border-accent/30 bg-accent/10">
                          <i className="fa-solid fa-bullseye text-accent text-sm" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-white font-semibold text-sm leading-snug mb-1">{standard.title}</h5>
                          <p className="text-accent font-mono text-xs">{standard.code}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {expanded === "business" && (
            <motion.div
              id="accreditation-business-content"
              role="region"
              aria-labelledby="accreditation-business"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {businessUnitStandards.map((standard, i) => (
                  <motion.div
                    key={standard.code}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className="group relative"
                  >
                    <div className="relative p-4 border border-[#fbbf24]/20 bg-black/40 backdrop-blur-sm rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-2 border border-[#fbbf24]/30 bg-[#fbbf24]/10">
                          <i className="fa-solid fa-gun text-[#fbbf24] text-sm" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-white font-semibold text-sm leading-snug mb-1">{standard.title}</h5>
                          <p className="text-[#fbbf24] font-mono text-xs">{standard.code}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {expanded === "regulation21" && (
            <motion.div
              id="accreditation-regulation21-content"
              role="region"
              aria-labelledby="accreditation-regulation21"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="relative p-6 md:p-8 border border-accent/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#fbbf24]/5 rounded-full blur-2xl" />
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 relative z-10">
                  In addition to these unit standards, we offer Regulation 21 compliance training to Security professionals. Each year Armed security officers are required by law to complete a Regulation 21 refresher course. We hold small classes whereby we provide the training necessary to remain compliant. We also teach peripheral skills and concepts not contained in the course, at no extra charge.
                </p>
                <h5 className="text-white font-semibold text-sm mb-3 relative z-10">Regulation 21 Training Categories:</h5>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {regulation21.map((category, i) => (
                    <motion.span
                      key={category}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.06 }}
                      className="inline-flex items-center gap-2 px-3 py-2 border border-accent/30 bg-accent/5 rounded-md text-white text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
                      {category}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
