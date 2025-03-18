import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${manrope.className} antialiased`}
        >
          <AppProvider>
            {children}
          </AppProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
