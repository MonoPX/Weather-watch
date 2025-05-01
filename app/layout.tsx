import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("http://weatherwatch-kv.vercel.app"),
  title: {
    default: "WeatherWatch - Your Personal Weather Companion",
    template: "%s | WeatherWatch",
  },
  description:
    "WeatherWatch provides real-time weather updates, forecasts, and interactive visualizations. Track temperature, humidity, wind speed, and more with our beautiful, modern interface.",
  keywords: [
    "weather watch",
    "weather app",
    "weather forecast",
    "real-time weather",
    "weather tracking",
    "weather dashboard",
    "weather visualization",
    "weather radar",
    "temperature forecast",
    "weather monitoring",
  ],
  authors: [{ name: "WeatherWatch Team" }],
  creator: "WeatherWatch",
  publisher: "WeatherWatch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Weather",
  applicationName: "WeatherWatch",

  // Open Graph metadata
  openGraph: {
    type: "website",
    siteName: "WeatherWatch",
    title: "WeatherWatch - Your Personal Weather Companion",
    description:
      "Track real-time weather conditions with beautiful visualizations. Get accurate forecasts, temperature trends, and weather alerts.",
    url: "http://weatherwatch-kv.vercel.app",
    images: [
      {
        url: "http://weatherwatch-kv.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WeatherWatch - Your Personal Weather Companion",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "WeatherWatch - Your Personal Weather Companion",
    description:
      "Track real-time weather conditions with beautiful visualizations. Get accurate forecasts, temperature trends, and weather alerts.",
    images: ["http://weatherwatch-kv.vercel.app/twitter-image"],
    creator: "@weatherwatch",
  },

  // Verification for search engines
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },

  // Alternate languages/versions
  alternates: {
    canonical: "http://weatherwatch-kv.vercel.app",
  },

  // App specific metadata
  appleWebApp: {
    title: "WeatherWatch",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.openweathermap.org" />
        <link rel="canonical" href="http://weatherwatch-kv.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "WeatherWatch",
              url: "http://weatherwatch-kv.vercel.app",
              description:
                "WeatherWatch provides real-time weather updates, forecasts, and interactive visualizations.",
              applicationCategory: "Weather",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              screenshot: "http://weatherwatch-kv.vercel.app/opengraph-image",
              featureList:
                "Real-time weather updates, Interactive visualizations, 5-day forecast, Temperature trends",
              author: {
                "@type": "Organization",
                name: "WeatherWatch Team",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
