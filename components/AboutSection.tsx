"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Target, Users, Award, Shield, Crosshair, Building2, CheckCircle2 } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const features = [
  {
    icon: Award,
    title: "SAPS & PFTC Accredited",
    description: "Fully accredited training provider recognized by the South African Police Service and Professional Firearm Trainers Council.",
    useBullseye: true,
  },
  {
    icon: Users,
    title: "Experienced Instructors",
    description: "Learn from certified professionals including our range officer owner with years of real-world experience.",
  },
  {
    icon: Target,
    title: "Comprehensive Training",
    description: "Complete curriculum covering theory, practical skills, and safety protocols.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Emphasis on firearm safety, responsible ownership, and legal compliance.",
  },
];

export function AboutSection() {
  return (
    <section
      className="bg-[#0a0a0a] px-4 py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Small floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
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
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="sr-only">
            About us
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border-2 border-accent/30 relative tactical-border">
              <i className="fa-solid fa-gun text-accent text-4xl" aria-hidden></i>
            </div>
          </div>
          <SectionTitle className="mb-6">About Steadfast Tactical</SectionTitle>
          
          {/* Image and text layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden"
            >
              <motion.img
                src={images.rifle}
                alt="Professional firearm training"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/30"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/30"></div>
            </motion.div>
            <div className="w-full lg:w-1/2">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Steadfast Tactical is a leading firearm competency training provider in 
                South Africa. Our business owner is a certified range officer with extensive experience 
                in firearm safety and training. We are committed to delivering professional, comprehensive 
                training for both personal and business purposes, equipping individuals and organizations 
                with the knowledge and skills necessary for responsible firearm ownership and operation.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="authenticity-badge">
              <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
              <span>SAPS Accredited</span>
            </div>
            <div className="authenticity-badge">
              <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
              <span>PFTC Accredited</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <HexagonCard className="h-full flex flex-col items-center text-center glow-effect relative overflow-hidden group">
                  {/* Small decorative corner badge */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <motion.div 
                    className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20 mb-5 relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Animated ring around icon */}
                    <motion.div
                      className="absolute inset-0 border-2 border-accent/20 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                    {feature.title === "SAPS & PFTC Accredited" ? (
                      <i className="fa-solid fa-bullseye text-accent text-3xl relative z-10" aria-hidden></i>
                    ) : (
                      <IconComponent className="h-8 w-8 text-accent relative z-10" aria-hidden />
                    )}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  />
                </HexagonCard>
              </motion.div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
