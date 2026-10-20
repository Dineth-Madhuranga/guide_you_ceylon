import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guideyouceylon.com"),
  title: "Guide You Ceylon | Wilderness Trekking & Camping Expeditions Sri Lanka",
  description:
    "Sri Lanka's trusted wilderness adventure agency. Specializing in 1-day and multi-day trekking & camping expeditions across the UNESCO Knuckles Mountain Range, Pekoe Trail, and Central Highlands.",
  keywords: [
    "Guide You Ceylon",
    "Knuckles Mountain Range",
    "Sri Lanka Trekking",
    "Sri Lanka Hiking",
    "Wild Camping Sri Lanka",
    "Duwili Ella Cave Camping",
    "Kotaganga Waterfalls",
    "Yahangala Hike",
    "Thunhisgala Trek",
    "Adventure Tours Sri Lanka",
  ],
  authors: [{ name: "Guide You Ceylon" }],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Guide You Ceylon | Wilderness Trekking & Camping Expeditions",
    description:
      "Real expeditions, not tourist walks. Guided trekking, cave camping, and waterfall adventures in Sri Lanka.",
    url: "https://guideyouceylon.com",
    siteName: "Guide You Ceylon",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Guide You Ceylon Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased selection:bg-foreground selection:text-background">
        {children}
      </body>
    </html>
  );
}
