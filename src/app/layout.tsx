import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Find the best car rental deals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
