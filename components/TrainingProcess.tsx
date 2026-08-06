"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, FileCheck, Award, Play } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { GlowOrb } from "@/components/motion/GlowOrb";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Theory Training",
    description:
      "Comprehensive classroom instruction covering firearm laws, safety protocols, maintenance, and responsible ownership principles.",
  },
  {
    number: "02",
    icon: Target,
    title: "Practical Training",
    description:
      "Hands-on range training with live-fire exercises, proper handling techniques, and marksmanship fundamentals.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Assessment",
    description:
      "Written and practical assessments to evaluate your understanding and competency with firearms.",
  },
  {
    number: "04",
    icon: Award,
    title: "Certification",
    description:
      "On successful completion, receive your SAPS & PFTC accredited firearm competency certificate.",
  },
];

export function TrainingProcess() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-[#070a10] py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="tactical-grid absolute inset-0 opacity-15" aria-hidden />
      <GlowOrb className="right-[-140px] top-1/3" size="w-80 h-80" color="rgba(14,165,233,0.14)" duration={13} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="process-heading" className="sr-only">
          How our firearm training process works
        </h2>
        <SectionHeading
          eyebrow="// 04 · How It Works"
          title="From Zero to"
          highlight="Competent"
          description="A structured, four-stage training program that ensures you gain the knowledge and skills needed for responsible firearm ownership."
          className="mb-16"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <motion.div
            className="absolute left-0 right-0 top-[52px] hidden h-px origin-left bg-gradient-to-r from-accent/60 via-accent/20 to-transparent lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="tactical-card flex h-full flex-col items-center p-6 pt-8 text-center">
                    {/* Number + icon node */}
                    <div className="relative mb-6 flex h-[104px] w-[104px] items-center justify-center">
                      <span className="absolute inset-0 rotate-45 border border-accent/20 transition-all duration-500 group-hover:rotate-[135deg] group-hover:border-accent/50" aria-hidden />
                      <span className="absolute inset-2 rotate-45 border border-accent/10 bg-accent/5" aria-hidden />
                      <motion.div
                        className="relative flex h-14 w-14 items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="ring-pulse absolute inset-0" aria-hidden />
                        <IconComponent className="h-6 w-6 text-accent" aria-hidden />
                      </motion.div>
                    </div>

                    <span className="readout text-accent/70">STEP {step.number}</span>
                    <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cinematic training footage strip */}
        <Reveal direction="up" delay={0.15} className="mt-20">
          <div className="group relative grid items-center gap-8 overflow-hidden border border-white/10 bg-gradient-to-r from-[#04121c] to-[#0a0a0f] p-6 md:grid-cols-[auto_1fr] md:p-10">
            <div className="scanlines absolute inset-0 opacity-20" aria-hidden />
            {/* Phone frame video */}
            <div className="relative mx-auto w-full max-w-[220px]">
              <div className="relative aspect-[9/16] overflow-hidden border border-accent/30 bg-black shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Real footage from a Steadfast Tactical competency training course"
                >
                  <source src="/video/WhatsApp%20Video%202026-06-12%20at%2009.16.40.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-black/50 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 text-accent" aria-hidden />
                  </span>
                </div>
              </div>
              <div className="absolute -inset-1 -z-10 bg-gradient-to-br from-accent/30 to-transparent blur-md" aria-hidden />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <p className="readout mb-3 text-accent">{"// REAL TRAINING FOOTAGE"}</p>
              <h3 className="font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
                See the range before <span className="text-gradient">you step on it</span>
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-slate-300 md:mx-0">
                Real sessions from our competency courses in Lenasia. Watch how our
                instructors run theory, coach live-fire drills, and walk students through
                every stage of certification.
              </p>
              <a href="#contact" className="btn-ghost mt-7 text-sm">
                Book Your Spot
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
