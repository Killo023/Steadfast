"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Star, Quote, Target } from "lucide-react";

const testimonials = [
  {
    name: "John M.",
    location: "Johannesburg",
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
    location: "Johannesburg",
    rating: 5,
    text: "As a first-time firearm owner, I was nervous about the training. The team made me feel comfortable and ensured I understood everything. Great experience!",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-[#0d1117] px-4 py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="testimonials-heading" className="sr-only">
            Testimonials
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <i className="fa-solid fa-gun text-accent text-4xl" aria-hidden></i>
            </div>
          </div>
          <SectionTitle className="mb-6">What Our Clients Say</SectionTitle>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their training experience with us.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <HexagonCard className="h-full flex flex-col glow-effect">
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div 
                      className="flex-shrink-0 p-2.5 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20"
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                    >
                      <Quote className="h-5 w-5 text-accent" aria-hidden />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + 0.3 + idx * 0.1 }}
                          >
                            <Star
                              className="h-4 w-4 fill-accent text-accent"
                              aria-hidden
                            />
                          </motion.div>
                        ))}
                      </div>
                      <motion.p 
                        className="text-gray-300 leading-relaxed mb-4 italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.4 }}
                      >
                        "{testimonial.text}"
                      </motion.p>
                      <div className="pt-4 border-t border-accent/20">
                        <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-gray-400 text-xs">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </HexagonCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
