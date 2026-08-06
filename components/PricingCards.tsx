"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, User, Briefcase, MessageCircle, Zap, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { GlowOrb } from "@/components/motion/GlowOrb";

const WHATSAPP_NUMBER = "27607696710";
const WHATSAPP_MESSAGE =
  "Hi, I'm interested in your firearm training courses. Could you please provide more information about pricing and availability?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const personalCourses = [
  {
    title: "Handgun",
    price: "R1 200",
    note: "+ Legal Fees",
    categories: 1,
    popular: false,
  },
  {
    title: "Handgun & Shotgun",
    price: "R1 700",
    note: "+ Legal Fees",
    categories: 2,
    popular: false,
  },
  {
    title: "Handgun, Shotgun & SL Rifle",
    price: "R2 100",
    note: "+ Legal Fees",
    categories: 3,
    popular: false,
  },
  {
    title: "Complete Package — All Firearms",
    price: "R2 700",
    note: "+ Legal Fees",
    categories: 4,
    popular: true,
  },
];

const businessCourses = [
  { title: "Shotgun", price: "R1 500", note: "Business Purpose", categories: 1, popular: false },
  { title: "Self Loading Rifle", price: "R1 600", note: "Business Purpose", categories: 1, popular: false },
  { title: "Handgun", price: "R1 800", note: "Business Purpose", categories: 1, popular: true },
];

const includes = [
  "Comprehensive Training",
  "All Assessment Materials",
  "Range Fees Included",
  "Qualification Shoot Ammunition",
  "Training Firearms Provided",
  "SAPS & PFTC Accredited Certificate",
];

export function PricingCards() {
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoFailed(true));
    }
  }, []);

  const courses = activeTab === "personal" ? personalCourses : businessCourses;

  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 overflow-hidden bg-[#050505] py-24 md:py-32"
      aria-labelledby="pricing-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {!videoFailed && (
          <video
            ref={videoRef}
            className="h-full w-full object-cover opacity-20"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
          >
            <source src="/video/6456650_Shooting Range Aim Marksmanship Firearm_By_Pressmaster_Artlist_HD.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="tactical-grid absolute inset-0 opacity-25" />
      </div>
      <GlowOrb className="left-[-120px] top-20" size="w-80 h-80" />
      <GlowOrb className="right-[-120px] bottom-20" size="w-96 h-96" color="rgba(129,140,248,0.12)" duration={14} delay={2} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="pricing-heading" className="sr-only">
          Firearm training course pricing in Johannesburg
        </h2>
        <SectionHeading
          eyebrow="// 01 · Courses & Pricing"
          title="Transparent."
          highlight="Zero Hidden Charges."
          description="SAPS & PFTC accredited firearm competency training to suit personal and business requirements. Prices include range fees, ammunition and certification."
          className="mb-14"
        />

        {/* Tabs */}
        <Reveal direction="fade" delay={0.1} className="mb-12 flex justify-center">
          <div className="relative inline-flex gap-1 border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md">
            {(["personal", "business"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 flex items-center gap-2 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-300 md:px-8 ${
                  activeTab === tab ? "text-[#03151f]" : "text-slate-400 hover:text-white"
                }`}
                aria-pressed={activeTab === tab}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="pricing-tab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                {tab === "personal" ? <User className="h-4 w-4" aria-hidden /> : <Briefcase className="h-4 w-4" aria-hidden />}
                <span className="relative">{tab === "personal" ? "Personal Purpose" : "Business Purpose"}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Course cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <TiltCard maxTilt={6} className="h-full">
                  <div className={`tactical-card relative flex h-full flex-col p-6 ${course.popular ? "border-accent/40" : ""}`}>
                    {course.popular && (
                      <div className="absolute right-0 top-6 z-10 flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-400 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-black shadow-lg shadow-amber-500/30">
                        <Zap className="h-3 w-3" aria-hidden />
                        Most Popular
                      </div>
                    )}

                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-accent/25 bg-accent/10">
                        <ShieldCheck className="h-5 w-5 text-accent" aria-hidden />
                      </div>
                      <span className="readout text-slate-400">
                        {course.categories} {course.categories === 1 ? "Category" : "Categories"}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase leading-tight text-white">
                      {course.title}
                    </h3>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="font-display text-5xl font-extrabold text-gradient">{course.price}</span>
                    </div>
                    <p className="readout mt-1 text-slate-500">{course.note}</p>

                    <div className="mt-6 space-y-2 border-t border-white/5 pt-6">
                      {[
                        "Accredited certification",
                        "Range fees included",
                        "Firearms provided",
                      ].map((item) => (
                        <p key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className="h-4 w-4 text-accent" aria-hidden />
                          {item}
                        </p>
                      ))}
                    </div>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto pt-6 ${course.popular ? "btn-primary text-sm" : "btn-ghost text-sm"}`}
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      Enquiry
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal direction="fade" delay={0.2}>
          <p className="mt-6 text-center text-sm text-slate-400">
            {activeTab === "personal"
              ? "Any combination can be arranged — custom packages on request."
              : "For combination packages, please enquire via WhatsApp or email."}
          </p>
        </Reveal>

        {/* Includes strip */}
        <Reveal direction="up" delay={0.1} className="mt-16">
          <div className="tactical-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                Every course includes
              </h3>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-accent/30 bg-accent/10">
                    <Check className="h-4 w-4 text-accent" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
