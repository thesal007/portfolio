import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import "./globals.css";
import Footer from "@/components/ui/footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "DevPortfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
