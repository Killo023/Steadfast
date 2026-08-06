"use client";

import { Star, PlayCircle } from "lucide-react";
import { Marquee } from "@/components/motion/Marquee";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const rangeVideos = [
  {
    src: "/video/WhatsApp%20Video%202026-07-14%20at%2021.55.28.mp4",
    caption: "Hands-on range session",
    tag: "LIVE-FIRE",
  },
  {
    src: "/video/WhatsApp%20Video%202026-07-14%20at%2021.55.29%20(1).mp4",
    caption: "Safe handling & fundamentals",
    tag: "INSTRUCTION",
  },
  {
    src: "/video/WhatsApp%20Video%202026-07-14%20at%2021.59.56.mp4",
    caption: "Qualification practice",
    tag: "ASSESSMENT",
  },
];

const testimonials = [
  {
    name: "Michael Pillay",
    meta: "Verified Google review · 21 weeks ago",
    text: "Brilliant and practical. I will be returning again and again. Great instructor..better human being.",
  },
  {
    name: "anusha pachai",
    meta: "Verified Google review · 23 weeks ago",
    text: "Very professional, honest and competent instructor. Relieved to be assisted by someone that knew exactly what he was doing. An excellent teacher. Would recommend Lushan any day.",
  },
  {
    name: "Praveshan Govender",
    meta: "Local Guide · Verified Google review · 23 weeks ago",
    text: "Professional, prompt and extremely knowledgeable.",
  },
  {
    name: "Ahmad",
    meta: "Verified Google review · 23 weeks ago",
    text: "Have been training since last year, and I have improved a lot since I started.",
  },
  {
    name: "Shaheed Symallin",
    meta: "Verified Google review · 23 weeks ago",
    text: "Very professional and helpful. Great at teaching and makes learning a new skill a breeze. Training and range days are awesome.",
  },
  {
    name: "Sherwin Poonan",
    meta: "Verified Google review · 23 weeks ago",
    text: "Excellent training. You are taken through everything step by step and it makes sure you understand everything from the law...",
  },
  {
    name: "Fazil Chothia",
    meta: "Verified Google review · 23 weeks ago",
    text: "Excellent training! I completed my firearm competency...",
  },
  {
    name: "luwaine dixon",
    meta: "Verified Google review · 23 weeks ago",
    text: "I had a great experience at Steadfast Tactical. The instructor was professional, patient, and highly knowledgeable, with...",
  },
  {
    name: "Ashton Jackson",
    meta: "Verified Google review · 23 weeks ago",
    text: "Huge shoutout to Lushen at Steadfast Tactical! I went in feeling overwhelmed and unsure of what to do, but he made the...",
  },
  {
    name: "Vishay Bhula",
    meta: "Verified Google review · 23 weeks ago",
    text: "Great service. Very helpful.",
  },
  {
    name: "Jeandre",
    meta: "Verified Google review · 23 weeks ago",
    text: "Very professional.",
  },
];

function RangeVideoCard({ video }: { video: (typeof rangeVideos)[number] }) {
  return (
    <div className="tactical-card group relative overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={video.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" aria-hidden />

        {/* REC indicator */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="readout text-[0.55rem] text-white/90">{video.tag}</span>
        </div>

        {/* Caption */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-display text-base font-bold uppercase leading-tight text-white md:text-lg">
            {video.caption}
          </p>
          <p className="readout text-[0.55rem] text-accent">STEADFAST TACTICAL · LENASIA</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <figure className="tactical-card mx-3 flex w-[300px] flex-col p-6 sm:w-[360px]">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
          ))}
        </div>
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white font-sans text-[13px] font-bold text-[#4285F4]"
          aria-hidden
        >
          G
        </span>
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold uppercase text-white">{testimonial.name}</p>
          <p className="readout truncate text-slate-500">{testimonial.meta}</p>
        </div>
        <Star className="h-4 w-4 flex-shrink-0 fill-amber-400 text-amber-400" aria-hidden />
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const rowA = testimonials;
  const rowB = [...testimonials].reverse();

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 overflow-hidden bg-[#070a10] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="tactical-grid absolute inset-0 opacity-15" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06),transparent_60%)]" aria-hidden />

      <div className="relative z-10">
        <h2 id="testimonials-heading" className="sr-only">
          What our clients say
        </h2>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="// 08 · Social Proof"
            title="Trusted by"
            highlight="Students"
            description="Real, verified Google reviews from clients who trained with us in Johannesburg and Gauteng."
            className="mb-14"
          />
        </div>

        <div className="relative space-y-6">
          <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070a10] to-transparent sm:w-32" aria-hidden />
          <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070a10] to-transparent sm:w-32" aria-hidden />

          <div className="-rotate-1">
            <Marquee speed="46s">
              {rowA.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </Marquee>
          </div>
          <div className="rotate-1">
            <Marquee speed="52s" reverse>
              {rowB.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* ------- Real range footage ------- */}
        <Reveal direction="up" className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="readout flex items-center gap-2 text-accent">
                <PlayCircle className="h-4 w-4" aria-hidden />
                {"// RANGE FOOTAGE"}
              </p>
              <h3 className="mt-2 font-display text-3xl font-extrabold uppercase text-white md:text-4xl">
                Real moments from <span className="text-gradient">our range</span>
              </h3>
            </div>
            <p className="max-w-sm text-sm text-slate-400">
              Unscripted sessions from our competency courses in Lenasia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rangeVideos.map((v) => (
              <RangeVideoCard key={v.src} video={v} />
            ))}
          </div>
        </Reveal>

        <Reveal direction="fade" className="mx-auto mt-14 max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <div>
              <p className="font-display text-4xl font-extrabold text-white">5.0</p>
              <p className="flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </p>
            </div>
            <div className="h-10 w-px bg-white/10" aria-hidden />
            <div>
              <p className="font-display text-4xl font-extrabold text-white">500+</p>
              <p className="readout text-slate-400">Students Certified</p>
            </div>
            <div className="h-10 w-px bg-white/10" aria-hidden />
            <div>
              <p className="font-display text-4xl font-extrabold text-white">100%</p>
              <p className="readout text-slate-400">Transparent Pricing</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
