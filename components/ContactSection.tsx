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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 aspect-[2/1] w-full overflow-hidden rounded-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d27.85!3d-26.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a5a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sLenasia%2C%20Johannesburg%2C%201820%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Steadfast Tactical Location - Lenasia, South Africa"
            />
            {/* 
              Note: To get the exact embed URL for your specific location:
              1. Go to https://www.google.com/maps
              2. Search for your exact address in Lenasia
              3. Click "Share" > "Embed a map"
              4. Copy the iframe src URL and replace the src above
            */}
          </motion.div>
          <ContactInfo />
        </HexagonCard>
      </div>
    </section>
  );
}
