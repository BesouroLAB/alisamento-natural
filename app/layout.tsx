import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import NotificationToast from "@/components/NotificationToast";
import AudioMiniPlayer from "@/components/AudioMiniPlayer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Alisamento Natural | A Verdade Sobre o Liso Sem Formol",
  description:
    "Descubra por que receitas caseiras não funcionam e qual a nova tecnologia que as famosas estão usando para ter cabelo liso e saudável sem formol.",
  keywords: [
    "alisamento natural",
    "alisamento sem formol",
    "hidraliso",
    "liso de chuveiro",
    "cabelo liso natural",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Alisamento Natural | A Verdade Sobre o Liso Sem Formol",
    description:
      "Descubra por que receitas caseiras não funcionam e qual a nova tecnologia que as famosas estão usando.",
    type: "article",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-[var(--color-background-light)] text-gray-900 antialiased min-h-screen pb-24`}
      >
        {children}
        <AudioMiniPlayer />
        <NotificationToast />
        <MobileStickyFooter />
      </body>
    </html>
  );
}
