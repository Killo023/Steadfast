"use client";

import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { ArrowRight, ChevronDown, BadgeCheck, Target } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";
import { ParticleField } from "@/components/motion/ParticleField";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Counter } from "@/components/motion/Counter";
import { TiltCard } from "@/components/motion/TiltCard";

const INSTRUCTION_VIDEO = "/video/WhatsApp%20Video%202026-06-12%20at%2009.16.40.mp4";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const wordReveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 55, damping: 18 });
  const smy = useSpring(my, { stiffness: 55, damping: 18 });
  const cardX = useTransform(smx, [-0.5, 0.5], [-16, 16]);
  const cardY = useTransform(smy, [-0.5, 0.5], [-12, 12]);
  const reticleX = useTransform(smx, [-0.5, 0.5], [30, -30]);
  const reticleY = useTransform(smy, [-0.5, 0.5], [20, -20]);

  function handleMouseMove(e: ReactMouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black"
      aria-label="Steadfast Tactical - SAPS and PFTC accredited firearm competency training"
    >
      {/* ------- Background image + parallax ------- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.heroPoster}
          alt=""
          className="h-full w-full object-cover opacity-70"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </motion.div>

      {/* ------- Overlays ------- */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/40 to-black" aria-hidden />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-transparent to-black/40" aria-hidden />
      <div className="tactical-grid absolute inset-0 z-[1] opacity-40" aria-hidden />
      <div className="scanlines absolute inset-0 z-[1] opacity-30" aria-hidden />
      <div className="scan-sweep z-[1]" aria-hidden />
      <ParticleField className="z-[1] opacity-70" density={11000} maxParticles={60} />

      {/* Rotating crosshair reticle (mouse parallax) */}
      <motion.div
        className="pointer-events-none absolute -right-40 top-1/2 z-[1] hidden h-[560px] w-[560px] -translate-y-1/2 lg:block"
        style={{ x: reticleX, y: reticleY }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-accent/20" />
        <div className="absolute inset-10 rounded-full border border-accent/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      </motion.div>

      {/* ------- Content ------- */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-40 md:px-8 md:pt-48"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* ------- Left column ------- */}
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="readout text-accent">SAPS &amp; PFTC Accredited</span>
              </span>
              <span className="readout hidden text-slate-400 sm:inline">EST. 2019 · LENASIA, GAUTENG</span>
            </motion.div>

            {/* H1 */}
            <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[6.5rem]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={wordReveal} className="block text-white">
                  Steadfast
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span variants={wordReveal} className="block text-gradient drop-shadow-[0_0_35px_rgba(56,189,248,0.45)]">
                  Tactical
                </motion.span>
              </span>
            </h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl font-display text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">
              Competency starts with proper training.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Professional firearm competency training for civilians. Learn safe
              handling, clear fundamentals, and practical skills — step by step,
              no experience required.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="btn-primary group text-sm"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </button>
              </MagneticButton>
              <MagneticButton>
                <button
                  type="button"
                  onClick={() => scrollTo("pricing")}
                  className="btn-ghost text-sm"
                >
                  <Target className="h-4 w-4" aria-hidden />
                  View Courses &amp; Pricing
                </button>
              </MagneticButton>
            </motion.div>

            {/* Trust row */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <BadgeCheck className="h-5 w-5 text-amber-400" aria-hidden />
                SAPS Recognised
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <BadgeCheck className="h-5 w-5 text-amber-400" aria-hidden />
                PFTC Registered Provider
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <BadgeCheck className="h-5 w-5 text-amber-400" aria-hidden />
                No Hidden Charges
              </span>
            </motion.div>

            {/* ------- Hero stats strip ------- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm"
            >
              <Stat label="Firearm Categories" value={4} suffix="" />
              <Stat label="Course Duration" value={2} suffix="–3 Days" />
              <Stat label="Client Rating" value={5} suffix=".0 ★" />
            </motion.div>
          </motion.div>

          {/* ------- Right column: instruction video card ------- */}
          <motion.div
            className="relative hidden lg:block"
            style={{ x: cardX, y: cardY }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          >
            {/* Ambient glow */}
            <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.22),transparent_65%)] blur-2xl" />

            <TiltCard maxTilt={9} className="group">
              <div className="hud-corners relative aspect-[4/3] w-full overflow-hidden border border-accent/30 bg-black shadow-[0_40px_100px_-30px_rgba(0,0,0,0.95)]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={images.heroPoster}
                >
                  <source src={INSTRUCTION_VIDEO} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/30" aria-hidden />

                {/* REC indicator */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  </span>
                  <span className="readout text-[0.6rem] text-white/90">REC · INSTRUCTION</span>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="readout text-[0.6rem] text-accent">{"// TRAINING OVERVIEW"}</p>
                  <p className="mt-1 font-display text-xl font-extrabold uppercase leading-tight text-white">
                    See how your firearm training works
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-6 -top-5 flex items-center gap-2 border border-amber-400/40 bg-[#0b0f14]/90 px-3 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 16 }}
            >
              <BadgeCheck className="h-4 w-4 text-amber-400" />
              <span className="readout text-[0.55rem] text-amber-200">PFTC Registered Provider</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 border border-accent/40 bg-[#0b0f14]/90 px-3 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.35, type: "spring", stiffness: 200, damping: 16 }}
            >
              <p className="readout text-[0.55rem] text-accent">CLIENT RATING</p>
              <p className="font-display text-sm font-bold text-white">
                5.0 <span className="text-amber-400">★</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ------- Side vertical readout ------- */}
      <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 xl:block" aria-hidden>
        <p className="readout whitespace-nowrap text-slate-500">
          {"// LENASIA · JOHANNESBURG SOUTH & NORTH · GAUTENG"}
        </p>
      </div>

      {/* ------- Scroll indicator ------- */}
      <motion.button
        type="button"
        onClick={() => scrollTo("stats")}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-label="Scroll down"
      >
        <span className="readout text-[0.6rem]">SCROLL</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="h-5 w-5" aria-hidden />
        </motion.span>
      </motion.button>
    </section>
  );
}

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="group bg-black/70 px-4 py-5 text-center transition-colors duration-300 hover:bg-black/90">
      <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
        <Counter value={value} suffix={suffix} duration={1.8} />
      </div>
      <p className="readout mt-1 text-[0.6rem] text-slate-400">{label}</p>
    </div>
  );
}
