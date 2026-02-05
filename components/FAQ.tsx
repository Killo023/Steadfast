"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need to bring for training?",
    answer: "You'll need a valid South African ID or passport, proof of residence, and any relevant medical certificates if applicable. We'll provide a complete checklist when you book your training.",
  },
  {
    question: "How long is the training valid?",
    answer: "Your firearm competency certificate is valid indefinitely, provided you maintain compliance with SAPS regulations. However, you must renew your license as required by law.",
  },
  {
    question: "Do you provide firearms for training?",
    answer: "Yes, all training firearms and ammunition are provided as part of the course fee. You don't need to bring your own firearm for the training.",
  },
  {
    question: "What happens if I fail the assessment?",
    answer: "If you don't pass the assessment on your first attempt, we offer additional training and re-assessment opportunities. Our goal is to ensure you're fully competent.",
  },
  {
    question: "Can I train for multiple firearm categories at once?",
    answer: "Absolutely! We offer combination packages for multiple categories (handgun, shotgun, rifle) which are more cost-effective than training separately.",
  },
  {
    question: "Is the training suitable for beginners?",
    answer: "Yes, our training is designed for all skill levels, from complete beginners to those with prior experience. Our instructors adapt to your needs and ensure everyone receives proper instruction.",
  },
  {
    question: "What are your operating hours?",
    answer: "We offer flexible scheduling including weekday and weekend options. Contact us to discuss available training dates that suit your schedule.",
  },
  {
    question: "Do you offer group training or corporate packages?",
    answer: "Yes, we can arrange group training sessions and corporate packages for security companies or organizations. Contact us to discuss your specific requirements.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-navy-light px-4 py-16 md:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="sr-only">
            Frequently asked questions
          </h2>
          <SectionTitle className="mb-6">Frequently Asked Questions</SectionTitle>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have questions? We've got answers. Find everything you need to know about 
            our training programs and services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="modern-card overflow-hidden glow-effect">
                  <motion.button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
                    aria-expanded={openIndex === i}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        className="h-5 w-5 text-accent flex-shrink-0"
                        aria-hidden
                      />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          className="px-6 pb-6 pt-0"
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <p className="text-white/90 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 modern-card p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Still have questions?</h3>
          <p className="text-white/90 leading-relaxed mb-6">
            Can't find the answer you're looking for? We're here to help. 
            Contact us directly and we'll get back to you as soon as possible.
          </p>
          <a
            href="#contact"
            className="modern-button inline-block px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
