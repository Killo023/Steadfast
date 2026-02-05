"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Shield, Building2 } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const services = [
  {
    title: "Firearm Motivation",
    description: "Comprehensive firearm motivation training for individuals seeking competency certification. Covers all aspects of responsible firearm ownership, safety protocols, and legal requirements. Perfect for first-time applicants and those renewing their certification.",
    icon: Shield,
    image: images.training,
  },
  {
    title: "Regulation 21 Security Companies",
    description: "Specialized training programs designed for security companies operating under Regulation 21. Includes group training options, corporate packages, and tailored programs to meet your organization's specific security training requirements.",
    icon: Building2,
    image: images.security,
  },
];

export function AdditionalServices() {
  return (
    <section
      className="bg-navy px-4 py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="services-heading" className="sr-only">
            Additional services
          </h2>
          <SectionTitle className="mb-10">Additional Services</SectionTitle>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <HexagonCard className="group">
                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                    <service.icon
                      className="h-6 w-6 text-accent"
                      aria-hidden
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </HexagonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
