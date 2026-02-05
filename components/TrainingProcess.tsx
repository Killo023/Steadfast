"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { BookOpen, Target, FileCheck, Award } from "lucide-react";
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
    description: "Upon successful completion, receive your SAPS-accredited firearm competency certificate.",
  },
];

export function TrainingProcess() {
  return (
    <section
      className="bg-navy-light px-4 py-16 md:py-20"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="process-heading" className="sr-only">
            Training process
          </h2>
          <SectionTitle className="mb-6">How It Works</SectionTitle>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
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
                <HexagonCard className="h-full flex flex-col glow-effect">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="flex-shrink-0 p-3 rounded-lg bg-accent/10 border border-accent/20"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="h-6 w-6 text-accent" aria-hidden />
                    </motion.div>
                    <motion.span 
                      className="text-4xl font-bold text-accent/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                    >
                      {step.number}
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed flex-1">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30 transform -translate-y-1/2"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 modern-card p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Training Duration</h3>
          <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
            Our comprehensive training program typically spans 2-3 days, depending on the 
            firearm categories selected. We offer flexible scheduling to accommodate your 
            needs, with both weekday and weekend options available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
