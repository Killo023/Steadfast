"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { Check } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const WHATSAPP_NUMBER = "+27607696710";
const WHATSAPP_MESSAGE = "Hi, I'm interested in your firearm training courses. Could you please provide more information about pricing and availability?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const courses = [
  { title: "Handgun", price: "R1 200" },
  { title: "Handgun & Shotgun", price: "R1 700" },
  { title: "Handgun, Shotgun & Self Loading Rifle", price: "R2 100" },
  {
    title: "Handgun, Shotgun, Self Loading Rifle & Manual Action Rifle",
    price: "R2 700",
  },
];

const includes = [
  "Comprehensive Training",
  "All Assessment Materials",
  "Range Fees Included",
  "Qualification Shoot Ammunition",
  "Training Firearms Provided",
  "SAPS-Accredited Certificate",
];

export function PricingCards() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      id="pricing"
      className="relative scroll-mt-20 bg-navy-light px-4 py-16 md:py-20 overflow-hidden"
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
          <source src="/images/section 3.mp4" type="video/mp4" />
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
          className="text-center mb-12"
        >
          <h2 id="pricing-heading" className="sr-only">
            Course pricing
          </h2>
          <SectionTitle className="mb-6">Our Courses</SectionTitle>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Steadfast Tactical has a wide range of training to suit personal and business requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="overflow-hidden rounded-xl border border-accent/20 bg-navy/60 backdrop-blur-sm">
            <div className="divide-y divide-accent/10">
              {courses.map((course, i) => (
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
                    className="absolute bottom-0 left-0 h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-6 text-center text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Any combination can be arranged.
        </motion.p>

        <motion.div
          className="mt-12 rounded-xl border border-accent/20 bg-navy/60 backdrop-blur-sm p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="mb-6 text-sm font-semibold uppercase tracking-wide text-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Prices include
          </motion.p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item, i) => (
              <motion.li 
                key={item} 
                className="flex items-center gap-3 text-gray-200 group/item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <motion.div 
                  className="flex-shrink-0 p-1 rounded-md bg-accent/10 group-hover/item:bg-accent/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                </motion.div>
                <span className="text-sm text-white/90">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
