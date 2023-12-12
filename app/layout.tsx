import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ChillWay",
  description: "ChillWay 的个人站点",
  authors: [{ name: "ChillWay" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="max-w-3xl mx-auto px-2">
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
