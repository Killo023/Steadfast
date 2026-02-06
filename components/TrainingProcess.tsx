"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { BookOpen, Target, FileCheck, Award, Crosshair } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Theory Training",
    description: "Comprehensive classroom instruction covering firearm laws, safety protocols, maintenance, and responsible ownership principles.",
  },
  {
    number: "02",
    icon: Target,
    title: "Practical Training",
    description: "Hands-on range training with live fire exercises, proper handling techniques, and marksmanship fundamentals.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Assessment",
    description: "Written and practical assessments to evaluate your understanding and competency with firearms.",
  },
  {
    number: "04",
    icon: Award,
    title: "Certification",
    description: "Upon successful completion, receive your SAPS & PFTC accredited firearm competency certificate.",
    useBullseye: true,
  },
];

export function TrainingProcess() {
  return (
    <section
      className="bg-navy-light px-4 py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(66,153,225,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(66,153,225,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent/20 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
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
          <h2 id="process-heading" className="sr-only">
            Training process
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <i className="fa-solid fa-gun text-accent text-4xl" aria-hidden></i>
            </div>
          </div>
          <SectionTitle className="mb-6">How It Works</SectionTitle>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our structured training program ensures you gain the knowledge and skills needed 
            for responsible firearm ownership.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <HexagonCard className="h-full flex flex-col glow-effect relative overflow-hidden group">
                  {/* Small decorative corner elements */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start justify-between mb-5">
                    <motion.div 
                      className="flex-shrink-0 p-3 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20 relative"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-accent/20 rounded-full blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                      {step.number === "04" ? (
                        <i className="fa-solid fa-bullseye text-accent text-2xl relative z-10" aria-hidden></i>
                      ) : (
                        <step.icon className="h-6 w-6 text-accent relative z-10" aria-hidden />
                      )}
                    </motion.div>
                    <motion.span 
                      className="text-4xl font-bold text-accent/15 relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                    >
                      {step.number}
                      {/* Small dot decoration */}
                      <motion.span
                        className="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed flex-1">
                    {step.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.6 }}
                  />
                  {i < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/30 to-accent-muted/30 transform -translate-y-1/2"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                    />
                  )}
                </HexagonCard>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
