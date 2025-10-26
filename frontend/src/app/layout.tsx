// src/app/layout.tsx
import type { Metadata } from "next";
import { Nunito, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "./StoreProvider";
import { ThemeProvider } from "@/components/theme-provider";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://agrivaulture.manuru.dev";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Agrivaulture",
    default: "Agrivaulture — Smart Farming, Powerful Insights",
  },
  description:
    "Agrivaulture is a smart agriculture platform that empowers farmers with real-time weather insights, crop cycle tracking, commodity price updates, and personalized farming guidance powered by historical data.",
  keywords: [
    "Agrivaulture",
    "smart agriculture",
    "precision farming",
    "agritech",
    "crop insights",
    "weather for farmers",
    "commodity prices",
    "farming technology",
    "agriculture platform",
    "sustainable farming",
  ],
  authors: [{ name: "Agrivaulture" }],
  creator: "Nurudeen Abdul-Majeed",
  publisher: "Agrivaulture",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Agrivaulture — Smart Farming, Powerful Insights",
    description:
      "Real-time insights and data-driven farming tools to support local farmers and boost productivity with technology that works in the field.",
    url: baseUrl,
    siteName: "Agrivaulture",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agrivaulture Farmers Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrivaulture — Smart Farming, Powerful Insights",
    description:
      "Supporting farmers with weather insights, crop tracking, pricing trends, and smarter decisions through data.",
    site: "@agrivaulture",
    images: ["/og-image.png"],
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
        suppressHydrationWarning
        className={`${nunito.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Agrivaulture",
                "url": "${baseUrl}",
                "logo": "${baseUrl}/open-graph-images/og-image.png"
              }
            `,
            }}
          />
        </head>

        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 5000 }}
            />
            <main>{children}</main>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
