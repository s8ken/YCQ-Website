import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import ConsoleStatusBanner from "@/components/ConsoleStatusBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonate by YCQ Labs — AI Trust Infrastructure with SYMBI Trust Framework",
  description: "Enterprise AI trust platform featuring SYMBI Trust Framework by YCQ Labs Labs. Cryptographic audit trails, automated compliance scoring, W3C-compliant DID/VC infrastructure. 6 trust principles mapped to EU AI Act &amp; GDPR. Try live demo.",
  keywords: "AI trust, SYMBI trust framework, cryptographic receipts, compliance automation, EU AI Act, GDPR, trust ledger, verifiable credentials, DID, AI governance, ethical AI, YCQ Labs Labs",
  authors: [{ name: "YCQ Labs Labs" }],
  openGraph: {
    title: "Sonate by YCQ Labs Labs — AI Trust Infrastructure",
    description: "Cryptographic trust receipts for AI. Automated compliance scoring. Built on SYMBI Trust Protocol with 6 fundamental trust principles.",
    url: "https://yseeku.com",
    siteName: "Sonate by YCQ Labs Labs",
    images: [
      {
        url: "https://yseeku.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonate by YCQ Labs Labs - AI Trust Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonate by YCQ Labs Labs — AI Trust Infrastructure",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ConsoleStatusBanner /> */}
        {children}
      </body>
    </html>
  );
}
