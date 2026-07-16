"use client";

import { Phone, ArrowRight } from "lucide-react";
import { FadeUp, scrollTo } from "../utils";

export default function CTA() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#D9232D" }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{ background: "white" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full"
          style={{ background: "white" }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <h2
            className="font-black text-white mb-5"
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
            }}
          >
            Ready to Ship With Confidence?
          </h2>
          <p
            className="text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Whether you're sending one package or managing business fulfillment,
            Packaging Depot provides professional packing, discounted courier
            rates and reliable worldwide shipping.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="px-10 py-4 rounded-xl font-bold text-base bg-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{ color: "#D9232D" }}
            >
              Get Shipping Quote <ArrowRight size={16} />
            </button>
            <a
              href="tel:+17804840033"
              className="px-10 py-4 rounded-xl font-bold text-base text-white transition-all hover:scale-105 flex items-center gap-2"
              style={{
                border: "2px solid rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <Phone size={16} /> Call Us Today
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
