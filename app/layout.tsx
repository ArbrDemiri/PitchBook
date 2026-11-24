
import type { Metadata } from "next";
import "./globals.css";


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
  
        <main>{children}</main>
      </body>
    </html>
  );
}
