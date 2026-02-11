"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Target, Users, ArrowRight, CheckCircle2 } from "lucide-react";
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

  // Parallax for background only (content stays fully visible)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#000000] px-4 pt-[180px] pb-24"
      aria-label="Hero"
    >
      {/* Background image */}
      <motion.div 
        className={`absolute inset-0 z-0 ${videoReady && !videoFailed ? "opacity-40" : "opacity-100"}`}
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
      
      {/* Background video */}
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
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="font-logo text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="block text-accent drop-shadow-[0_0_30px_rgba(66,153,225,0.4)]">STEADFAST</span>
              <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">TACTICAL</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
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
            
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white font-sans font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Competency starts with proper training.
            </motion.p>
            
            <motion.p
              className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Professional firearm competency training for civilians. Learn safe handling, clear fundamentals, and practical skills—step by step, no experience required.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="group modern-button px-8 py-4 text-white font-sans font-semibold uppercase tracking-wide shadow-xl text-base flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </motion.button>
              <motion.a
                href="#pricing"
                className="px-8 py-4 border-2 border-white/30 text-white font-sans font-semibold uppercase tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="text-white font-sans font-bold text-lg mb-2">Structured Courses</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">We teach civilians how to safely handle and confidently use a firearm through structured courses.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="text-white font-sans font-bold text-lg mb-2">Step-by-Step Learning</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Learn safe handling, clear fundamentals, and practical skills—no experience required.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="text-white font-sans font-bold text-lg mb-2">Real-World Competency</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Our proficiency training develops safe habits, solid fundamentals, and real-world competency for everyday people.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
