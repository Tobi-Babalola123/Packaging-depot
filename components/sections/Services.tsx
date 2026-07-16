"use client";

import { motion } from "framer-motion";
import {
  Package,
  Truck,
  Globe,
  Building2,
  Container,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Package size={28} />,
    title: "Professional Packaging",
    desc: "Secure packaging for fragile, oversized and valuable items. Custom crating available.",
  },
  {
    icon: <Truck size={28} />,
    title: "Courier Shipping",
    desc: "Discounted FedEx, DHL, Purolator, Canpar and Loomis shipping with daily pickups.",
  },
  {
    icon: <Globe size={28} />,
    title: "International Shipping",
    desc: "Worldwide document and parcel delivery with full customs documentation support.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Business Fulfillment",
    desc: "Pick, pack and ship services for growing businesses with dedicated account management.",
  },
  {
    icon: <Container size={28} />,
    title: "Freight Services",
    desc: "Domestic and international freight solutions — LTL, FTL, and oversized cargo.",
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "Packaging Supplies",
    desc: "Boxes, bubble wrap, tape, labels and all shipping materials at competitive prices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#D9232D" }}
          >
            Our Services
          </p>
          <h2
            className="font-black text-gray-900 mb-4"
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
            }}
          >
            Shipping Solutions for Every Need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From a single envelope to full freight, we have the expertise and
            partnerships to ship anything, anywhere.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.05,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white rounded-2xl p-7 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                border: "1px solid #f3f4f6",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.04 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-red-600"
                style={{
                  background: "rgba(217,35,45,0.08)",
                  color: "#D9232D",
                }}
              >
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </motion.div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div
                className="mt-5 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#D9232D" }}
              >
                Learn more <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
