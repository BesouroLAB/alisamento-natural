import { MetadataRoute } from "next";

// ================================================================================
// 🤖 ROBOTS.TXT OTIMIZADO PARA SEO E CRAWLERS
// ================================================================================
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // Regra geral para todos os crawlers
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",           // APIs internas
                    "/_next/",         // Assets do Next.js
                    "/private/",       // Pasta privada (se existir)
                    "/*.json$",        // Arquivos JSON (exceto schemas)
                ],
            },
            {
                // Regra específica para Googlebot (principal)
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            {
                // Regra para GPTBot (ChatGPT/OpenAI) - AEO
                userAgent: "GPTBot",
                allow: "/",
                disallow: ["/api/"],
            },
            {
                // Regra para Claude (Anthropic) - AEO
                userAgent: "anthropic-ai",
                allow: "/",
                disallow: ["/api/"],
            },
            {
                // Regra para Perplexity - AEO
                userAgent: "PerplexityBot",
                allow: "/",
                disallow: ["/api/"],
            },
            {
                // Regra para Bingbot (Bing/Microsoft)
                userAgent: "Bingbot",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: "https://alisamentonatural.com.br/sitemap.xml",
        host: "https://alisamentonatural.com.br",
    };
}
