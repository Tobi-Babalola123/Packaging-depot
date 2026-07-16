"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "../utils";

const faqs = [
  {
    q: "What can I ship?",
    a: "We ship documents, parcels, fragile items, oversized goods, and freight — both domestically across Canada and internationally to over 200 countries. Our expert team will assess your item and recommend the best packing and shipping solution.",
  },
  {
    q: "How much does shipping cost?",
    a: "Shipping costs depend on the weight, dimensions, destination, and courier selected. We offer discounted rates through our partnerships with FedEx, DHL, Purolator, Canpar, and Loomis — often 20–40% below retail. Visit us or call for a free quote.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We offer worldwide shipping to over 200 countries. We handle all customs documentation, duties guidance, and work with internationally trusted couriers to ensure safe, timely delivery.",
  },
  {
    q: "Do you offer business accounts?",
    a: "Absolutely. We have dedicated business accounts with volume discounts, scheduled pickups, invoicing options, and fulfillment services tailored for growing businesses. Contact us to set up your account.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery times vary by destination and courier. Local Alberta deliveries can arrive next business day, Canadian shipments typically 1–5 business days, and international deliveries 3–14 business days depending on the country.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#D9232D" }}
            >
              FAQs
            </p>
            <h2
              className="font-black text-gray-900"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
              }}
            >
              Common Shipping Questions
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 group hover:text-red-600 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-gray-400 group-data-[state=open]:rotate-180 transition-transform duration-300"
                  />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeUp>
      </div>

      <style>{`
        @keyframes accordion-down {
          from { height: 0; }
          to { height: var(--radix-accordion-content-height); }
        }
        @keyframes accordion-up {
          from { height: var(--radix-accordion-content-height); }
          to { height: 0; }
        }
        .data-[state=open]\\:animate-accordion-down[data-state=open] {
          animation: accordion-down 0.25s ease;
        }
        .data-[state=closed]\\:animate-accordion-up[data-state=closed] {
          animation: accordion-up 0.25s ease;
        }
      `}</style>
    </section>
  );
}
