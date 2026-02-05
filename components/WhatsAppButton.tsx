"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+27607696710"; // +27 60 769 6710 without spaces
const WHATSAPP_MESSAGE = "Hi, I'm interested in firearm training at Steadfast Tactical. Could you please provide more information?";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20BA5A] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 px-4 py-3 md:px-5 md:py-4"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" aria-hidden="true" />
      <span className="hidden sm:block font-semibold text-sm md:text-base pr-1">WhatsApp</span>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
