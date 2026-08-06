"use client";

import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { GlowOrb } from "@/components/motion/GlowOrb";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#070a10] py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="tactical-grid absolute inset-0 opacity-15" aria-hidden />
      <GlowOrb className="right-[-140px] top-24" size="w-96 h-96" duration={16} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 id="contact-heading" className="sr-only">
          Get in touch with Steadfast Tactical
        </h2>
        <SectionHeading
          eyebrow="// 11 · Contact"
          title="Get In"
          highlight="Touch"
          description="Based in Lenasia (Turquoise Street), serving Johannesburg South, Johannesburg North, Sandton, Randburg, Soweto, Ennerdale, Ormonde, and wider Gauteng."
          className="mb-16"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map + info */}
          <Reveal direction="right" distance={36}>
            <div className="flex h-full flex-col gap-6">
              <div className="group relative min-h-[260px] flex-1 overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Turquoise+street%2C+Lenasia%2C+1821&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[260px] w-full grayscale-[35%] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
                  title="Steadfast Tactical location — Turquoise Street, Lenasia, 1821"
                />
                <div className="pointer-events-none absolute inset-0 border border-accent/20" aria-hidden />
                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden />
                  <span className="readout text-white">Lenasia · Johannesburg</span>
                </div>
              </div>
              <ContactInfo />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" distance={36}>
            <div className="tactical-card h-full p-7 md:p-9">
              <div className="mb-6">
                <p className="readout text-accent">{"// SEND A MESSAGE"}</p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">
                  Tell us about your training
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Fill in the form below and we&apos;ll get back to you within one business day.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
