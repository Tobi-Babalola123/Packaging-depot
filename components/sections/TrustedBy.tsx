"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Ashley HomeStore", abbr: "AH", color: "#2563EB" },
  { name: "Pottery Barn", abbr: "PB", color: "#7C3AED" },
  { name: "IKEA Canada", abbr: "IK", color: "#0EA5E9" },
  { name: "Hudson's Bay", abbr: "HB", color: "#DC2626" },
  { name: "Century 21", abbr: "C21", color: "#D97706" },
  { name: "Re/Max", abbr: "RM", color: "#DC2626" },
  { name: "Interior Design Co.", abbr: "ID", color: "#059669" },
  { name: "Marriott Hotels", abbr: "MH", color: "#111827" },
  { name: "WestJet Properties", abbr: "WJ", color: "#2563EB" },
  { name: "Cushman & Wakefield", abbr: "CW", color: "#7C3AED" },
  { name: "Crate & Barrel", abbr: "CB", color: "#92400E" },
  { name: "Leon's Furniture", abbr: "LF", color: "#DC2626" },
];

const doubled = [...partners, ...partners];

export default function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#6B7280] text-sm font-semibold tracking-[0.1em] uppercase"
        >
          Trusted by furniture retailers, interior designers, property managers
          &amp; commercial offices
        </motion.p>
      </div>

      <div className="relative overflow-hidden" ref={ref}>
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="animate-marquee flex gap-4 w-max">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none flex items-center gap-3 min-w-[180px]"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                style={{ backgroundColor: partner.color }}
              >
                {partner.abbr}
              </div>
              <span className="text-[13px] font-semibold text-[#111827] whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
