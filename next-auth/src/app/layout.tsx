import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalStyles from "@/styles/GlobalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication App",
  description: "Modern authentication app with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
