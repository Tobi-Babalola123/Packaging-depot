"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FadeUp } from "../utils";

const contactInfo = [
  {
    icon: <Phone size={18} />,
    label: "West Edmonton",
    value: "780-803-3376 ",
  },
  { icon: <Phone size={18} />, label: "Kingsway", value: "780-454-8345" },
  {
    icon: <Mail size={18} />,
    label: "Email Us",
    value: "packagingdepotedm@gmail.com, packagingdepot.kingsway@gmail.com",
  },
  {
    icon: <MapPin size={18} />,
    label: "West Edmonton",
    value: "6641 177 St NW, Edmonton, AB, T5T 4K3",
  },
  {
    icon: <MapPin size={18} />,
    label: "Kingsway",
    value: "11905 111 Avenue Northwest,mEdmonton, AB, T5G 0E4",
  },
  {
    icon: <Clock size={18} />,
    label: "Business Hours",
    value: "Mon–Fri: 8:30am–6pm\nSat: 9am–4pm",
  },
];

const shippingTypes = [
  "Courier Shipping (Domestic)",
  "International Shipping",
  "Freight / Oversized",
  "Business Fulfillment",
  "Professional Packaging",
  "Packaging Supplies",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  business: string;
  type: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  business: "",
  type: "",
  message: "",
};

const inputStyle = { background: "#f4f5f7", border: "1.5px solid transparent" };
const focusStyle = { border: "1.5px solid #D9232D", background: "white" };
const blurStyle = { border: "1.5px solid transparent", background: "#f4f5f7" };

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);

  const set =
    (key: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setFormData((d) => ({ ...d, [key]: e.target.value }));

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#D9232D" }}
            >
              Get In Touch
            </p>
            <h2
              className="font-black text-gray-900 mb-4"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
              }}
            >
              Contact Packaging Depot
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Fill out the form below and our team will get back to you within
              one business day.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <FadeUp className="lg:col-span-3">
            <div
              className="bg-white rounded-3xl p-8"
              style={{
                border: "1px solid #f3f4f6",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {(
                  [
                    {
                      label: "Full Name",
                      key: "name" as const,
                      type: "text",
                      placeholder: "John Smith",
                    },
                    {
                      label: "Email Address",
                      key: "email" as const,
                      type: "email",
                      placeholder: "john@company.com",
                    },
                    {
                      label: "Phone Number",
                      key: "phone" as const,
                      type: "tel",
                      placeholder: "(780) 000-0000",
                    },
                    {
                      label: "Business Name",
                      key: "business" as const,
                      type: "text",
                      placeholder: "Company Inc.",
                    },
                  ] as const
                ).map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={set(field.key)}
                      className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 outline-none transition-all"
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Shipping Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={set("type")}
                    className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 outline-none appearance-none transition-all"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  >
                    <option value="">Select shipping type...</option>
                    {shippingTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your shipment or question..."
                    value={formData.message}
                    onChange={set("message")}
                    className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 outline-none resize-none transition-all"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  />
                </div>
              </div>

              <button
                className="
    mt-6
    w-full
    px-5
    py-4
    rounded-xl
    font-bold
    text-white
    text-sm
    sm:text-base
    leading-6
    text-center
    whitespace-normal
    break-words
    transition-all
    duration-200
    hover:scale-[1.02]
    active:scale-[0.98]
  "
                style={{
                  background: "#D9232D",
                  boxShadow: "0 6px 20px rgba(217,35,45,0.35)",
                }}
              >
                Send Message — We'll Respond Within 24 Hours
              </button>
            </div>
          </FadeUp>

          {/* Business info */}
          <FadeUp delay={150} className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl"
                  style={{ background: "#f9fafb", border: "1px solid #f3f4f6" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(217,35,45,0.08)",
                      color: "#D9232D",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-gray-800 whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map thumbnail */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=340&fit=crop&auto=format"
                  alt="Edmonton map location"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Edmonton+Alberta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2"
                    style={{
                      background: "#D9232D",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                    }}
                  >
                    <MapPin size={14} /> View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
