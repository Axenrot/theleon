import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://theleon.pro"),
  title: {
    default: "Leon | Web Developer",
    template: "theleon.pro",
  },
  description: "Web Developer | 𝘙𝘦𝘢𝘤𝘵 • 𝘕𝘰𝘥𝘦 • 𝘕𝘦𝘹𝘵",
  openGraph: {
    title: "Leon | Web Developer",
    description: "Presentation of Yuri Leon",
    url: "https://TheLeon.Pro",
    siteName: "TheLeon.Pro",
    images: "/og.png",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "TheLeon",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
