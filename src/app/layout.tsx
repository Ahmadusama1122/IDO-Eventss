import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans, Dancing_Script } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IDO Events | Event Styling & Prop Hire Melbourne",
    template: "%s | IDO Events Melbourne",
  },
  description:
    "Melbourne's trusted event styling and prop hire specialists. Weddings, birthdays, christenings, corporate events — beautifully styled and delivered to your door.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    siteName: "IDO Events",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dancingScript.variable}`}
    >
      <body className="pb-[72px] antialiased lg:pb-0">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
        <Script
          src="https://www.receptflow.com/widget.js"
          data-business-id="38"
          data-embed-key="da8f2a56-3972-4394-b404-61ab2e2b6313"
          data-color="#0066FF"
          data-greeting="Hi! How can I help you today?"
          data-agent="IDO Eventss"
          data-theme="auto"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
