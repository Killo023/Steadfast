"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HexagonCard } from "@/components/HexagonCard";
import { Shield, Building2, Target } from "lucide-react";
import { images, fallbackImage } from "@/lib/images";

const services = [
  {
    title: "Firearm Motivation Training",
    description: "Expert guidance and comprehensive training for completing your firearm motivation letter. Available for both personal and business license applications. Covers all aspects of responsible firearm ownership, safety protocols, and legal requirements. Perfect for first-time applicants and those renewing their certification.",
    icon: Shield,
    image: images.training,
  },
  {
    title: "Business & Corporate Training",
    description: "Specialized training programs designed for businesses, security companies, and organizations. Includes Regulation 21 compliance training, group training options, corporate packages, and tailored programs to meet your organization's specific security training requirements.",
    icon: Building2,
    image: images.security,
  },
];

export function AdditionalServices() {
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
      className="bg-[#0a0a0a] px-4 py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background video */}
      {!videoFailed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover z-0 ${videoReady && !videoFailed ? "opacity-30" : "opacity-0"}`}
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
          onError={() => setVideoFailed(true)}
        >
          <source src="/video/6489579_Gun Firearm Shooting Interior_By_Nazarii_Ortynskyi_Artlist_HD.mp4" type="video/mp4" />
        </video>
      )}
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/85 to-black/95" />
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="services-heading" className="sr-only">
            Additional services
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20">
              <i className="fa-solid fa-gun text-accent text-4xl" aria-hidden></i>
            </div>
          </div>
          <SectionTitle className="mb-12">Additional Services</SectionTitle>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <HexagonCard className="group glow-effect">
                    <div className="relative mb-6 aspect-video w-full overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="flex-shrink-0 p-3 bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/20"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent
                        className="h-6 w-6 text-accent"
                        aria-hidden
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </HexagonCard>
              </motion.div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
