import type { Metadata } from "next";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport = {
  themeColor: "#0e0d0c",
};

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Auric Performance | Physical Performance Coaching",
    template: "%s | Auric Performance",
  },
  description:
    "Evidence-informed performance coaching engineered for the top 1%. 1:1 coaching, Outrun, Outlift and Outperform with Alex and Courtney.",
  metadataBase: new URL("https://auric-performance.vercel.app"),
  openGraph: {
    title: "Auric Performance | Physical Performance Coaching",
    description:
      "Evidence-informed performance coaching engineered for the top 1%.",
    type: "website",
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
        className={`${bebas.variable} ${oswald.variable} ${inter.variable}`}
        style={
          {
            "--title": bebas.style.fontFamily,
            "--sub": oswald.style.fontFamily,
            "--body": inter.style.fontFamily,
            fontFamily: inter.style.fontFamily,
          } as React.CSSProperties
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
