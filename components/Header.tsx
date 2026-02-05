"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { images } from "@/lib/images";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-md shadow-md shadow-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-[0.175rem]"
        animate={{
          paddingTop: scrolled ? "0.25rem" : "0.175rem",
          paddingBottom: scrolled ? "0.25rem" : "0.175rem",
        }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/" className="flex items-center group">
          <motion.div
            className="relative h-24 w-[288px] md:h-32 md:w-[384px] flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={images.logoSide}
              alt="Steadfast Tactical"
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
        </Link>
        <nav className="flex gap-6" aria-label="Main navigation">
          {[
            { href: "#pricing", label: "Pricing" },
            { href: "#faq", label: "FAQ" },
            { href: "#contact", label: "Contact" },
          ].map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-800 transition-all hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white rounded-md px-2 py-1 relative group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
