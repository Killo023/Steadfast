"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    question: "Where can I find firearm training near me in Gauteng?",
    answer:
      "Steadfast Tactical offers SAPS & PFTC accredited firearm competency training in Lenasia, Johannesburg, Gauteng. We are based on Turquoise Street, Lenasia (1821), and serve clients across Johannesburg and the wider Gauteng region. Contact us via WhatsApp or email to book training or ask about sessions near you.",
  },
  {
    question: "Do you offer firearm training in Johannesburg?",
    answer:
      "Yes. We provide firearm competency training in Johannesburg, Gauteng. Our training centre is in Lenasia, southern Johannesburg, and we welcome individuals and businesses from across Johannesburg and Gauteng. All courses include theory, practical range training, and nationally accredited certification.",
  },
  {
    question: "Where is Steadfast Tactical located?",
    answer:
      "Steadfast Tactical is located at Turquoise Street, Lenasia, 1821 — in the Johannesburg area of Gauteng, South Africa. We offer handgun, shotgun, and self-loading rifle training for personal and business purposes. Get in touch for directions or to book your training.",
  },
  {
    question: "Do you offer firearm training for residents in Johannesburg North?",
    answer:
      "Yes. While our training range is in Lenasia on Turquoise Street, we welcome clients from across Johannesburg North and Johannesburg South — including Sandton, Randburg, and surrounding areas — with structured SAPS & PFTC accredited competency courses. Book via WhatsApp or email to arrange your course.",
  },
  {
    question: "What documents do I need to bring for training?",
    answer:
      "You'll need a valid South African ID book or passport, proof of residence (utility bill or bank statement not older than 3 months), and any relevant medical certificates if applicable. We recommend bringing copies of these documents. We'll provide a complete checklist via WhatsApp when you book your training. All documents must be original or certified copies.",
  },
  {
    question: "How long is the training valid?",
    answer:
      "Your firearm competency certificate issued by SAPS is valid indefinitely, provided you maintain compliance with all SAPS regulations and South African firearm laws. However, your actual firearm license must be renewed as required by law (typically every 5–10 years depending on the license type). The competency certificate demonstrates your ability to safely handle firearms, while the license grants you permission to own a specific firearm.",
  },
  {
    question: "Do you provide firearms for training?",
    answer:
      "Yes, absolutely! All training firearms, ammunition, safety equipment, and range fees are included in the course price. You don't need to bring your own firearm for the training. We provide a variety of firearms for different categories (handguns, shotguns, rifles) so you can experience different types during your training. All equipment is maintained to the highest safety standards.",
  },
  {
    question: "What happens if I fail the assessment?",
    answer:
      "If you don't pass the assessment on your first attempt, don't worry. We offer additional training sessions and re-assessment opportunities at no extra charge. Our goal is to ensure you're fully competent and confident with firearms. Most students pass on their second attempt after additional practice.",
  },
  {
    question: "Can I train for multiple firearm categories at once?",
    answer:
      "Absolutely! We offer combination packages for multiple categories (handgun, shotgun, self-loading rifle, manual action rifle) which are significantly more cost-effective than training separately. For example, our complete package covering all four categories costs R2,700 compared to R4,800 if done separately. This saves you time and money while ensuring comprehensive training across all firearm types.",
  },
  {
    question: "Is the training suitable for beginners?",
    answer:
      "Yes, our training is specifically designed for all skill levels, from complete beginners who have never handled a firearm to those with prior experience. Our experienced instructors adapt their teaching methods to your individual needs and learning pace. We start with fundamental safety principles and gradually build your skills. Many of our students are first-time firearm owners.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We offer flexible scheduling to accommodate your needs, including weekday and weekend options. Training sessions typically run from 8:00 AM to 5:00 PM, but we can arrange custom schedules for groups or individuals with specific requirements. Contact us via WhatsApp (+27 60 769 6710) to discuss available training dates.",
  },
  {
    question: "Do you offer group training or corporate packages?",
    answer:
      "Yes, we specialise in group training sessions and corporate packages for security companies, businesses, and organisations. Group training is ideal for security companies operating under Regulation 21, as well as businesses wanting to train multiple employees. We offer discounted rates for groups and can customise training programs to meet your organisation's requirements.",
  },
  {
    question: "How long does the training take?",
    answer:
      "Our comprehensive training program typically spans 2–3 days, depending on the firearm categories you select. The training includes both theoretical classroom instruction and practical range training. Single category training (handgun only) usually takes 2 days, while complete packages covering all categories may take 3 days.",
  },
  {
    question: "What is included in the course price?",
    answer:
      "Our transparent pricing includes everything you need: comprehensive theory training covering firearm laws and safety, hands-on practical training with live-fire exercises, all assessment materials and evaluations, range fees, qualification shoot ammunition, training firearms provided for use, safety equipment (eye and ear protection), and your SAPS-accredited competency certificate upon successful completion. There are no hidden charges.",
  },
  {
    question: "Do I need any prior experience or qualifications?",
    answer:
      "No prior experience is required! Our training is designed for complete beginners. However, you must meet SAPS requirements: be 21 years or older (or 18 for certain license types), be a South African citizen or permanent resident, have no criminal record, and be mentally and physically fit to handle firearms. We'll guide you through the entire process from start to finish.",
  },
  {
    question: "What happens after I complete the training?",
    answer:
      "After successfully completing your training and assessments, you'll receive your SAPS-accredited firearm competency certificate. This certificate is required when applying for a firearm license at your local SAPS station. We provide guidance on the license application process and can answer any questions you have.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden bg-[#050505] py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="tactical-grid absolute inset-0 opacity-15" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
        <h2 id="faq-heading" className="sr-only">
          Frequently asked questions about firearm training in Gauteng
        </h2>
        <SectionHeading
          eyebrow="// 10 · Answers"
          title="Frequently Asked"
          highlight="Questions"
          description="Firearm training in Gauteng and Johannesburg — common questions about our accredited courses, Lenasia location, and how to get started."
          className="mb-14"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
                className={`tactical-card overflow-hidden transition-colors ${isOpen ? "!border-accent/45" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="flex items-center gap-4">
                    <HelpCircle className={`h-5 w-5 flex-shrink-0 ${isOpen ? "text-accent" : "text-accent/40"}`} aria-hidden />
                    <span className={`font-display text-base font-bold uppercase leading-snug md:text-lg ${isOpen ? "text-white" : "text-slate-200"}`}>
                      {faq.question}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-accent/30 bg-accent/10"
                  >
                    <ChevronDown className="h-4 w-4 text-accent" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/5 px-5 pb-6 pt-4 md:px-6">
                        <p className="leading-relaxed text-slate-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <Reveal direction="up" className="mt-14">
          <div className="tactical-card relative overflow-hidden p-8 text-center md:p-10">
            <div className="scanlines absolute inset-0 opacity-20" aria-hidden />
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-extrabold uppercase text-white md:text-3xl">
                Still have questions?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-slate-300">
                Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help. Contact us directly and
                we&apos;ll get back to you as soon as possible.
              </p>
              <a
                href={`https://wa.me/27607696710?text=${encodeURIComponent("Hi, I have a question about your firearm training services. Could you please help?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 text-sm"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
