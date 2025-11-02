import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// @ts-ignore - allow side-effect CSS import without type declarations
import "./globals.css";
import SmoothScrolling from "@/lib/SmoothScrolling";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-sans",
});

export const metadata: Metadata = {
  title: "Sanjai Kumar .M • Quality Control Engineer | Mechanical Engineering Graduate",
  description:
    "Portfolio of Sanjai Kumar .M, a B.Tech Mechanical Engineering graduate specializing in Quality Control, Production Line Management, and Manufacturing Excellence. Currently at BRIGHT BROTHERS Ltd.",
  keywords: [
    "Portfolio",
    "Quality Control Engineer",
    "Mechanical Engineer",
    "Manufacturing",
    "QC Activities",
    "PPM Calculation",
    "ISO Standards",
    "APQP",
    "PPAP",
    "FMEA",
    "7QC Tools",
    "Sanjai Kumar",
  ],
  authors: [{ name: "Sanjai Kumar .M", url: "https://www.sanjaikumar.tech/" }],
  themeColor: "#007ACC",
  openGraph: {
    title: "Sanjai Kumar .M • Quality Control Engineer | Mechanical Engineering Graduate",
    description:
      "B.Tech Mechanical Engineering graduate with expertise in Quality Control, Manufacturing Excellence, and Production Line Management at BRIGHT BROTHERS Ltd.",
    url: "https://www.sanjaikumar.tech/",
    siteName: "Sanjai Kumar .M Portfolio",
    images: [
      {
        url: "https://www.sanjaikumar.tech/assets/my/my-blue-bg.png",
        width: 1200,
        height: 630,
        alt: "Sanjai Kumar .M Quality Control Engineer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjai Kumar .M • Quality Control Engineer | Mechanical Engineering Graduate",
    description:
      "Quality Control Engineer specializing in manufacturing excellence, QC activities, and production line management.",
    images: ["https://www.sanjaikumar.tech/assets/my/my-blue-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: any;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sanjai Kumar .M" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.sanjaikumar.tech/" />
      </head>
      <body
        className={`${montserrat.className} overflow-hidden bg-background text-foreground antialiased`}
      >
              <GoogleTagManager gtmId="GTM-W3PFBHGG" />
              <GoogleAnalytics gaId="G-2MWS4LLZL0" />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
