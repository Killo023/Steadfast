"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { ContactInfo } from "@/components/ContactInfo";
import { images, fallbackImage } from "@/lib/images";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-navy px-4 py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="contact-heading" className="sr-only">
            Get in touch
          </h2>
          <SectionTitle className="mb-4">Get In Touch</SectionTitle>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Contact us for more information about our training courses and services.
          </p>
        </motion.div>

        <HexagonCard className="flex flex-col">
          <div className="relative mb-8 aspect-[2/1] w-full overflow-hidden rounded-xl group">
            <img
              src={images.rifle}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
          </div>
          <ContactInfo />
        </HexagonCard>
      </div>
    </section>
  );
}
