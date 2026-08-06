"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-[3px] bg-transparent" aria-hidden>
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-cyan-400 via-accent to-indigo-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
