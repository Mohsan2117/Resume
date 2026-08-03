import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohsan Iqbal CV",
  description:
    "Frontend Engineer | React, Next.js — Mohsan Iqbal resume and portfolio.",
  icons: {
    icon: "/images/Untitled-1.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="/css/pillar-1.css" />
        <link rel="stylesheet" href="/css/cv-overrides.css" />
        <link rel="stylesheet" href="/css/icon-bridge.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
