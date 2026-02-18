import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SONATE | AI Trust Infrastructure",
  description: "Cryptographic trust receipts and real-time policy evaluation for AI systems. Built on the SONATE Trust Protocol.",
  keywords: "AI trust, SONATE, cryptographic receipts, trust protocol, AI governance, policy evaluation, trust receipts, AI compliance",
  authors: [{ name: "YCQ Labs" }],
  openGraph: {
    title: "SONATE — AI Trust Infrastructure",
    description: "Cryptographic trust receipts for every AI interaction. Real-time policy evaluation. Verifiable compliance.",
    url: "https://yseeku.com",
    siteName: "SONATE by YCQ Labs",
    images: [
      {
        url: "https://yseeku.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SONATE - AI Trust Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SONATE — AI Trust Infrastructure",
    description: "Cryptographic trust receipts for AI. Try the live demo.",
    images: ["https://yseeku.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <SiteNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
