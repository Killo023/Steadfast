import Image from "next/image";
import Link from "next/link";
import { Shield, Phone, Mail, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";

const quickLinks = [
  { href: "#pricing", label: "Courses & Pricing" },
  { href: "#courses", label: "Featured Programs" },
  { href: "#process", label: "How It Works" },
  { href: "#accreditation", label: "Accreditation" },
  { href: "#guide", label: "Acquire a Firearm" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const areas = [
  "Lenasia",
  "Johannesburg South",
  "Johannesburg North",
  "Soweto",
  "Ennerdale",
  "Ormonde",
  "Sandton",
  "Randburg",
  "Gauteng",
];

const WHATSAPP_URL = `https://wa.me/27607696710?text=${encodeURIComponent(
  "Hi, I'm interested in firearm training at Steadfast Tactical.",
)}`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent/10 bg-[#04060a]" role="contentinfo">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />
      <div className="tactical-grid absolute inset-0 opacity-10" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="Steadfast Tactical home">
              <div className="relative h-12 w-12 overflow-hidden border border-accent/25 bg-gradient-to-br from-[#0a1420] to-black p-1">
                <Image src={images.logoEmblem} alt="" fill className="object-contain" unoptimized />
              </div>
              <div className="relative h-12 w-[180px]">
                <Image src={images.logoSide} alt="Steadfast Tactical" fill className="object-contain object-left" unoptimized />
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              SAPS &amp; PFTC accredited firearm competency training in Johannesburg, Gauteng.
              Transparent pricing. No hidden charges.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm italic text-slate-300">
              <Shield className="h-4 w-4 text-accent" aria-hidden />
              Chosen by Many. Trusted by More.
            </p>
            <div className="mt-6 flex gap-2">
              <span className="authenticity-badge">
                <Shield className="authenticity-badge-icon" aria-hidden />
                SAPS
              </span>
              <span className="authenticity-badge">
                <Shield className="authenticity-badge-icon" aria-hidden />
                PFTC
              </span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="readout mb-5 text-accent">Navigate</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-accent/50 transition-transform group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas */}
          <nav aria-label="Service areas">
            <h3 className="readout mb-5 text-accent">Areas We Serve</h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {areas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-500">
              <Link href="/firearm-training-johannesburg-south" className="text-accent hover:underline">
                Firearm training Johannesburg South
              </Link>{" "}
              ·{" "}
              <Link href="/firearm-training-johannesburg-north" className="text-accent hover:underline">
                Johannesburg North
              </Link>
            </p>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="readout mb-5 text-accent">Contact</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                Turquoise Street, Lenasia, 1821, Gauteng
              </li>
              <li>
                <a href="tel:+27607696710" className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                  +27 60 769 6710
                </a>
              </li>
              <li>
                <a href="mailto:info@steadfasttactical.co.za" className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                  info@steadfasttactical.co.za
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-7 md:flex-row">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Steadfast Tactical. SAPS &amp; PFTC accredited firearm
            competency training in Johannesburg, Gauteng.
          </p>
          <p className="readout text-[0.6rem] text-slate-600">Steadfast · Competent · Safe</p>
        </div>
      </div>
    </footer>
  );
}
