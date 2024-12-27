import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  weight: '400',
  variable: "--font-inter",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Movie Picker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
