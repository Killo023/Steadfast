"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "+27 60 769 6710";
const WHATSAPP_NUMBER = "+27607696710";
const WHATSAPP_MESSAGE = "Hi, I'm interested in your firearm training services. Could you please provide more information?";

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        className="group flex items-center gap-4 p-4 bg-navy-light/50 border border-accent/20 transition-all hover:border-accent/40 hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy"
      >
        <div className="flex-shrink-0 p-2 bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
          <Phone className="h-5 w-5 text-accent" aria-hidden />
        </div>
        <span className="text-white group-hover:text-white transition-colors font-medium">{PHONE}</span>
      </a>
      
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-4 bg-navy-light/50 border border-[#25D366]/30 transition-all hover:border-[#25D366]/50 hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-navy"
      >
        <div className="flex-shrink-0 p-2 bg-[#25D366]/10 border border-[#25D366]/30 group-hover:bg-[#25D366]/20 transition-colors">
          <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
        </div>
        <div className="flex-1">
          <span className="text-white group-hover:text-white transition-colors font-medium block">WhatsApp Us</span>
          <span className="text-gray-400 text-sm">Click to chat on WhatsApp</span>
        </div>
      </a>
    </motion.div>
  );
}
