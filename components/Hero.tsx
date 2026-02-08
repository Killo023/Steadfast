"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, BookOpen } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [showTrainingDetail, setShowTrainingDetail] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Ensure video plays when it loads
    if (videoRef.current && videoReady) {
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay failed:", err);
        setVideoFailed(true);
      });
    }
  }, [videoReady]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#000000] px-4 pt-[180px] pb-20 tactical-grid"
      aria-label="Hero"
    >
      {/* Background image: always visible; full opacity when no video */}
      <motion.div 
        className={`absolute inset-0 z-0 ${videoReady && !videoFailed ? "opacity-50" : "opacity-100"}`}
        style={{ y }}
      >
        <img
          src={images.heroPoster}
          alt=""
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </motion.div>
      {/* Background video: only show when hero.mp4 loads successfully */}
      {!videoFailed && (
        <motion.video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0, y }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onLoadedData={() => {
            setVideoReady(true);
            const video = videoRef.current;
            if (video) {
              video.play().catch((err) => {
                console.warn("Video play() failed:", err);
                setVideoFailed(true);
              });
            }
          }}
          onCanPlay={() => {
            setVideoReady(true);
            const video = videoRef.current;
            if (video && video.paused) {
              video.play().catch(() => setVideoFailed(true));
            }
          }}
          onError={(e) => {
            const video = e.currentTarget;
            console.error("Video error:", {
              error: video.error,
              networkState: video.networkState,
              readyState: video.readyState,
              src: video.currentSrc,
            });
            setVideoFailed(true);
          }}
        >
          <source src="/images/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-[1] animated-gradient" />
      {/* Overlays (above video/image so text stays readable) */}
      <motion.div 
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/70 to-black/95" 
        style={{ opacity }}
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(34,197,94,0.08),transparent)]" />
      {/* Content */}
      <motion.div 
        className="relative z-10 mx-auto max-w-6xl text-center px-4"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            className="font-logo text-4xl uppercase tracking-wide sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-accent drop-shadow-[0_0_20px_rgba(66,153,225,0.3)]">STEADFAST</span>
            {" "}
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">TACTICAL</span>
          </motion.h1>
          <p className="font-sans text-lg md:text-xl text-white font-semibold mb-6">
            Competency starts with proper training.
          </p>
          <motion.div
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              type="button"
              onClick={() => setShowTrainingDetail((prev) => !prev)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 rounded-xl bg-transparent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black cursor-pointer transition-colors duration-300 group"
            >
              <span className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/15 group-hover:bg-accent/25 transition-colors">
                  <BookOpen className="h-5 w-5 text-accent" aria-hidden />
                </span>
                <span className="text-white font-sans font-semibold text-sm md:text-base">How we train civilians</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 ${showTrainingDetail ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <AnimatePresence>
              {showTrainingDetail && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pl-5 py-3 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                    <p>We teach civilians how to safely handle and confidently use a firearm through structured courses.</p>
                    <p>Learn safe handling, clear fundamentals, and practical skills—step by step, no experience required.</p>
                    <p>Our proficiency training develops safe habits, solid fundamentals, and real-world competency for everyday people.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <div className="authenticity-badge">
              <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
              <span>SAPS Accredited</span>
            </div>
            <div className="authenticity-badge">
              <CheckCircle2 className="authenticity-badge-icon" aria-hidden />
              <span>PFTC Accredited</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToContact}
            className="modern-button px-10 py-4 text-white font-semibold uppercase tracking-wide shadow-lg text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get More Information
          </motion.button>
          <motion.a
            href="#pricing"
            className="px-10 py-4 border-2 border-accent text-accent font-semibold uppercase tracking-wide hover:bg-accent hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Courses
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
