"use client";

import { motion } from "framer-motion";
import { Counter } from "../utils";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "", label: "Edmonton Locations" },
  { value: 1000, suffix: "+", label: "Businesses Served" },
  { value: "200+", suffix: "", label: "Countries Reached" },
  { value: 5, suffix: "", label: "Courier Partners" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.05,
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="text-center p-6 rounded-2xl group"
              style={{ border: "1px solid #f3f4f6" }}
            >
              <div
                className="font-black mb-1"
                style={{
                  fontSize: "clamp(2.5rem,5vw,3.5rem)",
                  color: "#D9232D",
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
