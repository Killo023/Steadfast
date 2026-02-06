"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Award, FileText, Briefcase, Shield } from "lucide-react";

const basicUnitStandards = [
  {
    title: "Demonstrate knowledge of the firearms control Act",
    code: "Unit Standard 117705",
  },
  {
    title: "Handle and use a Handgun",
    code: "Unit Standard 119649",
  },
  {
    title: "Handle and use a manually operated rifle or carbine",
    code: "Unit Standard 119651",
  },
  {
    title: "Handle and use a self-loading rifle or carbine",
    code: "Unit Standard 119650",
  },
  {
    title: "Handle and use a Shotgun",
    code: "Unit Standard 119652",
  },
];

const businessUnitStandards = [
  {
    title: "Handle and use a Handgun for Business Purpose",
    code: "Unit Standard 123515",
  },
  {
    title: "Handle and use a Manually Operated Rifle for Business Purpose",
    code: "Unit Standard 123519",
  },
  {
    title: "Handle and use a Self Loading Rifle for Business Purpose",
    code: "Unit Standard 123511",
  },
  {
    title: "Handle and use a Shotgun for Business Purpose",
    code: "Unit Standard 123514",
  },
];

const regulation21 = [
  "Handgun",
  "Shotgun",
  "Self Loading rifle",
  "Manually operated rifle",
];

export function AccreditationSection() {
  return (
    <section
      className="bg-navy-light px-4 py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="accreditation-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-accent/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Small decorative dots */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent/30 rounded-full"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 5) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="accreditation-heading" className="sr-only">
            Accreditation and unit standards
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <i className="fa-solid fa-bullseye text-accent text-4xl" aria-hidden></i>
            </div>
          </div>
          <SectionTitle className="mb-6">SAPS & PFTC Accredited Training</SectionTitle>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We offer SAPS & PFTC accredited training and the following basic accredited unit standards. 
            All our courses meet the highest professional standards and are recognized nationwide.
          </p>
        </motion.div>

        {/* Basic Unit Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <FileText className="h-6 w-6 text-accent" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold text-white">Basic Accredited Unit Standards</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {basicUnitStandards.map((standard, i) => (
              <motion.div
                key={standard.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <HexagonCard className="p-5 h-full relative overflow-hidden group">
                  {/* Small corner decoration */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="flex-shrink-0 p-2 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20 relative"
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Pulsing effect */}
                      <motion.div
                        className="absolute inset-0 bg-accent/20 rounded-sm"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                      <Shield className="h-5 w-5 text-accent relative z-10" aria-hidden />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1 leading-tight">
                        {standard.title}
                      </h4>
                      <p className="text-sm text-accent font-mono">{standard.code}</p>
                    </div>
                  </div>
                  
                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  />
                </HexagonCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Unit Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <Briefcase className="h-6 w-6 text-accent" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold text-white">Business Unit Standards</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {businessUnitStandards.map((standard, i) => (
              <motion.div
                key={standard.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <HexagonCard className="p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
                      <Briefcase className="h-5 w-5 text-accent" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1 leading-tight">
                        {standard.title}
                      </h4>
                      <p className="text-sm text-accent font-mono">{standard.code}</p>
                    </div>
                  </div>
                </HexagonCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regulation 21 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="modern-card p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <Shield className="h-6 w-6 text-accent" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold text-white">Regulation 21 Compliance Training</h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 text-base">
            In addition to these unit standards, we offer Regulation 21 compliance training to Security professionals. 
            Each year Armed security officers are required by law to complete a Regulation 21 refresher course. 
            We hold small classes whereby we provide the training necessary to remain compliant. We also teach 
            peripheral skills and concepts not contained in the course, at no extra charge.
          </p>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-4">Regulation 21 Training Categories:</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {regulation21.map((category, i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-2 p-3 bg-navy border border-accent/20"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                  <span className="text-white font-medium">{category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
