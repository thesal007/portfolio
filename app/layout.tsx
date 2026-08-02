import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Navbar } from "@/components/ui/src/navbar";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: '400',
  subsets: ["latin"],   
  display: "swap",    
  style: ["normal"]
});

export const metadata: Metadata = {
  title: "DevPortfolio",
  description: "Building digital experiences that matter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.className}>
      <body className="bg-[#0a0a0f] text-white"> 
        <AppRouterCacheProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
