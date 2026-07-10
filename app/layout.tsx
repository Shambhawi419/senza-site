import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senza AI · Voice agents that answer every call",
  description:
    "Senza AI builds AI voice agents that answer, qualify, book, and follow up, inbound and outbound, so your business never sleeps and never misses.",
  metadataBase: new URL("https://senzai.in"),
  openGraph: {
    title: "Senza AI · Voice agents that answer every call",
    description:
      "AI voice agents that answer, qualify, book, and follow up, so your business never sleeps and never misses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll>
          <Preloader />
          <div className="grain" aria-hidden="true" />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
