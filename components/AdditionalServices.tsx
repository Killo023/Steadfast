"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Building2, ArrowUpRight, GraduationCap, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { TiltCard } from "@/components/motion/TiltCard";
import { GlowOrb } from "@/components/motion/GlowOrb";
import { images, fallbackImage } from "@/lib/images";

const services = [
  {
    title: "Firearm Motivation Training",
    description:
      "Expert guidance and comprehensive training for completing your firearm motivation letter. Available for personal and business license applications, covering responsible ownership, safety protocols, and legal requirements. Perfect for first-time applicants and renewals.",
    icon: Shield,
    image: images.training,
    bullets: ["Personal & business applications", "Legal requirements covered", "First-time applicant friendly"],
  },
  {
    title: "Business & Corporate Training",
    description:
      "Specialised programs for businesses, security companies, and organisations — including Regulation 21 compliance training, group options, corporate packages, and tailored programs built around your security training requirements.",
    icon: Building2,
    image: images.security,
    bullets: ["Regulation 21 compliance", "Group & corporate packages", "Tailored to your organisation"],
  },
];

export function AdditionalServices() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-[#050505] py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="hazard-stripes absolute inset-x-0 top-0 h-2 opacity-40" aria-hidden />
      <GlowOrb className="left-[-140px] top-1/3" size="w-80 h-80" color="rgba(129,140,248,0.1)" duration={15} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="services-heading" className="sr-only">
          Additional services
        </h2>
        <SectionHeading
          eyebrow="// 07 · More Ways We Help"
          title="Additional"
          highlight="Services"
          description="Beyond core competency courses, we support applicants and organisations at every stage of the journey."
          className="mb-16"
        />

        <div className="grid gap-7 lg:grid-cols-2">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full"
              >
                <TiltCard maxTilt={5} className="h-full">
                  <div className="tactical-card flex h-full flex-col overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={`${service.title} at Steadfast Tactical`}
                        className="h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ y: imgY }}
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent" aria-hidden />
                      <div className="scanlines absolute inset-0 opacity-25" aria-hidden />
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center border border-accent/30 bg-black/60 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-12">
                        <IconComponent className="h-6 w-6 text-accent" aria-hidden />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-2xl font-bold uppercase text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2 border-t border-white/5 pt-5">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-sm text-slate-300">
                            <BadgeCheck className="h-4 w-4 text-accent" aria-hidden />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-accent"
                      >
                        Enquire about this service
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group lg:col-span-2"
          >
            <div className="tactical-card relative overflow-hidden p-10 text-center md:p-14">
              <div className="scanlines absolute inset-0 opacity-20" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_65%)]" aria-hidden />
              <div className="relative z-10">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-accent/30 bg-accent/10">
                  <GraduationCap className="h-7 w-7 text-accent" aria-hidden />
                </div>
                <h3 className="font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
                  Not sure where to <span className="text-gradient">start?</span>
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  Whether you need competency, a motivation, Regulation 21 refresher, or a corporate
                  program — send us a message and we&apos;ll map the fastest, most cost-effective path to
                  certification.
                </p>
                <a href="#contact" className="btn-primary mt-8 text-sm">
                  Start the conversation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
