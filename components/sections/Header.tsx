"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { motionEase, scrollTo } from "../utils";
import Image from "next/image";

const navLinks = [
  "Home",
  "Services",
  "Business Solutions",
  "Packaging Supplies",
  "Locations",
  "Contact",
];

const sectionIds: Record<string, string> = {
  Home: "hero",
  Services: "services",
  "Business Solutions": "business",
  "Packaging Supplies": "services",
  Locations: "locations",
  Contact: "contact",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (link: string) => {
    scrollTo(sectionIds[link]);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: motionEase }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.98)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ height: 72 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: motionEase }}
          className="flex items-center gap-1 flex-shrink-0"
        >
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/packagingdepot.png"
              alt="Packaging Depot Edmonton Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div>
            <span
              className="font-bold text-sm leading-tight block"
              style={{
                color: scrolled ? "#D9232D" : "white",
                letterSpacing: "0.02em",
              }}
            >
              PACKAGING
            </span>

            <span
              className="font-bold text-sm leading-tight block"
              style={{
                color: scrolled ? "#D9232D" : "white",
                letterSpacing: "0.02em",
              }}
            >
              DEPOT
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: motionEase, delay: 0.08 }}
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <motion.button
              key={link}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav(link)}
              className="px-3 py-2 text-sm font-medium rounded-lg relative overflow-hidden transition-colors hover:bg-white/10"
              style={{ color: scrolled ? "#374151" : "rgba(255,255,255,0.9)" }}
            >
              <span className="relative z-10">{link}</span>
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                className="absolute left-3 right-3 bottom-1.5 h-0.5 rounded-full origin-left"
                style={{ background: scrolled ? "#D9232D" : "white" }}
              />
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: motionEase, delay: 0.12 }}
          className="hidden lg:flex items-center gap-4"
        >
          <a
            href="tel:+17801234567"
            className="text-sm font-medium flex items-center gap-1.5"
            style={{ color: scrolled ? "#374151" : "rgba(255,255,255,0.9)" }}
          >
            <Phone size={14} />
            (780) 123-4567
          </a>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "#D9232D",
              boxShadow: "0 4px 14px rgba(217,35,45,0.35)",
            }}
          >
            Get a Shipping Quote
          </motion.button>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden p-2 rounded-lg"
          style={{ color: scrolled ? "#111827" : "white" }}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: motionEase }}
            className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNav(link)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                {link}
              </motion.button>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3 space-y-3">
              <a
                href="tel:+17801234567"
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Phone size={14} /> (780) 123-4567
              </a>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  scrollTo("contact");
                  setMobileOpen(false);
                }}
                className="w-full py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: "#D9232D" }}
              >
                Get a Shipping Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
