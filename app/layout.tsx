import type { Metadata } from "next";
import { Aperture } from "lucide-react";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

// const inter = Inter({ subsets: ["latin"] });

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
      <Suspense
        fallback={
          <body className="flex items-center justify-center w-full h-screen overflow-hidden">
            <span className="animate-spin w-fit h-fit">
              <Aperture size={36} />
            </span>
          </body>
        }
      >
        <body className={"flex flex-col w-full h-full"}>{children}</body>
      </Suspense>
    </html>
  );
}
