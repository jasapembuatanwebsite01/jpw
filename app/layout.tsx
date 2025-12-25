import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JPW - Jasa Pembuatan Website",
  description: "JPW membantu bisnis punya website profesional dan siap jualan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <Navbar />
        {/* Offset tinggi navbar */}
        <main className="pt-20 lg:pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
