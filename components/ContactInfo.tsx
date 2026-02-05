"use client";

import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "+27 60 769 6710";
const LOCATION = "Lenasia";

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
        className="group flex items-center gap-4 rounded-lg p-4 bg-navy-light/50 border border-accent/20 transition-all hover:border-accent/40 hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy"
      >
        <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
          <Phone className="h-5 w-5 text-accent" aria-hidden />
        </div>
        <span className="text-white group-hover:text-white transition-colors font-medium">{PHONE}</span>
      </a>
      <div className="flex items-center gap-4 rounded-lg p-4 bg-navy-light/50 border border-accent/20">
        <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 border border-accent/20">
          <MapPin className="h-5 w-5 text-accent" aria-hidden />
        </div>
        <span className="text-white font-medium">{LOCATION}</span>
      </div>
    </motion.div>
  );
}
