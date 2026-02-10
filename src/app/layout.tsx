import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonate by YCQ Labs — AI Trust Infrastructure with SONATE Trust Framework",
  description: "Enterprise AI trust platform featuring SONATE Trust Framework by YCQ Labs. Cryptographic audit trails, automated compliance scoring, W3C-compliant DID/VC infrastructure. 6 trust principles mapped to EU AI Act & GDPR. Try live demo.",
  keywords: "AI trust, SONATE trust framework, cryptographic receipts, compliance automation, EU AI Act, GDPR, trust ledger, verifiable credentials, DID, AI governance, ethical AI, YCQ Labs",
  authors: [{ name: "YCQ Labs" }],
  openGraph: {
    title: "Sonate by YCQ Labs — AI Trust Infrastructure",
    description: "Cryptographic trust receipts for AI. Automated compliance scoring. Built on SONATE Trust Protocol with 6 fundamental trust principles.",
    url: "https://yseeku.com",
    siteName: "Sonate by YCQ Labs",
    images: [
      {
        url: "https://yseeku.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonate by YCQ Labs - AI Trust Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonate by YCQ Labs — AI Trust Infrastructure",
    description: "Cryptographic trust receipts for AI. Try live demo at yseeku.com/trust-demo",
    images: ["https://yseeku.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
