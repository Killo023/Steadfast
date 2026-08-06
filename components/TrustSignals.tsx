"use client";

import { motion } from "framer-motion";
import { Award, Stamp, Star, CheckCircle2, Quote } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { GlowOrb } from "@/components/motion/GlowOrb";
import { images, fallbackImage } from "@/lib/images";

const STARFIELD_DOTS = [
  { left: 13, top: 20, duration: 3.2, delay: 0 },
  { left: 78, top: 54, duration: 3.8, delay: 0.4 },
  { left: 18, top: 28, duration: 2.5, delay: 1.1 },
  { left: 99, top: 61, duration: 3.5, delay: 0.2 },
  { left: 12, top: 86, duration: 2.8, delay: 1.6 },
  { left: 9, top: 31, duration: 3.1, delay: 0.8 },
  { left: 20, top: 26, duration: 2.2, delay: 1.3 },
  { left: 27, top: 30, duration: 3.9, delay: 0.5 },
  { left: 83, top: 59, duration: 2.6, delay: 1.0 },
  { left: 93, top: 4, duration: 3.4, delay: 0.7 },
  { left: 52, top: 62, duration: 2.9, delay: 1.4 },
  { left: 39, top: 53, duration: 3.6, delay: 0.3 },
];

export function TrustSignals() {
  return (
    <section
      id="trust"
      className="relative scroll-mt-20 overflow-hidden bg-[#050505] py-24 md:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="scanlines absolute inset-0 opacity-20" aria-hidden />
      <GlowOrb className="left-1/3 top-0" size="w-96 h-96" duration={18} />
      <GlowOrb className="right-1/4 bottom-0" size="w-80 h-80" color="rgba(251,191,36,0.06)" duration={20} delay={3} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="trust-heading" className="sr-only">
          Why choose Steadfast Tactical
        </h2>
        <SectionHeading
          eyebrow="// 09 · Why Us"
          title="Built on"
          highlight="Trust"
          description="Accreditation, transparency, and results — the three pillars behind every course we run."
          className="mb-16"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1: Accredited */}
          <Reveal direction="up" delay={0.05}>
            <TiltCard maxTilt={8} className="h-full">
              <div className="tactical-card group relative h-full min-h-[300px] overflow-hidden p-8">
                <div className="hazard-stripes absolute inset-0 opacity-20" aria-hidden />
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rotate-45 bg-accent/10 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4" aria-hidden />
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.12, rotate: 6 }}>
                    <span className="ring-pulse absolute inset-0" aria-hidden />
                    <div className="relative flex h-16 w-16 items-center justify-center border border-accent/30 bg-accent/10">
                      <Award className="h-8 w-8 text-accent" aria-hidden />
                    </div>
                  </motion.div>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    Accredited Provider
                  </h3>
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                    <span className="authenticity-badge">
                      <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
                      SAPS
                    </span>
                    <span className="authenticity-badge">
                      <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
                      PFTC
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Card 2: No hidden charges */}
          <Reveal direction="up" delay={0.15}>
            <TiltCard maxTilt={8} className="h-full">
              <div className="tactical-card group relative h-full min-h-[300px] overflow-hidden p-8">
                <div className="hazard-stripes-amber absolute inset-0 opacity-25" aria-hidden />
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.12, rotate: -6 }}>
                    <span className="ring-pulse absolute inset-0 !border-amber-400/50" aria-hidden />
                    <div className="relative flex h-16 w-16 items-center justify-center border border-amber-400/30 bg-amber-400/10">
                      <Stamp className="h-8 w-8 text-amber-400" aria-hidden />
                    </div>
                  </motion.div>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    No Hidden Charges
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">100% transparent pricing — what you see is what you pay.</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Card 3: Rated 5 stars */}
          <Reveal direction="up" delay={0.25}>
            <TiltCard maxTilt={8} className="h-full">
              <div className="tactical-card group relative h-full min-h-[300px] overflow-hidden p-8">
                <div className="absolute inset-0 opacity-25" aria-hidden>
                  {STARFIELD_DOTS.map((dot, i) => (
                    <motion.span
                      key={i}
                      className="absolute h-1 w-1 rounded-full bg-accent"
                      style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
                      animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.6, 1] }}
                      transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay }}
                    />
                  ))}
                </div>
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, type: "spring" }}
                        whileHover={{ scale: 1.25, rotate: 12 }}
                      >
                        <Star className="h-8 w-8 fill-accent text-accent drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" aria-hidden />
                      </motion.span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    Rated 5 Stars
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">Trusted by clients across Johannesburg &amp; Gauteng.</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>

        {/* Statement band */}
        <Reveal direction="up" className="mt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="group relative order-2 lg:order-1">
              <div className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-accent/40" aria-hidden />
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.target}
                  alt="Professional firearm competency training at the Steadfast Tactical range in Lenasia"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
                <div className="scanlines absolute inset-0 opacity-25" aria-hidden />
              </div>
              <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-accent/40" aria-hidden />
            </div>

            <div className="order-1 lg:order-2">
              <Quote className="mb-6 h-10 w-10 text-accent/40" aria-hidden />
              <p className="font-display text-3xl font-extrabold uppercase leading-[1.1] text-white md:text-5xl">
                Chosen by Many.
                <span className="mt-3 block text-gradient">Trusted by More.</span>
              </p>
              <p className="mt-6 max-w-xl text-slate-300">
                Join hundreds of satisfied clients who have chosen Steadfast Tactical for their
                firearm competency training needs — with SAPS &amp; PFTC accreditation, transparent
                pricing, and instruction led by a certified range officer.
              </p>
              <a href="#contact" className="btn-ghost mt-8 text-sm">
                Start Training Today
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
