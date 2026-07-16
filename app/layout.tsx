import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";

import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Packaging Depot Edmonton | Shipping, Packaging & Freight Services",
  icons: {
    icon: "/images/packagingdepot.png",
    shortcut: "/images/packagingdepot.png",
    apple: "/images/packagingdepot.png",
  },

  description:
    "Packaging Depot Edmonton provides professional shipping, packaging, courier, freight, international shipping, business fulfillment, and packaging supplies. Serving individuals and businesses across Edmonton and Alberta since 2004.",
  keywords: [
    "Packaging Depot Edmonton",
    "Packaging Depot",
    "shipping Edmonton",
    "courier services Edmonton",
    "international shipping",
    "FedEx Edmonton",
    "UPS Edmonton",
    "DHL Edmonton",
    "Purolator Edmonton",
    "Canada Post shipping",
    "professional packaging",
    "business fulfillment",
    "freight shipping",
    "packaging supplies",
    "parcel delivery",
    "shipping supplies Edmonton",
    "commercial shipping",
    "warehouse fulfillment",
    "Edmonton courier",
    "shipping store Edmonton",
  ],
  authors: [
    {
      name: "Packaging Depot Edmonton",
    },
  ],
  creator: "Packaging Depot Edmonton",
  publisher: "Packaging Depot Edmonton",
  applicationName: "Packaging Depot Edmonton",
  category: "Shipping & Packaging Services",
  metadataBase: new URL("https://packagingdepot.ca"), // Update if the official domain differs
  openGraph: {
    title: "Packaging Depot Edmonton | Shipping, Freight & Packaging Experts",
    description:
      "Professional shipping, packaging, courier, freight, and business fulfillment services with two convenient Edmonton locations. Trusted since 2004.",
    url: "https://packagingdepot.ca",
    siteName: "Packaging Depot Edmonton",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Depot Edmonton | Shipping & Packaging Services",
    description:
      "Reliable shipping, packaging, courier, freight, and international delivery services throughout Edmonton and Alberta.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
