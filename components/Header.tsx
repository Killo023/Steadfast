"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";

const NAV_LINKS = [
  { href: "#pricing", label: "Courses" },
  { href: "#process", label: "Process" },
  { href: "#accreditation", label: "Accreditation" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const WHATSAPP_URL = `https://wa.me/27607696710?text=${encodeURIComponent(
  "Hi, I'm interested in firearm competency training at Steadfast Tactical. Could you please provide more information?",
)}`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top hairline accent */}
      <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <motion.div
        className={`relative border-b transition-all duration-500 ${
          scrolled
            ? "border-slate-300/70 bg-slate-100/90 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-slate-100/85 to-transparent"
        }`}
        animate={{
          paddingTop: scrolled ? "0.5rem" : "0.75rem",
          paddingBottom: scrolled ? "0.5rem" : "0.75rem",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
          <Link href="/" className="group relative z-10 flex items-center gap-3" aria-label="Steadfast Tactical home">
            <div className="relative h-12 w-12 overflow-hidden rounded-md border border-accent/25 bg-gradient-to-br from-[#0a1420] to-black p-1.5 transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14">
              <Image
                src={images.logoEmblem}
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="relative h-12 w-[170px] md:h-14 md:w-[220px]">
              <Image
                src={images.logoSide}
                alt="Steadfast Tactical"
                fill
                className="object-contain object-left brightness-0 contrast-100"
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Book Training
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="relative z-20 inline-flex h-11 w-11 items-center justify-center border border-slate-300 bg-white/70 text-slate-800 backdrop-blur-sm transition-colors hover:border-accent lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-5 w-5" aria-hidden />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" aria-hidden />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-10 bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.nav
              className="fixed inset-x-0 top-0 z-30 mt-[72px] border-t border-slate-200 bg-slate-100/95 backdrop-blur-xl lg:hidden"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 px-6 py-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-slate-200 py-4 text-lg font-display font-semibold uppercase tracking-wider text-slate-800 transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ChevronRight className="h-5 w-5 text-accent/40 transition-transform group-hover:translate-x-1 group-hover:text-accent" aria-hidden />
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full text-sm"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Book Training on WhatsApp
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative px-4 py-2 font-display text-[15px] font-semibold uppercase tracking-[0.14em] text-slate-900 transition-colors hover:text-black"
    >
      <span className="relative z-10">{label}</span>
      <motion.span
        className="absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-accent to-indigo-400"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </Link>
  );
}
