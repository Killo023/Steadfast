"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Check } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <HexagonCard className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4 leading-relaxed">
                    {course.title}
                  </h3>
                  <p className="text-2xl font-bold text-accent mb-4">{course.price}</p>
                </div>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full mt-4 px-4 py-2 bg-accent text-white font-semibold uppercase tracking-wide text-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy shadow-lg"
                >
                  Enquiry
                </button>
              </HexagonCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-6 text-center text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Any combination can be arranged.
        </motion.p>

        <motion.div
          className="mt-12 modern-card p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-accent">
            Prices include
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-200 group/item">
                <div className="flex-shrink-0 p-1 rounded-md bg-accent/10 group-hover/item:bg-accent/20 transition-colors">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                </div>
                <span className="text-sm text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
