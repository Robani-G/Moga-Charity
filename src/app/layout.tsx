import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Moga Charity",
  description: "Moga Charity Assoaction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` container mx-auto  `}>
        <Toaster position="top-right" />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
