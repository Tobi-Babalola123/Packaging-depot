"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Globe, Building2, ArrowRight } from "lucide-react";
import { motionEase, scrollTo } from "../utils";

const trustBadges = [
  {
    icon: <Star size={20} fill="#fbbf24" color="#fbbf24" />,
    label: "Google Reviews",
    value: "★★★★★",
  },
  {
    icon: <MapPin size={20} color="#D9232D" />,
    label: "Edmonton Locations",
    value: "2 Stores",
  },
  {
    icon: <Globe size={20} color="#D9232D" />,
    label: "Shipping Coverage",
    value: "Worldwide",
  },
  {
    icon: <Building2 size={20} color="#D9232D" />,
    label: "Business Fulfillment",
    value: "Expert Team",
  },
];

export default function Hero() {
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setGlow({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0 bg-gray-900">
        <motion.img
          src="https://images.unsplash.com/photo-1684695749267-233af13276d0?w=1920&h=1080&fit=crop&auto=format"
          alt="Large warehouse with shipping operations"
          className="w-full h-full object-cover opacity-50"
          // animate={{
          //   scale: 1.06,
          // }}
        />
        <motion.div
          className="absolute inset-0"
          // animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(135deg, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.6) 60%, rgba(217,35,45,0.2) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          // animate={{
          //   opacity: glow.x || glow.y ? 0.9 : 0.25,
          //   x: glow.x / 10,
          //   y: glow.y / 10,
          // }}
          transition={{ duration: 0.2, ease: motionEase }}
          style={{
            background: `radial-gradient(320px circle at ${glow.x}px ${glow.y}px, rgba(255,255,255,0.16), transparent 60%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: motionEase }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: motionEase, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(217,35,45,0.2)",
                border: "1px solid rgba(217,35,45,0.4)",
                color: "#fca5a5",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Edmonton's Trusted Shipping Experts — 20+ Years
            </motion.div>

            <h1
              className="font-black mb-6 text-white "
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 5vw, 5rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.06em",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: motionEase, delay: 0.16 }}
                className="lg:whitespace-nowrap"
              >
                Shipping Made Easy.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: motionEase, delay: 0.22 }}
                className="lg:whitespace-nowrap"
              >
                <span style={{ color: "#D9232D" }}>Professional</span> Packing.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: motionEase, delay: 0.28 }}
                className="lg:whitespace-nowrap"
              >
                Worldwide Delivery.
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: motionEase, delay: 0.32 }}
              className="
text-base
sm:text-lg
leading-relaxed
mb-8
max-w-xl
lg:max-w-2xl
mx-auto
lg:mx-0"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Ship documents, parcels, freight and business inventory anywhere
              in Canada and internationally with expert packing services and
              discounted courier rates from trusted shipping partners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: motionEase, delay: 0.38 }}
              className="
flex
flex-col
sm:flex-row
gap-4
w-full
sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="
w-full
sm:w-auto
justify-center
px-8
py-4
rounded-xl
font-semibold
text-white
text-base
flex
items-center
gap-2"
                style={{
                  background: "#D9232D",
                  boxShadow: "0 8px 24px rgba(217,35,45,0.45)",
                }}
              >
                Get Shipping Quote <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("services")}
                className="px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:bg-white/15"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, i) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="rounded-2xl p-4 flex flex-col gap-2"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {badge.icon}

                  <div className="font-bold text-white text-sm">
                    {badge.value}
                  </div>

                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {badge.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
