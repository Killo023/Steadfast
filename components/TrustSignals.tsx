"use client";

import { motion } from "framer-motion";
import { Award, Stamp, Star } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

export function TrustSignals() {
  return (
    <section
      className="bg-navy-light px-4 py-16 md:py-20"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="trust-heading" className="sr-only">
          Why choose us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            className="modern-card flex flex-col items-center text-center gap-3 px-6 py-6 glow-effect"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex-shrink-0 p-3 rounded-xl bg-accent/10 border border-accent/20">
              <Award className="h-8 w-8 text-accent" aria-hidden />
            </div>
            <span className="font-semibold text-white text-base">
              Accredited Training Provider
            </span>
          </motion.div>

          <motion.div
            className="modern-card flex flex-col items-center text-center gap-3 px-6 py-6 border-red-500/30 bg-gradient-to-br from-red-950/40 to-red-950/20 glow-effect"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10 border border-red-500/30">
              <Stamp className="h-8 w-8 text-red-400" aria-hidden />
            </div>
            <span className="font-semibold text-red-100 text-base">No Hidden Charges</span>
          </motion.div>

          <motion.div
            className="modern-card flex flex-col items-center text-center gap-3 px-6 py-6 glow-effect"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-7 w-7 fill-accent text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  aria-hidden
                />
              ))}
            </div>
            <span className="text-white font-semibold text-base">Rated 5 stars</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-center lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative w-full lg:w-[55%] aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-2xl border-2 border-accent/40 shadow-2xl shadow-accent/20 group glow-effect"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={images.target}
              alt="Professional firearm training at Steadfast Tactical"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/20"></div>
          </motion.div>
          <motion.div
            className="w-full lg:w-[40%] flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold italic text-white lg:text-left leading-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              <span className="block">Chosen by Many.</span>
              <span className="block text-accent mt-2">Trusted by More.</span>
            </p>
            <p className="text-center text-white/80 text-base md:text-lg lg:text-left mt-4 leading-relaxed">
              Join hundreds of satisfied clients who have chosen Steadfast Tactical for their firearm competency training needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
