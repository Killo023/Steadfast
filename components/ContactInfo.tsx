"use client";

import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "+27 60 769 6710";
const EMAIL = "info@steadfasttactical.co.za";
const WHATSAPP_NUMBER = "27607696710";
const WHATSAPP_MESSAGE =
  "Hi, I'm interested in your firearm training services. Could you please provide more information?";
const ADDRESS = "Turquoise Street, Lenasia, 1821";

const items = [
  {
    icon: MapPin,
    label: "Address",
    value: ADDRESS,
    href: "https://www.google.com/maps?q=Turquoise+street%2C+Lenasia%2C+1821",
    external: true,
    accent: "text-accent border-accent/30 bg-accent/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    accent: "text-accent border-accent/30 bg-accent/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    external: false,
    accent: "text-accent border-accent/30 bg-accent/10",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Click to chat — fastest response",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    external: true,
    accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {items.map((item, i) => {
        const IconComponent = item.icon;
        return (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group flex items-center gap-4 border border-white/10 bg-black/30 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-black/50"
          >
            <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${item.accent}`}>
              <IconComponent className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex-1">
              <span className="readout block text-slate-500">{item.label}</span>
              <span className="block text-sm font-semibold text-white">{item.value}</span>
            </span>
          </motion.a>
        );
      })}

      <div className="flex items-center gap-4 border border-white/10 bg-black/30 p-4">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-accent/30 bg-accent/10">
          <Clock className="h-5 w-5 text-accent" aria-hidden />
        </span>
        <span>
          <span className="readout block text-slate-500">Operating Hours</span>
          <span className="block text-sm font-semibold text-white">Mon–Fri 08:00–17:00 · Sat 08:00–14:00</span>
        </span>
      </div>
    </motion.div>
  );
}
