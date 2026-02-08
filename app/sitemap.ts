import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

// ================================================================================
// 🗺️ SITEMAP.XML OTIMIZADO COM PRIORIDADES ESTRATÉGICAS
// ================================================================================
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://alisamentonatural.com.br";
    const currentDate = new Date().toISOString();

    // Páginas Principais (Alta Prioridade)
    const mainPages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "daily" as const,
            priority: 1.0, // Home é a MAIS importante
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: "daily" as const,
            priority: 0.9, // Listagem do blog é muito importante
        },
    ];

    // Páginas Secundárias (Média Prioridade)
    const secondaryPages = [
        {
            url: `${baseUrl}/ofertas`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/dicas`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
    ];

    // Páginas Institucionais (Baixa Prioridade, mas necessárias para E-E-A-T)
    const institutionalPages = [
        {
            url: `${baseUrl}/sobre`,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/termos`,
            lastModified: currentDate,
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacidade`,
            lastModified: currentDate,
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
    ];

    // Artigos do Blog (Prioridade baseada na data - mais recentes = mais importantes)
    const blogPosts = posts.map((post, index) => {
        // Os 3 primeiros artigos (pilares) têm prioridade alta
        const isPillarPost = index < 3;
        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date).toISOString(),
            changeFrequency: "monthly" as const,
            priority: isPillarPost ? 0.85 : 0.7,
        };
    });

    return [...mainPages, ...secondaryPages, ...institutionalPages, ...blogPosts];
}
