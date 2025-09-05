import type { Metadata } from "next";
import { inter } from "@/fonts";
import "./globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Software Systems Labaratory",
  description: "CSED | NITC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
