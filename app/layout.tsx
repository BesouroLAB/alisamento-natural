import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import NotificationToast from "@/components/NotificationToast";
import AudioMiniPlayer from "@/components/AudioMiniPlayer";
import GlobalAudioProvider from "@/components/GlobalAudioProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

// ================================================================================
// 🎯 SEO: METADADOS GLOBAIS (Aplica a todas as páginas que não sobrescrevem)
// ================================================================================
export const metadata: Metadata = {
  metadataBase: new URL("https://alisamentonatural.com.br"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Melhor Progressiva de Chuveiro 2026: Análise Hidraliso vs La Bella Liss",
    template: "%s | Alisamento Natural",
  },
  description:
    "Descubra qual a melhor progressiva de chuveiro para cabelo crespo e liso. Investigamos a Tecnologia Liss que Superou La Bella e Zero Absoluto. ✓ Livre de Formol ✓ Garantia 30 dias.",
  keywords: [
    "alisamento natural",
    "alisamento sem formol",
    "hidraliso",
    "hidraliso funciona",
    "progressiva de chuveiro",
    "liso de chuveiro",
    "cabelo liso natural",
    "alisamento caseiro",
    "la bella liss",
    "super poderes",
  ],
  authors: [{ name: "Redação AlisamentoNatural", url: "https://alisamentonatural.com.br" }],
  creator: "AlisamentoNatural",
  publisher: "AlisamentoNatural",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Alisamento Natural Sem Formol: A Ciência do Liso de Chuveiro [2026]",
    description:
      "Tecnologia de alisamento sem formol usada por +50.000 brasileiras. Resultado em 20 min, sem salão.",
    type: "website",
    locale: "pt_BR",
    siteName: "AlisamentoNatural.com.br",
    url: "https://alisamentonatural.com.br",
    images: [
      {
        url: "https://res.cloudinary.com/do8gdtozt/image/upload/v1770516774/hidraliso-como-funciona_piosk7.jpg",
        width: 1200,
        height: 630,
        alt: "Hidraliso: Progressiva de Chuveiro Sem Formol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alisamento Natural Sem Formol [2026]",
    description: "Tecnologia de alisamento sem formol. Resultado em 20 min, sem salão.",
    images: ["https://res.cloudinary.com/do8gdtozt/image/upload/v1770516774/hidraliso-como-funciona_piosk7.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione aqui quando tiver:
    // google: "seu-codigo-google",
    // yandex: "seu-codigo-yandex",
  },
};

// ================================================================================
// 🔧 SCHEMAS JSON-LD GLOBAIS: Organization + WebSite (AEO + Rich Snippets)
// ================================================================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://alisamentonatural.com.br/#organization",
  name: "Alisamento Natural",
  alternateName: "AlisamentoNatural.com.br",
  url: "https://alisamentonatural.com.br",
  logo: {
    "@type": "ImageObject",
    "url": "https://alisamentonatural.com.br/favicon.svg",
    "width": 512,
    "height": 512,
    "license": "https://alisamentonatural.com.br/termos",
    "acquireLicensePage": "https://alisamentonatural.com.br/termos",
    "creditText": "Alisamento Natural",
    "creator": {
      "@type": "Organization",
      "name": "Alisamento Natural"
    },
    "copyrightNotice": "Alisamento Natural - Todos os direitos reservados"
  },
  sameAs: [
    // Adicione redes sociais quando tiver:
    // "https://instagram.com/alisamentonatural",
    // "https://facebook.com/alisamentonatural",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Portuguese"],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alisamentonatural.com.br/#website",
  url: "https://alisamentonatural.com.br",
  name: "Alisamento Natural",
  description: "Portal de informação sobre alisamento capilar sem formol e progressivas de chuveiro.",
  publisher: {
    "@id": "https://alisamentonatural.com.br/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://alisamentonatural.com.br/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Preconnect para Cloudinary (imagens) */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Schema JSON-LD Global: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Schema JSON-LD Global: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-[var(--color-background-light)] text-gray-900 antialiased min-h-screen pb-24`}
      >
        {/* Google Analytics 4 (GA4) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JXFN3Q1TFC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JXFN3Q1TFC');
          `}
        </Script>

        <GlobalAudioProvider />
        {children}
        <AudioMiniPlayer />
        <NotificationToast />
        <MobileStickyFooter />
      </body>
    </html>
  );
}
