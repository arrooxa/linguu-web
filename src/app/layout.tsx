import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Linguu — Inglês para crianças de 6 a 8 anos",
  description:
    "O Linguu ensina inglês para crianças de 6 a 8 anos com missões de voz e tutores animados. Primeira missão grátis. iOS e Android.",
  openGraph: {
    title: "Linguu — Inglês para crianças de 6 a 8 anos",
    description:
      "Missões de voz com tutores animados, sem anúncios e sem tédio. Primeira missão grátis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
