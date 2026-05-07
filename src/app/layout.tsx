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
  title: 'Suryansh Srivastava | AI Visual Creator & Motion Artist',
  description: 'The creative portfolio of Suryansh Srivastava — specializing in premium AI video synthesis, cinematic motion arts, and high-fidelity brand storytelling. Transforming visions into cinematic digital experiences.',
  keywords: ['AI Visual Creator', 'Motion Artist', 'AI Video Synthesis', 'Cinematic Brand Storytelling', 'Graphic Designer', 'Runway ML', 'Higgsfield AI', 'Video Editing Portfolio', 'Premium Web Design'],
  authors: [{ name: 'Suryansh Srivastava' }],
  creator: 'Suryansh Srivastava',
  publisher: 'Suryansh Srivastava',
  metadataBase: new URL('https://suryanshsrivastavaa.vercel.app'),
  openGraph: {
    title: 'Suryansh Srivastava | AI Visual Creator & Motion Artist',
    description: 'High-end AI Video Synthesis & Cinematic Motion Arts. Explore the portfolio of Suryansh Srivastava.',
    url: 'https://suryanshsrivastavaa.vercel.app',
    siteName: 'Suryansh Srivastava Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Suryansh Srivastava — AI Visual Creator & Motion Artist Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suryansh Srivastava | AI Visual Creator & Motion Artist',
    description: 'Specializing in premium AI video synthesis and cinematic brand storytelling.',
    images: ['/og-image.png'],
    creator: '@Suryansh_S',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
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
            <InteractiveBackground />
            <div className="grain-overlay" />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
