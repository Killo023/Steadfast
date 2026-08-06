"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "zoom" | "tilt";
  distance?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 48,
  className = "",
  amount = 0.2,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const offsets: Record<string, Record<string, number>> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: {},
    zoom: { scale: 0.86 },
    tilt: { y: distance, rotateX: 12 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
