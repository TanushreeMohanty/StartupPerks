import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure your Navbar is imported

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StartupPerks | Exclusive Founder Benefits",
  description: "Unlock premium SaaS deals and partnerships for your early-stage team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-white`}
      >
        <Navbar /> {/* This ensures the Navbar is on every page */}
        {children}
      </body>
    </html>
  );
}