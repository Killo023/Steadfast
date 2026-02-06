"use client";

import { motion } from "framer-motion";
import { Award, Stamp, Star, CheckCircle2 } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

export function TrustSignals() {
  return (
    <section
      className="bg-navy-light px-4 py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fbbf24]/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <h2 id="trust-heading" className="sr-only">
          Why choose us
        </h2>
        {/* Modern Abstract Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1: Accredited Training Provider - Abstract Geometric Design */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-full min-h-[280px] bg-gradient-to-br from-navy via-navy-light to-navy border border-accent/20 overflow-hidden">
              {/* Abstract geometric shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 transform rotate-45 translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 transform -rotate-12 -translate-x-4 translate-y-4"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  className="mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <i className="fa-solid fa-bullseye text-accent text-5xl relative z-10" aria-hidden></i>
                    <div className="absolute inset-0 bg-accent/20 blur-xl"></div>
                  </div>
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-6 tracking-wide uppercase">
                  Accredited Training Provider
                </h3>
                
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <motion.div
                    className="authenticity-badge"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
                    <span>SAPS</span>
                  </motion.div>
                  <motion.div
                    className="authenticity-badge"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
                    <span>PFTC</span>
                  </motion.div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Card 2: No Hidden Charges - Abstract Diagonal Design */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-full min-h-[280px] bg-gradient-to-br from-[#f59e0b]/20 via-[#fbbf24]/10 to-[#f59e0b]/20 border border-[#fbbf24]/30 overflow-hidden">
              {/* Abstract diagonal stripes */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#fbbf24]/20 to-transparent transform -skew-y-12"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#fbbf24]/10 transform rotate-45 translate-x-12 -translate-y-12"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  className="mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <Stamp className="h-12 w-12 text-[#fbbf24] relative z-10" aria-hidden />
                    <div className="absolute inset-0 bg-[#fbbf24]/30 blur-xl"></div>
                  </div>
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">
                  No Hidden Charges
                </h3>
                <p className="text-sm text-gray-300">100% Transparent Pricing</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf24]/0 via-[#fbbf24]/5 to-[#fbbf24]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Card 3: Rated 5 Stars - Abstract Starfield Design */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-full min-h-[280px] bg-gradient-to-br from-navy via-navy-light to-navy border border-accent/20 overflow-hidden">
              {/* Abstract starfield background */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  className="mb-6 flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Star
                        className="h-8 w-8 fill-accent text-accent drop-shadow-[0_0_8px_rgba(66,153,225,0.5)]"
                        aria-hidden
                      />
                    </motion.div>
                  ))}
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">
                  Rated 5 Stars
                </h3>
                <p className="text-sm text-gray-300">Trusted by Clients</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
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
            className="relative w-full lg:w-[55%] aspect-[4/3] lg:aspect-[3/2] overflow-hidden border-2 border-accent/40 shadow-2xl shadow-accent/20 group glow-effect"
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
            <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold italic text-white lg:text-left leading-tight mb-4">
              <span className="block">Chosen by Many.</span>
              <span className="block text-accent mt-2">Trusted by More.</span>
            </p>
            <p className="text-center text-gray-300 text-base md:text-lg lg:text-left mt-4 leading-relaxed">
              Join hundreds of satisfied clients who have chosen Steadfast Tactical for their firearm competency training needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
