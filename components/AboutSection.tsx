"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Shield, ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { GlowOrb } from "@/components/motion/GlowOrb";
import { Counter } from "@/components/motion/Counter";
import { images, fallbackImage } from "@/lib/images";

const features = [
  {
    icon: Award,
    title: "Nationally Accredited",
    description:
      "Fully accredited training provider recognised by the South African Police Service and the Professional Firearm Trainers Council.",
  },
  {
    icon: Users,
    title: "Experienced Instructors",
    description:
      "Learn from certified professionals including our range-officer owner with years of real-world experience.",
  },
  {
    icon: Target,
    title: "Comprehensive Curriculum",
    description:
      "Complete syllabus covering theory, the Firearms Control Act 2000, safety protocols, and live-fire practice.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Relentless emphasis on safe handling, responsible ownership, and full legal compliance.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#070a10] py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="tactical-grid absolute inset-0 opacity-20" aria-hidden />
      <GlowOrb className="left-1/2 top-0 -translate-x-1/2" size="w-[500px] h-[300px]" duration={12} />
      <div className="scan-sweep z-10" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Visual side */}
          <Reveal direction="right" distance={40} className="relative">
            <div className="group relative">
              {/* Decorative frame */}
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-accent/40" aria-hidden />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-accent/40" aria-hidden />

              <div className="relative aspect-[4/5] overflow-hidden border border-accent/20 md:aspect-[4/4]">
                <motion.img
                  src={images.rifle}
                  alt="Range officer providing professional firearm competency training at the Steadfast Tactical range in Lenasia"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" aria-hidden />
                <div className="scanlines absolute inset-0 opacity-30" aria-hidden />

                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/70 p-5 backdrop-blur-md"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-4xl font-extrabold text-white">
                        <Counter value={7} suffix="+" duration={1.5} />
                      </p>
                      <p className="readout text-slate-400">Years of safe, accredited instruction</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="h-4 w-4 text-accent" aria-hidden />
                      <span className="readout">Lenasia, JHB</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <div>
            <h2 id="about-heading" className="sr-only">
              About Steadfast Tactical
            </h2>
            <SectionHeading
              align="left"
              eyebrow="// 02 · Who We Are"
              title="About"
              highlight="Steadfast Tactical"
              description="A leading firearm competency training provider in Johannesburg, Gauteng — based in Lenasia."
              className="mb-8"
            />
            <Reveal direction="fade" delay={0.2}>
              <div className="space-y-5 text-slate-300">
                <p>
                  Steadfast Tactical is a leading firearm competency training provider in
                  Johannesburg, Gauteng, based in Lenasia. Our business owner is a certified
                  range officer with extensive experience in firearm safety and training.
                </p>
                <p>
                  We are committed to professional, comprehensive training for both personal and
                  business purposes — equipping individuals and organisations across Johannesburg
                  and the wider Gauteng region with the knowledge and skills necessary for
                  responsible firearm ownership and operation.
                </p>
              </div>
            </Reveal>
            <Reveal direction="fade" delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="authenticity-badge">
                  <Award className="authenticity-badge-icon" aria-hidden />
                  SAPS &amp; PFTC Accredited
                </span>
                <span className="authenticity-badge">
                  <Shield className="authenticity-badge-icon" aria-hidden />
                  Certified Range Officer
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <TiltCard maxTilt={10} className="h-full">
                  <div className="tactical-card hud-corners h-full p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="relative flex h-12 w-12 items-center justify-center border border-accent/25 bg-gradient-to-br from-accent/15 to-transparent">
                        <span className="ring-pulse absolute inset-0" aria-hidden />
                        <IconComponent className="h-6 w-6 text-accent" aria-hidden />
                      </div>
                      <span className="font-display text-3xl font-extrabold text-white/10">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {feature.description}
                    </p>
                    <ArrowRight className="mt-4 h-4 w-4 text-accent/0 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1" aria-hidden />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
