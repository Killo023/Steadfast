"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

export function MissionSection() {
  return (
    <section
      className="bg-[#0a0a0a] px-4 py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="mission-heading"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-10 right-20 w-24 h-24 border border-accent/10 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-16 h-16 border border-accent/10 rotate-45"
          animate={{
            rotate: [45, -135, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Small particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="modern-card p-10 relative overflow-hidden group"
        >
          {/* Background image */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity">
            <img
              src={images.target}
              alt=""
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="flex-shrink-0 p-3 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20 relative"
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-accent/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <Crosshair className="h-7 w-7 text-accent relative z-10" aria-hidden />
              </motion.div>
              <h2 id="mission-heading" className="text-2xl font-semibold text-white">Our Mission</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4 text-base">
                  At Steadfast Tactical, our mission is to provide accessible, high-quality firearm 
                  competency training that promotes responsible ownership and enhances personal safety. 
                  We believe that proper training is essential for anyone considering firearm ownership, 
                  and we are dedicated to making this training accessible to all qualified individuals.
                </p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed text-base">
                  With transparent pricing, no hidden charges, and a commitment to excellence, we strive 
                  to be the trusted choice for firearm competency training.
                </p>
                {/* Small decorative elements */}
                <div className="flex gap-2 mt-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-accent/40 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/20"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/20"></div>
        </motion.div>
      </div>
    </section>
  );
}
