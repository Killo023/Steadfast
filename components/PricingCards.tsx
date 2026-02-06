"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { Check, Target, User, Briefcase, CheckCircle2 } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const WHATSAPP_NUMBER = "+27607696710";
const WHATSAPP_MESSAGE = "Hi, I'm interested in your firearm training courses. Could you please provide more information about pricing and availability?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const personalCourses = [
  { title: "Handgun", price: "R1 200" },
  { title: "Handgun & Shotgun", price: "R1 700" },
  { title: "Handgun, Shotgun & Self Loading Rifle", price: "R2 100" },
  {
    title: "Handgun, Shotgun, Self Loading Rifle & Manual Action Rifle",
    price: "R2 700",
  },
];

const businessCourses = [
  { title: "Handgun", price: "R1 800" },
  { title: "Handgun & Shotgun", price: "R2 300" },
  { title: "Handgun, Shotgun & Self Loading Rifle", price: "R2 800" },
  {
    title: "Handgun, Shotgun, Self Loading Rifle & Manual Action Rifle",
    price: "R3 500",
  },
];

const includes = [
  "Comprehensive Training",
  "All Assessment Materials",
  "Range Fees Included",
  "Qualification Shoot Ammunition",
  "Training Firearms Provided",
  "SAPS & PFTC Accredited Certificate",
];

export function PricingCards() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoReady) {
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay failed:", err);
        setVideoFailed(true);
      });
    }
  }, [videoReady]);

  const currentCourses = activeTab === "personal" ? personalCourses : businessCourses;

  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 bg-navy-light px-4 py-16 md:py-24 overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background image fallback */}
      <div className={`absolute inset-0 z-0 ${videoReady && !videoFailed ? "opacity-50" : "opacity-100"}`}>
        <img
          src={images.handgun}
          alt=""
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </div>
      {/* Background video */}
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
          <source src="/images/5243197-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      )}
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-light/85 via-navy-light/80 to-navy-light/95" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="pricing-heading" className="sr-only">
            Course pricing
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <i className="fa-solid fa-gun text-accent text-4xl" aria-hidden></i>
            </div>
          </div>
          <SectionTitle className="mb-6">Our Courses</SectionTitle>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Steadfast Tactical has a wide range of training to suit personal and business requirements.
          </p>
          
          {/* Tab Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex bg-navy/60 backdrop-blur-sm border border-accent/20 p-1.5 gap-2">
              <motion.button
                onClick={() => setActiveTab("personal")}
                className={`relative px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeTab === "personal"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === "personal" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent-muted"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Personal
                </span>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab("business")}
                className={`relative px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeTab === "business"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === "business" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent-muted"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Business
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border border-accent/20 bg-navy/60 backdrop-blur-sm shadow-lg"
            >
              <div className="divide-y divide-accent/10">
                {currentCourses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="group relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 transition-all hover:bg-accent/5">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1 leading-relaxed">
                        {course.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        <span className="text-2xl sm:text-3xl font-bold text-accent whitespace-nowrap">
                          {course.price}
                        </span>
                      </motion.div>
                      <motion.a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 modern-button text-white font-semibold uppercase tracking-wide text-sm shadow-lg whitespace-nowrap inline-block text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enquiry
                      </motion.a>
                    </div>
                  </div>
                  {/* Hover effect line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-muted origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p
          className="mt-6 text-center text-gray-300 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Any combination can be arranged. {activeTab === "business" && "Group discounts available for multiple participants."}
        </motion.p>

        <motion.div
          className="mt-16 border border-accent/20 bg-navy/60 backdrop-blur-sm shadow-lg p-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="h-5 w-5 text-[#fbbf24]" aria-hidden />
            <motion.p 
              className="text-sm font-semibold uppercase tracking-wide text-accent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Prices include
            </motion.p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item, i) => (
              <motion.li 
                key={item} 
                className="flex items-center gap-3 group/item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <motion.div 
                  className="flex-shrink-0 p-1.5 bg-accent/10 group-hover/item:bg-accent/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                </motion.div>
                <span className="text-sm text-gray-300 font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
