import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "James Harrington | Construction Consulting Expert",
    template: "%s | James Harrington Construction Consulting",
  },
  description:
    "Professional construction consulting services by James Harrington, PE. Expert in project management, cost analysis, technical supervision, and risk assessment. Serving property owners and investors.",
  keywords: [
    "construction consulting",
    "project management",
    "cost analysis",
    "technical supervision",
    "risk assessment",
    "contractor evaluation",
    "construction engineer",
  ],
  authors: [{ name: "James Harrington" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamesharringtonconsulting.com",
    siteName: "James Harrington Construction Consulting",
    title: "James Harrington | Construction Consulting Expert",
    description:
      "Professional construction consulting services. Expert in project management, cost analysis, technical supervision, and risk assessment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Harrington | Construction Consulting Expert",
    description:
      "Professional construction consulting services. Expert in project management, cost analysis, technical supervision, and risk assessment.",
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-brand-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
