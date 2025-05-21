import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neurobit Systems – Code Meets Art in AI-Driven Experiences",
  description:
    "Neurobit Systems blends high-performance code with artistic interfaces. Discover Linkoraa – a futuristic platform that redefines digital interaction.",
  keywords: [
    "Neurobit Systems",
    "AI software",
    "futuristic UI",
    "GSAP animation",
    "Next.js application",
    "Linkoraa",
    "software art",
  ],
  openGraph: {
    title: "Neurobit Systems",
    description:
      "Build with code. Felt as art. Explore Linkoraa, our cosmic-grade digital experience.",
    url: "https://neurobit.me",
    siteName: "Neurobit Systems",
    images: [
      {
        url: "/linkoraa.png",
        width: 1200,
        height: 630,
        alt: "Neurobit Systems – Futuristic Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurobit Systems",
    description:
      "Code meets art. Explore the next-gen platform, Linkoraa, by Neurobit Systems.",
    images: ["/linkoraa.png"],
    creator: "@neurobit",
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
        {children}
      </body>
    </html>
  );
}
