"use client";

import { motion } from "framer-motion";
import { Target, Users, Shield, MessageCircle, ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { images, fallbackImage } from "@/lib/images";

const WHATSAPP_NUMBER = "27607696710";
const WHATSAPP_MESSAGE =
  "Hi, I'm interested in this training course at Steadfast Tactical. Could you please provide more information?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const featuredCourses = [
  {
    title: "Personal Purpose",
    tagline: "Firearm Competency Training",
    description:
      "Comprehensive firearm competency training for personal use. Covers all firearm categories with SAPS & PFTC accredited certification. Ideal for self-defence, sport shooting, or hunting.",
    icon: Target,
    duration: "2–3 Days",
    video: "/video/WhatsApp%20Video%202026-06-12%20at%2009.14.12.mp4",
    image: images.handgun,
  },
  {
    title: "Business Purpose",
    tagline: "Corporate & Security Training",
    description:
      "Professional firearm competency training for security companies, private investigators and businesses requiring armed personnel. Group training and corporate packages available.",
    icon: Users,
    duration: "Custom",
    image: images.regulation,
  },
  {
    title: "Firearm Motivation",
    tagline: "License Application Guidance",
    description:
      "Expert guidance and training for completing your firearm motivation letter. Professional assistance for personal and business license applications — perfect for first-time applicants.",
    icon: Shield,
    duration: "1 Session",
    image: images.section7,
  },
];

export function FeaturedCourses() {
  return (
    <section
      id="courses"
      className="relative scroll-mt-20 overflow-hidden bg-[#050505] py-24 md:py-32"
      aria-labelledby="featured-heading"
    >
      <div className="scanlines absolute inset-0 opacity-20" aria-hidden />
      <div className="hazard-stripes absolute inset-x-0 top-0 h-2 opacity-40" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="featured-heading" className="sr-only">
          Featured firearm training courses
        </h2>
        <SectionHeading
          eyebrow="// 03 · Programs"
          title="Featured Training"
          highlight="Programs"
          description="Three proven pathways to competency — each fully accredited, practical, and built around your goal."
          className="mb-16"
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, i) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <TiltCard maxTilt={7} className="h-full">
                  <div className="tactical-card flex h-full flex-col overflow-hidden !rounded-none">
                    {/* Media */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {course.video ? (
                        <video
                          className="absolute inset-0 h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-label={`${course.title} firearm training preview video`}
                        >
                          <source src={course.video} type="video/mp4" />
                        </video>
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={course.image}
                          alt={`${course.title} firearm competency training`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = fallbackImage;
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent" aria-hidden />

                      {/* Icon chip */}
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center border border-accent/30 bg-black/60 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <IconComponent className="h-5 w-5 text-accent" aria-hidden />
                      </div>
                      {/* Duration */}
                      <div className="absolute right-4 top-4 flex items-center gap-1.5 border border-white/15 bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                        <Clock className="h-3 w-3 text-amber-400" aria-hidden />
                        <span className="readout text-[0.6rem] text-slate-200">{course.duration}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="readout mb-2 text-accent">{course.tagline}</p>
                      <h3 className="font-display text-2xl font-bold uppercase text-white">
                        {course.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                        {course.description}
                      </p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-between border-t border-white/5 pt-5 text-sm font-semibold text-white transition-colors hover:text-accent"
                      >
                        <span className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-accent" aria-hidden />
                          Enquire Now
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <Reveal direction="fade" delay={0.3} className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Not sure which program fits?{" "}
            <a href="#contact" className="text-accent underline-offset-4 hover:underline">
              Talk to us — we&apos;ll map your path to competency
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
