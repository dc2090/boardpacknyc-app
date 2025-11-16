import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BoardPackNYC - Offer-Ready in a Weekend, Not a Month",
  description: "The first AI-assisted platform that walks NYC buyers step-by-step through REBNY Financial Statements and co-op / condo board packages.",
  keywords: ["NYC real estate", "REBNY", "co-op", "condo", "board package", "financial statement"],
  authors: [{ name: "BoardPackNYC" }],
  openGraph: {
    title: "BoardPackNYC - Offer-Ready in a Weekend, Not a Month",
    description: "The first AI-assisted platform for NYC board packages",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
