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
  title: "Projeto Astarte | Veja o que está afastando ele e conquiste esse homem",
  description:
    "Descubra por que ele ficou frio, se tem outra mulher e o que você precisa parar de fazer para ele voltar a te procurar. R$ 37,90.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
