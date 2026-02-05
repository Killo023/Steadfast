"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Target, Users, Award, Shield } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const features = [
  {
    icon: Award,
    title: "SAPS Accredited",
    description: "Fully accredited training provider recognized by the South African Police Service.",
  },
  {
    icon: Users,
    title: "Experienced Instructors",
    description: "Learn from certified professionals with years of real-world experience.",
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
      className="bg-navy px-4 py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="about-heading" className="sr-only">
            About us
          </h2>
          <SectionTitle className="mb-6">About Steadfast Tactical</SectionTitle>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Steadfast Tactical is a leading firearm competency training provider based in Lenasia, 
            South Africa. We are committed to delivering professional, comprehensive training that 
            equips individuals with the knowledge and skills necessary for responsible firearm ownership.
          </p>
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
                <HexagonCard className="h-full flex flex-col items-center text-center glow-effect">
                  <motion.div 
                    className="flex-shrink-0 p-4 rounded-xl bg-accent/10 border border-accent/20 mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="h-8 w-8 text-accent" aria-hidden />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </HexagonCard>
              </motion.div>
            </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 modern-card p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
          <p className="text-white/90 leading-relaxed mb-4">
            At Steadfast Tactical, our mission is to provide accessible, high-quality firearm 
            competency training that promotes responsible ownership and enhances personal safety. 
            We believe that proper training is essential for anyone considering firearm ownership, 
            and we are dedicated to making this training accessible to all qualified individuals.
          </p>
          <p className="text-white/90 leading-relaxed">
            With transparent pricing, no hidden charges, and a commitment to excellence, we strive 
            to be the trusted choice for firearm competency training in Lenasia and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
