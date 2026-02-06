"use client";

import { motion } from "framer-motion";

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

export function AccreditationSection() {
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
        {/* Bright floating dots */}
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
        {/* Header: modern + gun & target icons + bright underline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 id="accreditation-heading" className="sr-only">
            Accreditation and unit standards
          </h2>

          <div className="flex justify-center gap-4 mb-6">
            <motion.div
              className="p-4 border-2 border-accent/40 bg-accent/5 relative"
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <i className="fa-solid fa-gun text-accent text-4xl md:text-5xl" aria-hidden />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#fbbf24] rounded-full animate-pulse" />
            </motion.div>
            <motion.div
              className="p-4 border-2 border-[#fbbf24]/50 bg-[#fbbf24]/5 relative"
              initial={{ scale: 0.8, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            >
              <i className="fa-solid fa-bullseye text-[#fbbf24] text-4xl md:text-5xl" aria-hidden />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
            </motion.div>
          </div>

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
            We offer SAPS & PFTC accredited training and the following unit standards. All our courses meet the highest professional standards and are recognized nationwide.
          </motion.p>
        </motion.div>

        {/* Basic Unit Standards - abstract card grid with target icon */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 border border-accent/30 bg-accent/10">
              <i className="fa-solid fa-bullseye text-accent text-2xl" aria-hidden />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              Basic Accredited Unit Standards
            </h4>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-accent/50 to-transparent" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {basicUnitStandards.map((standard, i) => (
              <motion.div
                key={standard.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="relative p-5 border border-accent/20 bg-black/40 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 transform rotate-45 translate-x-10 -translate-y-10" />
                  <div className="flex items-start gap-4 relative">
                    <div className="flex-shrink-0 p-2.5 border border-accent/30 bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <i className="fa-solid fa-bullseye text-accent text-lg" aria-hidden />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-white font-semibold text-sm md:text-base leading-snug mb-1">
                        {standard.title}
                      </h5>
                      <p className="text-accent font-mono text-xs">{standard.code}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Unit Standards - gun icon */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 border border-[#fbbf24]/30 bg-[#fbbf24]/10">
              <i className="fa-solid fa-gun text-[#fbbf24] text-2xl" aria-hidden />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              Business Unit Standards
            </h4>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-[#fbbf24]/50 to-transparent" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {businessUnitStandards.map((standard, i) => (
              <motion.div
                key={standard.code}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="relative p-5 border border-[#fbbf24]/20 bg-black/40 backdrop-blur-sm hover:border-[#fbbf24]/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#fbbf24]/5 transform -rotate-12 -translate-x-4 translate-y-4" />
                  <div className="flex items-start gap-4 relative">
                    <div className="flex-shrink-0 p-2.5 border border-[#fbbf24]/30 bg-[#fbbf24]/10 group-hover:bg-[#fbbf24]/20 transition-colors">
                      <i className="fa-solid fa-gun text-[#fbbf24] text-lg" aria-hidden />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-white font-semibold text-sm md:text-base leading-snug mb-1">
                        {standard.title}
                      </h5>
                      <p className="text-[#fbbf24] font-mono text-xs">{standard.code}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#fbbf24]/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regulation 21 - mixed gun & target + bright categories */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 border border-accent/30 bg-accent/10">
              <i className="fa-solid fa-bullseye text-accent text-xl" aria-hidden />
            </div>
            <div className="p-3 border border-[#fbbf24]/30 bg-[#fbbf24]/10">
              <i className="fa-solid fa-gun text-[#fbbf24] text-xl" aria-hidden />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              Regulation 21 Compliance Training
            </h4>
          </div>

          <div className="relative p-8 md:p-10 border border-accent/20 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#fbbf24]/5 rounded-full blur-2xl" />

            <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
              In addition to these unit standards, we offer Regulation 21 compliance training to Security professionals. Each year Armed security officers are required by law to complete a Regulation 21 refresher course. We hold small classes whereby we provide the training necessary to remain compliant. We also teach peripheral skills and concepts not contained in the course, at no extra charge.
            </p>

            <h5 className="text-white font-semibold mb-4 relative z-10">Regulation 21 Training Categories:</h5>
            <div className="flex flex-wrap gap-3 relative z-10">
              {regulation21.map((category, i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-3 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] group-hover:scale-125 transition-transform" />
                  <span className="text-white font-medium text-sm">{category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
