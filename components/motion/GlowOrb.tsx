"use client";

import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
  size?: string;
  color?: string;
  duration?: number;
  delay?: number;
}

/** Floating, breathing gradient orb used as ambient background energy. */
export function GlowOrb({
  className = "",
  size = "w-72 h-72",
  color = "rgba(56,189,248,0.14)",
  duration = 10,
  delay = 0,
}: GlowOrbProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${size} ${className}`}
      style={{ backgroundColor: color }}
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -30, 24, 0],
        scale: [1, 1.15, 0.92, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden
    />
  );
}
