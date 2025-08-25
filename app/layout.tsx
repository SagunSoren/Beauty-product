import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Velvety-beautyproductapp",
  description: "Made by Sagun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cormorant.className}>{children}</body>
    </html>
  );
}
