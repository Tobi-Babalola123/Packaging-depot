"use client";

import { Truck } from "lucide-react";
import { FadeUp } from "../utils";

const couriers = [
  {
    name: "FedEx",
    color: "#4D148C",
    textColor: "white",
    desc: "Express & Ground",
  },
  {
    name: "DHL",
    color: "#FFCC00",
    textColor: "#D40511",
    desc: "International Express",
  },
  {
    name: "Purolator",
    color: "#004B8D",
    textColor: "white",
    desc: "Canadian Courier",
  },
  {
    name: "Canpar",
    color: "#002B5B",
    textColor: "white",
    desc: "Ground Shipping",
  },
  {
    name: "Loomis",
    color: "#1A1A2E",
    textColor: "white",
    desc: "Express Courier",
  },
];

const partners = [
  "/images/purolator.png",
  "/images/canpar.png",
  "/images/fedex.png",
  "/images/loomis.png",
  "/images/dhl.png",
];

export default function Coverage() {
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
              Our Partners
            </p>
            <h2
              className="font-black text-white mb-4"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
              }}
            >
              Powered by Canada's Most Trusted Couriers
            </h2>
            <p
              className="max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Access discounted rates from five of the world's leading courier
              networks through one convenient location.
            </p>
          </div>
        </FadeUp>

        <div className="relative w-full overflow-hidden py-10 isolate">
          <div
            className="gap-12   animate-marquee gap-10 md:gap-14     lg:gap-20
    px-6 will-change-transform"
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="Courier Partner"
                  className="
h-8
sm:h-10
md:h-12
lg:h-14
w-auto
object-contain
flex-shrink-0
"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
