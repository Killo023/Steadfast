"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Shield, Target, Users, Crosshair } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const WHATSAPP_NUMBER = "+27607696710";
const WHATSAPP_MESSAGE = "Hi, I'm interested in this training course. Could you please provide more information?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const featuredCourses = [
  {
    title: "Personal Purpose Firearm Training",
    description: "Comprehensive firearm competency training for personal use. Covers all firearm categories with SAPS & PFTC accredited certification. Perfect for individuals seeking firearm ownership for self-defense, sport shooting, or hunting.",
    icon: Target,
    image: images.handgun,
  },
  {
    title: "Business Purpose Firearm Training",
    description: "Professional firearm competency training designed for business and commercial purposes. Ideal for security companies, private investigators, and businesses requiring armed personnel. Group training and corporate packages available.",
    icon: Users,
    image: images.regulation,
  },
  {
    title: "Firearm Motivation Training",
    description: "Expert guidance and training for completing your firearm motivation letter. Professional assistance for both personal and business license applications. Perfect for first-time applicants.",
    icon: Shield,
    image: images.section7,
  },
];

export function FeaturedCourses() {
  return (
    <section
      className="bg-[#0d1117] px-4 py-16 md:py-24"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="featured-heading" className="sr-only">
            Featured training courses
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <i className="fa-solid fa-gun text-accent text-4xl" aria-hidden></i>
            </div>
          </div>
          <SectionTitle className="mb-4">Featured Training Courses</SectionTitle>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredCourses.map((course, i) => {
            const IconComponent = course.icon;
            return (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <HexagonCard className="h-full flex flex-col group glow-effect">
                  {course.image ? (
                    <div className="relative mb-5 aspect-video w-full overflow-hidden">
                      <motion.img
                        src={course.image}
                        alt={course.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <motion.div 
                        className="absolute top-4 left-4 p-3 bg-accent/10 border border-accent/20 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="h-6 w-6 text-accent" aria-hidden />
                      </motion.div>
                    </div>
                  ) : (
                    <div className="relative mb-5 aspect-video w-full flex items-center justify-center bg-gradient-to-br from-[#0d1117] to-[#0a0a0a] border border-accent/20">
                      <div className="p-6 bg-accent/10 border border-accent/20 backdrop-blur-sm">
                        <IconComponent className="h-12 w-12 text-accent" aria-hidden />
                      </div>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">
                    {course.description}
                  </p>
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 modern-button text-white font-semibold uppercase tracking-wide text-sm shadow-lg inline-block text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enquiry
                  </motion.a>
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
