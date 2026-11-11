
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../app/components/layout/Navbar";

export const metadata: Metadata = {
  title: "PitchBook | Rezervo fushën tënde",
  description:
    "Gjej dhe rezervo fusha futbolli dhe salla sportive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body className="min-h-screen bg-[#202734] text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
