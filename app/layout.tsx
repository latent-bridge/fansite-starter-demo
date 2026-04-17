import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { streamerConfig } from "@/config/streamer.config";

export const metadata: Metadata = {
  title: `${streamerConfig.name} - Fan Site`,
  description: streamerConfig.bio,
};

const brandStyle = {
  "--brand": streamerConfig.brandColor,
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full" style={brandStyle}>
        {children}
      </body>
    </html>
  );
}
