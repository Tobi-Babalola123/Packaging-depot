"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "../utils";

const testimonials = [
  {
    name: "Jai R.",
    role: "",
    text: "Great Experience, Had a great experience at Packaging Depot! I went in for shipping, and the staff was very friendly and helpful. He made sure everything was packed properly and explained the shipping options clearly. Excellent customer service—highly recommend!",
  },
  {
    name: "V. V.",
    role: "",
    text: "Amazing service! Packaging depot made it super easy to send my dad a gift to Central America. Hicham was super friendly and most caple! Definitely will be using their services again!",
  },
  {
    name: "Kevin P.",
    role: "",
    text: "Great Prices, Awesome place to send packages from. The main guy who is always there is super friendly and has great customer service. I send all my packages from this store. They also have great prices for shipping!",
  },
  {
    name: "Bhuvan P.",
    role: "",
    text: "Wonderful service.Very quick and knew most details over the phone - setting expectations before the visit. Shoutout to Rayan at the desk",
  },
  {
    name: "Alysha K.",
    role: "",
    text: "Highly Recommended. I'm not sure if it's the owner or an employee but the best service ever. I had to return an Amazon purchase thru UPS. The first time ever and labeled it ALL wrong. He walked me through it and then taped it up himself. Thank you.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  // useEffect(() => {
  //   const t = setInterval(
  //     () => setIdx((i) => (i + 1) % testimonials.length),
  //     5000,
  //   );
  //   return () => clearInterval(t);
  // }, []);

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "#111827" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#D9232D" }}
            >
              Customer Reviews
            </p>
            <h2
              className="font-black text-white mb-4"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
              }}
            >
              What Our Customers Say
            </h2>
          </div>
        </FadeUp>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-10 text-center relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <p
              className="text-lg leading-relaxed mb-8 italic"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              "{testimonials[idx].text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                style={{ background: "#D9232D" }}
              >
                {testimonials[idx].name[0]}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm">
                  {testimonials[idx].name}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {testimonials[idx].role} · Google Verified
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() =>
                setIdx(
                  (i) => (i - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === idx ? "#D9232D" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
