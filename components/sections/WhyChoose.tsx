"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { scrollTo } from "../utils";

const features = [
  "20+ Years of Industry Experience",
  "Professional Packing Experts on Every Job",
  "Worldwide Shipping to 200+ Countries",
  "Discounted Courier Rates — Save 20–40%",
  "Fast Turnaround & Same-Day Processing",
  "Friendly, Knowledgeable Customer Service",
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-gray-200 max-w-lg">
              <motion.img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=1000&fit=crop&auto=format"
                alt="Professional warehouse operations at Packaging Depot"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17,24,39,0.3), transparent)",
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 16, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-xl"
              style={{ background: "#D9232D" }}
            >
              <span className="font-black text-white text-2xl leading-none">
                20+
              </span>
              <span className="text-white text-xs font-semibold text-center leading-tight mt-1">
                Years
                <br />
                Experience
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#D9232D" }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-black text-gray-900 mb-6 leading-tight"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
              }}
            >
              Why Businesses Trust
              <br />
              Packaging Depot
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              For over two decades, Edmonton businesses and individuals have
              relied on Packaging Depot for professional, reliable, and
              affordable shipping and fulfillment solutions.
            </p>
            <div className="space-y-4">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08 + i * 0.05,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: "#D9232D", flexShrink: 0 }}
                  />
                  <span className="text-gray-700 font-medium">{feat}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="mt-10 px-8 py-4 rounded-xl font-semibold text-white inline-flex items-center gap-2 transition-all duration-200 hover:scale-105"
              style={{
                background: "#D9232D",
                boxShadow: "0 6px 20px rgba(217,35,45,0.35)",
              }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
