"use client";

import Image from "next/image";
import { scrollTo } from "../utils";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const serviceLinks = [
  "Courier Shipping",
  "International Shipping",
  "Business Fulfillment",
  "Freight Services",
  "Professional Packaging",
  "Packaging Supplies",
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/p/Packaging-Depot-Edmonton-100080713959448/", // Replace with actual Facebook URL
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/p/DGd9wbtvv-6/", // Replace with actual Instagram URL
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0d1420" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* ================= BRAND ================= */}

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/packagingdepot.png"
                  alt="Packaging Depot Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <span className="block font-bold text-base text-white">
                  PACKAGING DEPOT
                </span>

                <span className="text-xs text-white/50">Edmonton, Alberta</span>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-7 mb-6">
              Edmonton's trusted shipping, packaging, freight and business
              fulfillment experts since 2004. Serving individuals and businesses
              across Alberta and beyond.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D9232D] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= WEST EDMONTON ================= */}

          <div>
            <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-5">
              West Edmonton
            </h4>

            <div className="space-y-4 text-sm">
              <div className="text-white/60">
                6641 177 St NW
                <br />
                Edmonton, AB T5T 4K3
              </div>

              <div>
                <p className="text-xs text-white/40 mb-1">Phone</p>

                <a
                  href="tel:7808033376"
                  className="text-white hover:text-[#D9232D]"
                >
                  780-803-3376
                </a>
              </div>

              <div>
                <p className="text-xs text-white/40 mb-1">Email</p>

                <a
                  href="mailto:packagingdepotedm@gmail.com"
                  className="text-white hover:text-[#D9232D] break-all"
                >
                  packagingdepotedm@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-white/40 mb-2">Hours</p>

                <div className="text-white/60 leading-7">
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday: 10:00 AM – 3:00 PM
                  <br />
                  Sunday & Holidays: Closed
                </div>
              </div>
            </div>
          </div>

          {/* ================= KINGSWAY ================= */}

          <div>
            <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-5">
              Kingsway
            </h4>

            <div className="space-y-4 text-sm">
              <div className="text-white/60">
                11905 111 Avenue NW
                <br />
                Edmonton, AB T5G 0E4
              </div>

              <div>
                <p className="text-xs text-white/40 mb-1">Phone</p>

                <a
                  href="tel:7804548345"
                  className="text-white hover:text-[#D9232D]"
                >
                  780-454-8345
                </a>
              </div>

              <div>
                <p className="text-xs text-white/40 mb-1">Email</p>

                <a
                  href="mailto:packagingdepot.kingsway@gmail.com"
                  className="text-white hover:text-[#D9232D] break-all"
                >
                  packagingdepot.kingsway@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-white/40 mb-2">Hours</p>

                <div className="text-white/60 leading-7">
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday, Sunday & Holidays: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Packaging Depot Edmonton. All rights
            reserved.
          </p>

          <p className="text-xs text-white/40">
            Serving Edmonton & surrounding areas since 2004
          </p>
        </div>
      </div>

      <style>{`
        * {
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </footer>
  );
}
