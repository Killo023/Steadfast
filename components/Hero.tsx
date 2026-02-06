"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
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
            className="font-display text-4xl font-normal uppercase tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
              Steadfast Tactical
            </span>
          </motion.h1>
          <motion.p
            className="font-sans text-[19px] text-white md:text-[25px] lg:text-[31px] font-bold mb-6 tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional & Affordable Firearm Training
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 md:text-xl lg:text-2xl mb-6 tracking-wider uppercase font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            For Personal & Business Purposes
          </motion.p>
        </motion.div>
        
        {/* Accreditation Badges - Yellow Authenticity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
