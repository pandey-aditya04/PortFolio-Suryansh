import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { siteConfig } from "@/lib/constants";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'Suryansh Srivastava — UI/UX & Graphic Designer',
  description: 'Portfolio of Suryansh Srivastava — graphic design, AI videos, carousels, menus and social media posts.',
  metadataBase: new URL('https://suryanshsrivastavaa.vercel.app'),
  openGraph: {
    title: 'Suryansh Srivastava — Designer',
    description: 'UI/UX & Graphic Designer — AI Videos, Carousels, Edits, Menus',
    url: 'https://suryanshsrivastavaa.vercel.app',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suryansh Srivastava — Designer',
    images: ['/og-image.png'],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <div className="grain-overlay" />
            <div className="glow-blob top-[-10%] left-[-10%]" />
            <div className="glow-blob bottom-[-10%] right-[-10%]" />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
