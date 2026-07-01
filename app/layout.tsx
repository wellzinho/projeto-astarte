import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Projeto Astarte | Protocolo de 30 Dias",
  description:
    "Protocolo científico de 30 dias para compreender o apego evitativo e recuperar o seu magnetismo emocional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-cream text-midnight">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
