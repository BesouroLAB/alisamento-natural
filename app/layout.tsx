import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import NotificationToast from "@/components/NotificationToast";
import AudioMiniPlayer from "@/components/AudioMiniPlayer";
import GlobalAudioProvider from "@/components/GlobalAudioProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Alisamento Natural Sem Formol: A Ciência do Liso de Chuveiro [2024]",
  description:
    "Descubra a tecnologia de alisamento sem formol usada por +50.000 brasileiras. Hidraliso: resultado em 20 minutos, sem salão. ✓ Seguro ✓ Sem Cheiro ✓ Garantia 30 dias.",
  keywords: [
    "alisamento natural",
    "alisamento sem formol",
    "hidraliso",
    "hidraliso funciona",
    "progressiva de chuveiro",
    "liso de chuveiro",
    "cabelo liso natural",
    "alisamento caseiro",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Alisamento Natural Sem Formol: A Ciência do Liso de Chuveiro [2024]",
    description:
      "Tecnologia de alisamento sem formol usada por +50.000 brasileiras. Resultado em 20 min, sem salão.",
    type: "website",
    locale: "pt_BR",
    siteName: "AlisamentoNatural.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alisamento Natural Sem Formol [2024]",
    description: "Tecnologia de alisamento sem formol. Resultado em 20 min, sem salão.",
  },
  alternates: {
    canonical: "https://alisamentonatural.com.br",
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
        <GlobalAudioProvider />
        {children}
        <AudioMiniPlayer />
        <NotificationToast />
        <MobileStickyFooter />
      </body>
    </html>
  );
}
