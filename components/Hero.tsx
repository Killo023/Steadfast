"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { images, fallbackImage } from "@/lib/images";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-navy px-4 pt-[194px] pb-30"
      aria-label="Hero"
    >
      {/* Background image: always visible; full opacity when no video */}
      <div className={`absolute inset-0 z-0 ${videoReady && !videoFailed ? "opacity-50" : "opacity-100"}`}>
        <img
          src={images.heroPoster}
          alt=""
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </div>
      {/* Background video: only show when hero.mp4 loads successfully */}
      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0 }}
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
        </video>
      )}
      {/* Overlays (above video/image so text stays readable) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-white/5 to-navy/95" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            className="font-display text-4xl font-normal uppercase tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Steadfast Tactical
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 md:text-2xl lg:text-3xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional & Affordable Firearm Training
          </motion.p>
        </motion.div>
        <motion.p
          className="mt-4 text-base text-white md:text-lg max-w-3xl mx-auto leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Your starting point to firearm proficiency. Accredited SAPS training in Lenasia.
        </motion.p>
        
        {/* Additional Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 mb-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">SAPS</div>
              <p className="text-sm text-white/90">Accredited Provider</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-white/90">Transparent Pricing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">All</div>
              <p className="text-sm text-white/90">Equipment Provided</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-accent text-white font-semibold uppercase tracking-wide hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy shadow-lg"
          >
            Get More Information
          </button>
          <a
            href="#pricing"
            className="px-8 py-3 border-2 border-accent text-white font-semibold uppercase tracking-wide hover:bg-accent/20 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy"
          >
            View Courses
          </a>
        </motion.div>
      </div>
    </section>
  );
}
