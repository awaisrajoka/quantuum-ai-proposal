import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Quantuum AI MVP - Proposal | BearPlex",
  description: "BearPlex's technical proposal for the Quantuum AI execution assurance platform MVP.",
  openGraph: {
    title: "Quantuum AI MVP - Proposal | BearPlex",
    description: "BearPlex's technical proposal for the Quantuum AI execution assurance platform MVP.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-[#050505] text-white/70 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
