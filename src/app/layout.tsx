import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    default: "Event Styling & Prop Hire Melbourne | iDo Events",
    template: "%s | iDo Events",
  },
  description:
    "Melbourne's trusted event styling and prop hire. Weddings, birthdays, christenings, corporate events — styled and delivered across 30+ suburbs. Free quotes.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://idoeventss.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    siteName: "iDo Events",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/gallery/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "iDo Events — Event Styling & Prop Hire Melbourne",
      },
    ],
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
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="theme-color" content="#FAFAF8" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.receptflow.com" />
      </head>
      <body className="pb-[72px] antialiased lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-sage focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        <Header />
        <main id="main-content">{children}</main>
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
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
