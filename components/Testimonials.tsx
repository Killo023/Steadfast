"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John M.",
    location: "Lenasia",
    rating: 5,
    text: "Excellent training! The instructors were professional, patient, and thorough. I felt confident and well-prepared after completing the course. Highly recommend Steadfast Tactical.",
  },
  {
    name: "Sarah K.",
    location: "Johannesburg",
    rating: 5,
    text: "The training exceeded my expectations. Clear explanations, hands-on practice, and comprehensive coverage of all safety aspects. Worth every rand!",
  },
  {
    name: "Michael D.",
    location: "Soweto",
    rating: 5,
    text: "Professional service from start to finish. No hidden costs, transparent pricing, and quality instruction. Got my certificate without any hassle.",
  },
  {
    name: "Lisa T.",
    location: "Lenasia",
    rating: 5,
    text: "As a first-time firearm owner, I was nervous about the training. The team made me feel comfortable and ensured I understood everything. Great experience!",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-navy px-4 py-16 md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="testimonials-heading" className="sr-only">
            Testimonials
          </h2>
          <SectionTitle className="mb-6">What Our Clients Say</SectionTitle>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their training experience with us.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <HexagonCard className="h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 border border-accent/20">
                    <Quote className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="h-4 w-4 fill-accent text-accent"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <p className="text-white/80 leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-4 border-t border-accent/20">
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-white/70 text-xs">{testimonial.location}</p>
                    </div>
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
