you know what, just send the full updated code for this section so i copy and paste in my prioject for the animations: "use client"; 

import { useState, useEffect } from "react";
import { Package, Phone, Menu, X } from "lucide-react";
import { scrollTo } from "../utils";

import { Star, MapPin, Globe, Building2, ArrowRight } from "lucide-react";

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
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1684695749267-233af13276d0?w=1920&h=1080&fit=crop&auto=format"
          alt="Large warehouse with shipping operations"
          className="w-full h-full object-cover opacity-50"
          style={{ transition: "transform 8s ease", transform: "scale(1.04)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.6) 60%, rgba(217,35,45,0.2) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: headline */}
          <div className="lg:col-span-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(217,35,45,0.2)",
                border: "1px solid rgba(217,35,45,0.4)",
                color: "#fca5a5",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Edmonton's Trusted Shipping Experts — 20+ Years
            </div>

            <h1
              className="font-black mb-6 text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 5vw, 5rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.06em",
              }}
            >
              <div className="whitespace-nowrap">Shipping Made Easy.</div>

              <div className="whitespace-nowrap">
                <span style={{ color: "#D9232D" }}>Professional</span> Packing.
              </div>

              <div className="whitespace-nowrap">Worldwide Delivery.</div>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Ship documents, parcels, freight and business inventory anywhere
              in Canada and internationally with expert packing services and
              discounted courier rates from trusted shipping partners.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
                style={{
                  background: "#D9232D",
                  boxShadow: "0 8px 24px rgba(217,35,45,0.45)",
                }}
              >
                Get Shipping Quote <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:bg-white/15"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right: trust badges */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div
          className="w-px h-10 bg-white/40"
          style={{ animation: "pulse 2s infinite" }}
        />
      </div>
    </section>
  );
}
