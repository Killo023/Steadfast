import { Marquee } from "@/components/motion/Marquee";
import { Target } from "lucide-react";

const items = [
  "Handgun Competency",
  "Shotgun Competency",
  "Self-Loading Rifle",
  "Manual Action Rifle",
  "Regulation 21 Training",
  "SAPS Accredited",
  "PFTC Registered",
  "Firearm Motivations",
  "Business Purpose",
  "Personal Purpose",
  "Lenasia · Johannesburg",
];

export function MarqueeStrip() {
  return (
    <div className="relative z-20 overflow-hidden border-b border-accent/10 bg-gradient-to-r from-[#04121c] via-[#062033] to-[#04121c] py-4" aria-hidden>
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
      <Marquee speed="38s">
        {items.map((item) => (
          <span key={item} className="flex items-center">
            <span className="readout px-6 text-slate-300">{item}</span>
            <Target className="h-3.5 w-3.5 text-accent/50" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
