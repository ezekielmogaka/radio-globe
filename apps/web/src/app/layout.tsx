import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono", 
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001",
  ),
  title: "Radio Globe Next - Explore World Radio",
  description:
    "Discover radio stations from around the world with our interactive 3D globe and AI-powered recommendations.",
  keywords: ["radio", "music", "global", "3D", "stations", "discover"],
  authors: [{ name: "Radio Globe Team" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Radio Globe",
  },
  openGraph: {
    type: "website",
    siteName: "Radio Globe Next",
    title: "Radio Globe Next - Explore World Radio",
    description:
      "Discover radio stations from around the world with our interactive 3D globe.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Globe Next",
    description: "Discover radio stations from around the world",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [{ url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icon-152x152.png", sizes: "152x152", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000000" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="stylesheet" href="/cesium/Widgets/widgets.css" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
