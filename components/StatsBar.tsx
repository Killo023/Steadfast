"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: 4, suffix: "+", label: "Firearm Categories", sub: "Handgun · Shotgun · Rifle" },
  { value: 500, suffix: "+", label: "Students Trained", sub: "Civilians & professionals" },
  { value: 2, suffix: "–3", label: "Days To Certify", sub: "Theory + practical range" },
  { value: 100, suffix: "%", label: "Transparent Pricing", sub: "No hidden charges" },
];

export function StatsBar() {
  return (
    <section
      id="stats"
      className="relative z-20 border-y border-accent/10 bg-[#050505]"
      aria-label="Key statistics"
    >
      <div className="scanlines pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-white/[0.04] lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="group relative bg-[#050505] px-6 py-10 transition-colors duration-500 hover:bg-[#070b11]">
            <Reveal direction="up" delay={i * 0.08} distance={24}>
              <div className="flex flex-col items-center text-center">
                <div className="font-display text-5xl font-extrabold text-white md:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="readout mt-3 text-accent">{stat.label}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.sub}</p>
              </div>
            </Reveal>
            <motion.div
              className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
              whileHover={{ width: "60%" }}
              transition={{ duration: 0.4 }}
              aria-hidden
            />
          </div>
        ))}
      </div>
    </section>
  );
}
