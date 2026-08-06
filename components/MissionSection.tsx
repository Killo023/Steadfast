"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crosshair } from "lucide-react";
import { GlowOrb } from "@/components/motion/GlowOrb";

export function MissionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
      aria-labelledby="mission-heading"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale: 1.2 }} aria-hidden>
        <div className="absolute inset-0 bg-[url('/images/Section2%20(6).jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="tactical-grid absolute inset-0 opacity-20" />
      </motion.div>
      <GlowOrb className="left-1/4 top-0" size="w-96 h-96" duration={12} />
      <GlowOrb className="right-1/4 bottom-0" size="w-80 h-80" color="rgba(129,140,248,0.12)" duration={16} delay={2} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center border border-accent/30 bg-black/50 backdrop-blur-sm"
        >
          <span className="ring-pulse absolute inset-0" aria-hidden />
          <Crosshair className="h-8 w-8 text-accent" aria-hidden />
        </motion.div>

        <h2 id="mission-heading" className="sr-only">
          Our mission
        </h2>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-4xl font-extrabold uppercase leading-[1.1] text-white sm:text-5xl md:text-6xl">
            Proper training builds{" "}
            <span className="text-gradient">responsible owners</span>. Safe hands. Confident
            citizens.
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          Our mission is to make high-quality, accredited firearm competency training accessible
          to every qualified individual — with transparent pricing, no hidden charges, and an
          uncompromising commitment to safety and legal compliance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-xs items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/60" aria-hidden />
          <span className="readout text-accent">Chosen by Many · Trusted by More</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/60" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
