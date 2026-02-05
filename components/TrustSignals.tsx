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

        <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-6">
          <motion.div
            className="modern-card flex items-center gap-4 px-6 py-5 min-w-[280px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Award className="h-6 w-6 text-accent" aria-hidden />
            </div>
            <span className="font-semibold text-white text-sm">
              Accredited Training Provider
            </span>
          </motion.div>

          <motion.div
            className="modern-card flex items-center gap-4 px-6 py-5 min-w-[280px] border-red-500/30 bg-gradient-to-br from-red-950/40 to-red-950/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex-shrink-0 p-2 rounded-lg bg-red-500/10 border border-red-500/30">
              <Stamp className="h-6 w-6 text-red-400" aria-hidden />
            </div>
            <span className="font-semibold text-red-100 text-sm">No Hidden Charges</span>
          </motion.div>

          <motion.div
            className="modern-card flex items-center gap-3 px-6 py-5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-accent text-accent drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]"
                aria-hidden
              />
            ))}
            <span className="ml-2 text-gray-200 font-medium">Rated 5 stars</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-accent/30 shadow-lg shadow-accent/10 group">
            <img
              src={images.target}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
          </div>
          <p className="text-center text-2xl font-medium italic text-white md:text-left md:text-3xl max-w-md">
            Chosen by Many. Trusted by More.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
