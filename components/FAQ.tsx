"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need to bring for training?",
    answer: "You'll need a valid South African ID book or passport, proof of residence (utility bill or bank statement not older than 3 months), and any relevant medical certificates if applicable. We recommend bringing copies of these documents. We'll provide a complete checklist via WhatsApp when you book your training. All documents must be original or certified copies.",
  },
  {
    question: "How long is the training valid?",
    answer: "Your firearm competency certificate issued by SAPS is valid indefinitely, provided you maintain compliance with all SAPS regulations and South African firearm laws. However, your actual firearm license must be renewed as required by law (typically every 5-10 years depending on the license type). The competency certificate demonstrates your ability to safely handle firearms, while the license grants you permission to own a specific firearm.",
  },
  {
    question: "Do you provide firearms for training?",
    answer: "Yes, absolutely! All training firearms, ammunition, safety equipment, and range fees are included in the course price. You don't need to bring your own firearm for the training. We provide a variety of firearms for different categories (handguns, shotguns, rifles) so you can experience different types during your training. All equipment is maintained to the highest safety standards.",
  },
  {
    question: "What happens if I fail the assessment?",
    answer: "If you don't pass the assessment on your first attempt, don't worry. We offer additional training sessions and re-assessment opportunities at no extra charge. Our goal is to ensure you're fully competent and confident with firearms. We'll work with you to identify areas that need improvement and provide focused training. Most students pass on their second attempt after additional practice.",
  },
  {
    question: "Can I train for multiple firearm categories at once?",
    answer: "Absolutely! We offer combination packages for multiple categories (handgun, shotgun, self-loading rifle, manual action rifle) which are significantly more cost-effective than training separately. For example, our complete package covering all four categories costs R2,700 compared to R4,800 if done separately. This saves you time and money while ensuring comprehensive training across all firearm types.",
  },
  {
    question: "Is the training suitable for beginners?",
    answer: "Yes, our training is specifically designed for all skill levels, from complete beginners who have never handled a firearm to those with prior experience. Our experienced instructors adapt their teaching methods to your individual needs and learning pace. We start with fundamental safety principles and gradually build your skills. Many of our students are first-time firearm owners, and we ensure everyone receives proper, patient instruction in a supportive environment.",
  },
  {
    question: "What are your operating hours?",
    answer: "We offer flexible scheduling to accommodate your needs, including weekday and weekend options. Training sessions typically run from 8:00 AM to 5:00 PM, but we can arrange custom schedules for groups or individuals with specific requirements. Contact us via WhatsApp (+27 60 769 6710) to discuss available training dates that suit your schedule. We're based in Lenasia and can arrange training at various times throughout the week.",
  },
  {
    question: "Do you offer group training or corporate packages?",
    answer: "Yes, we specialize in group training sessions and corporate packages for security companies, businesses, and organizations. Group training is ideal for security companies operating under Regulation 21, as well as businesses wanting to train multiple employees. We offer discounted rates for groups and can customize training programs to meet your organization's specific requirements. Contact us via WhatsApp to discuss group sizes, scheduling, and pricing for your organization.",
  },
  {
    question: "How long does the training take?",
    answer: "Our comprehensive training program typically spans 2-3 days, depending on the firearm categories you select. The training includes both theoretical classroom instruction and practical range training. Single category training (handgun only) usually takes 2 days, while complete packages covering all categories may take 3 days. We ensure thorough coverage of all required topics while maintaining an efficient schedule. All training is conducted at our accredited facility in Lenasia.",
  },
  {
    question: "What is included in the course price?",
    answer: "Our transparent pricing includes everything you need: comprehensive theory training covering firearm laws and safety, hands-on practical training with live fire exercises, all assessment materials and evaluations, range fees, qualification shoot ammunition, training firearms provided for use, safety equipment (eye and ear protection), and your SAPS-accredited competency certificate upon successful completion. There are no hidden charges - what you see is what you pay.",
  },
  {
    question: "Do I need any prior experience or qualifications?",
    answer: "No prior experience is required! Our training is designed for complete beginners. However, you must meet SAPS requirements: be 21 years or older (or 18 for certain license types), be a South African citizen or permanent resident, have no criminal record, and be mentally and physically fit to handle firearms. We'll guide you through the entire process from start to finish, ensuring you meet all requirements.",
  },
  {
    question: "What happens after I complete the training?",
    answer: "After successfully completing your training and assessments, you'll receive your SAPS-accredited firearm competency certificate. This certificate is required when applying for a firearm license at your local SAPS station. We provide guidance on the license application process and can answer any questions you have. The competency certificate demonstrates to SAPS that you have the knowledge and skills required for responsible firearm ownership.",
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
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent/10"
                    >
                      <div className="px-6 pb-6 pt-4">
                        <p className="text-white/90 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
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
            href="https://wa.me/+27607696710"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button inline-block px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy"
          >
            Contact Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
