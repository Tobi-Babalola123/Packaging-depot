"use client";

import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { FadeUp } from "../utils";

const locations = [
  {
    name: "West Edmonton",
    address: "17515 – 108 Ave NW, Edmonton, AB T5S 1E1",
    phone: "(780) 484-0033",
    hours: "Mon–Fri: 8:30am–6:00pm\nSat: 9:00am–4:00pm\nSun: Closed",
  },
  {
    name: "Kingsway (Central Edmonton)",
    address: "10405 Jasper Ave NW, Edmonton, AB T5J 3N4",
    phone: "(780) 428-0088",
    hours: "Mon–Fri: 8:30am–6:00pm\nSat: 9:00am–4:00pm\nSun: Closed",
  },
];

export default function Industries() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#D9232D" }}
            >
              Find Us
            </p>
            <h2
              className="font-black text-gray-900 mb-4"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
              }}
            >
              Two Convenient Edmonton Locations
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map illustration */}
          <FadeUp>
            <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-square relative">
              <div
                className="w-full h-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, #e8f4f8, #d1e9f5)",
                }}
              >
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full p-8"
                  style={{ maxHeight: 420 }}
                >
                  {/* Roads */}
                  <line
                    x1="200"
                    y1="0"
                    x2="200"
                    y2="400"
                    stroke="#c5d8e8"
                    strokeWidth="6"
                  />
                  <line
                    x1="0"
                    y1="200"
                    x2="400"
                    y2="200"
                    stroke="#c5d8e8"
                    strokeWidth="6"
                  />
                  <line
                    x1="0"
                    y1="140"
                    x2="400"
                    y2="140"
                    stroke="#d1dde8"
                    strokeWidth="3"
                  />
                  <line
                    x1="0"
                    y1="260"
                    x2="400"
                    y2="260"
                    stroke="#d1dde8"
                    strokeWidth="3"
                  />
                  <line
                    x1="140"
                    y1="0"
                    x2="140"
                    y2="400"
                    stroke="#d1dde8"
                    strokeWidth="3"
                  />
                  <line
                    x1="260"
                    y1="0"
                    x2="260"
                    y2="400"
                    stroke="#d1dde8"
                    strokeWidth="3"
                  />
                  {/* River */}
                  <path
                    d="M 0 230 Q 100 210 200 240 Q 300 270 400 250"
                    fill="none"
                    stroke="#93c5d8"
                    strokeWidth="12"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  {/* West Edmonton pin */}
                  <g transform="translate(100, 150)">
                    <circle r="18" fill="#D9232D" />
                    <circle r="8" fill="white" />
                    <text
                      x="0"
                      y="38"
                      textAnchor="middle"
                      fill="#111827"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="Inter"
                    >
                      West Edmonton
                    </text>
                  </g>
                  {/* Kingsway pin */}
                  <g transform="translate(270, 130)">
                    <circle r="18" fill="#D9232D" />
                    <circle r="8" fill="white" />
                    <text
                      x="0"
                      y="38"
                      textAnchor="middle"
                      fill="#111827"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="Inter"
                    >
                      Kingsway
                    </text>
                  </g>
                  <text
                    x="200"
                    y="360"
                    textAnchor="middle"
                    fill="#6b7280"
                    fontSize="13"
                    fontFamily="Inter"
                    fontWeight="600"
                  >
                    Edmonton, Alberta
                  </text>
                </svg>
              </div>
            </div>
          </FadeUp>

          {/* Location cards */}
          <div className="flex flex-col gap-6">
            {locations.map((loc, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div
                  className="rounded-2xl p-7 flex-1"
                  style={{
                    border: "1.5px solid #f3f4f6",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-1">
                        {loc.name}
                      </h3>
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(217,35,45,0.08)",
                          color: "#D9232D",
                        }}
                      >
                        Open Today
                      </span>
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(217,35,45,0.08)" }}
                    >
                      <MapPin size={18} style={{ color: "#D9232D" }} />
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex gap-3">
                      <MapPin
                        size={14}
                        className="flex-shrink-0 mt-0.5 text-gray-400"
                      />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex gap-3">
                      <Phone
                        size={14}
                        className="flex-shrink-0 mt-0.5 text-gray-400"
                      />
                      <a
                        href={`tel:${loc.phone.replace(/\D/g, "")}`}
                        className="hover:text-red-600 transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <Clock
                        size={14}
                        className="flex-shrink-0 mt-0.5 text-gray-400"
                      />
                      <span className="whitespace-pre-line leading-relaxed">
                        {loc.hours}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                    style={{ background: "#D9232D", color: "white" }}
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
