import { Inter } from "next/font/google";
import "./globals.css";
import Tabbing from "@/components/Tabbing"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hue Clock",
  description: "Analog clock with hue-color-wheel-based colors",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Tabbing />
        {children}
      </body>
    </html>
  );
}
