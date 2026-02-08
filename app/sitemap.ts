import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://alisamentonatural.com.br";

    // Páginas Estáticas
    const routes = ["", "/blog", "/ofertas", "/dicas", "/sobre", "/termos", "/privacidade"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: route === "" ? 1 : 0.8,
        })
    );

    // Páginas Dinâmicas do Blog
    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...blogPosts];
}
