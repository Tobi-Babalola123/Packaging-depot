"use client";

import { Archive, Package, Send, Warehouse } from "lucide-react";
import { FadeUp } from "../utils";

const solutions = [
  {
    icon: <Archive size={22} />,
    title: "Inventory Storage",
    desc: "Secure, climate-appropriate storage for your business inventory.",
  },
  {
    icon: <Package size={22} />,
    title: "Pick & Pack",
    desc: "Accurate order fulfillment with branded packaging options.",
  },
  {
    icon: <Send size={22} />,
    title: "Product Distribution",
    desc: "Efficient multi-channel distribution across Canada and internationally.",
  },
  {
    icon: <Warehouse size={22} />,
    title: "Warehouse Support",
    desc: "Flexible warehouse space and operations support for peak seasons.",
  },
];

export default function About() {
  return (
    <section id="business" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#D9232D" }}
            >
              For Business
            </p>
            <h2
              className="font-black text-gray-900 mb-6 leading-tight"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
              }}
            >
              Helping Edmonton
              <br />
              Businesses Ship Smarter
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              From startups to established enterprises, our end-to-end
              fulfillment and logistics solutions are designed to scale with
              your business needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((sol, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 flex gap-4 group hover:shadow-md transition-shadow duration-300"
                  style={{ border: "1px solid #f3f4f6" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(217,35,45,0.08)",
                      color: "#D9232D",
                    }}
                  >
                    {sol.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      {sol.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Warehouse image */}
          <FadeUp delay={200}>
            <div className="rounded-3xl overflow-hidden bg-gray-200 aspect-square max-w-lg ml-auto">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=800&fit=crop&auto=format"
                alt="Business fulfillment warehouse operations"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
