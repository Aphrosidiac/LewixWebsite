import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEWIX — We Engineer Systems That Run Businesses",
  description:
    "Lewix.ai builds production-grade systems, ERPs, and web applications for businesses that need to move fast.",
  keywords: ["software engineering", "ERP", "web development", "AI", "systems"],
  openGraph: {
    title: "LEWIX — We Engineer Systems That Run Businesses",
    description:
      "Production-grade systems for businesses that need to move fast.",
    url: "https://lewix.ai",
    siteName: "LEWIX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-background text-text-primary antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
