import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { AppProvider } from "@/contexts/AppContext";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "audiophile",
  description: "Bringing you the best audio gear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
