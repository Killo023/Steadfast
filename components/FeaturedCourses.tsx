"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Shield, Target, Users } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const featuredCourses = [
  {
    title: "Personal Purpose Firearm Training",
    description: "Comprehensive firearm competency training for personal use. Covers all firearm categories with SAPS-accredited certification.",
    icon: Target,
    image: images.handgun,
  },
  {
    title: "Firearm Motivation Training",
    description: "Professional firearm motivation training for individuals seeking competency certification. Perfect for first-time applicants.",
    icon: Shield,
    image: images.section7,
  },
  {
    title: "Regulation 21 Security Companies",
    description: "Specialized training programs for security companies operating under Regulation 21. Group training and corporate packages available.",
    icon: Users,
    image: images.regulation,
  },
];

export function FeaturedCourses() {
  return (
    <section
      className="bg-navy px-4 py-16 md:py-20"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="featured-heading" className="sr-only">
            Featured training courses
          </h2>
          <SectionTitle className="mb-4">Featured Training Courses</SectionTitle>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredCourses.map((course, i) => {
            const IconComponent = course.icon;
            return (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <HexagonCard className="h-full flex flex-col group">
                {course.image ? (
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 p-2 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 text-accent" aria-hidden />
                    </div>
                  </div>
                ) : (
                  <div className="relative mb-4 aspect-video w-full flex items-center justify-center rounded-xl bg-gradient-to-br from-navy-light to-navy border border-accent/20">
                    <div className="p-6 rounded-xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
                      <IconComponent className="h-12 w-12 text-accent" aria-hidden />
                    </div>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full px-4 py-2 bg-accent text-white font-semibold uppercase tracking-wide text-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy shadow-lg"
                >
                  Enquiry
                </button>
              </HexagonCard>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
