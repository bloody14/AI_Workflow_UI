import type { Metadata, Viewport } from "next";
// 1. Import directly from the local geist package instead of Google Fonts
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Armory | Power your future with AI",
  description: "Premium B2B SaaS platform for AI integration. Build logic at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        // 2. Update the variables here to match the new imports
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased selection:bg-white/20`}
      >
        <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
          {/* Faint Global Radial Gradient */}
          <div className="fixed inset-0 top-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.03)_0%,transparent_50%)] z-0" />
          
          <div className="relative z-10 w-full flex flex-col items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}