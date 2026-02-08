import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Clock, PenTool } from "lucide-react";
import { getPostBySlug, posts } from "@/lib/posts";
import Footer from "@/components/Footer";

// 1. SSG: Gera as páginas estáticas no build (Velocidade Extrema)
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// 2. SEO: Metadados Dinâmicos para cada post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    // Mapear slugs para títulos SEO otimizados
    const seoTitles: Record<string, string> = {
        "alisamento-com-maizena-funciona": "Alisamento com Maizena Funciona? A Verdade Científica [2024]",
        "fashion-gold-ou-hidraliso-qual-melhor": "Fashion Gold ou Hidraliso: Qual é Melhor? Testamos as Duas [2024]",
        "gravida-pode-usar-progressiva-de-chuveiro": "Grávida Pode Usar Progressiva de Chuveiro? Guia de Segurança [2024]",
    };

    const optimizedTitle = seoTitles[slug] || `${post.title} | Alisamento Natural`;

    return {
        title: optimizedTitle,
        description: post.description,
        keywords: ["alisamento natural", "hidraliso", "progressiva de chuveiro", post.category.toLowerCase()],
        openGraph: {
            title: optimizedTitle,
            description: post.description,
            type: "article",
            images: [post.thumbnail],
            siteName: "AlisamentoNatural.com.br",
        },
        twitter: {
            card: "summary_large_image",
            title: optimizedTitle,
            description: post.description,
        },
        alternates: {
            canonical: `https://alisamentonatural.com.br/blog/${slug}`,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // 3. SCHEMA MARKUP: Author como Organization (E-E-A-T Compliance)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": `https://alisamentonatural.com.br${post.thumbnail}`,
        "author": {
            "@type": "Organization",
            "name": "Redação AlisamentoNatural",
            "url": "https://alisamentonatural.com.br"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Alisamento Natural",
            "url": "https://alisamentonatural.com.br"
        },
        "datePublished": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://alisamentonatural.com.br/blog/${post.slug}`
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Injeção de JSON-LD Invisível */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header Fixo Minimalista */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 px-4 py-3 shadow-sm flex items-center justify-between">
                <Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition group">
                    <div className="bg-gray-100 p-1.5 rounded-full group-hover:bg-indigo-100 transition">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide">Voltar ao Blog</span>
                </Link>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100 uppercase">
                    {post.category}
                </span>
            </header>

            <article className="max-w-2xl mx-auto px-5 py-8">
                {/* Thumbnail Hero */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Metadados Visuais */}
                <div className="mb-6 border-b border-gray-100 pb-6">
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4 font-medium">
                        <span className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                            <Tag size={12} /> {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={12} /> {post.readingTime}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar size={12} /> {new Date(post.date).toLocaleDateString('pt-BR')}
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-[1.2] mb-4">
                        {post.title}
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed font-serif italic">
                        {post.description}
                    </p>

                    {/* Autoridade Editorial (Organization, não Person) */}
                    <div className="flex items-center gap-3 mt-6">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-sm">
                            <PenTool size={18} />
                        </div>
                        <div className="text-xs leading-tight">
                            <p className="font-bold text-gray-900 text-sm">Redação AlisamentoNatural</p>
                            <p className="text-gray-500">Análise Editorial • Atualizado em {new Date(post.date).toLocaleDateString('pt-BR')}</p>
                        </div>
                    </div>
                </div>

                {/* CONTEÚDO DO POST (Tailwind Typography) */}
                <div
                    className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* CTA FINAL (Túnel de Conversão) */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                    <div className="bg-gradient-to-br from-indigo-900 to-gray-900 rounded-2xl p-6 text-center text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500 rounded-full blur-2xl opacity-20"></div>

                        <h3 className="text-xl font-bold mb-2 relative z-10">Quer o resultado de salão?</h3>
                        <p className="text-gray-300 text-sm mb-6 relative z-10 px-4 text-center">
                            Não perca tempo com receitas que não funcionam. Veja a tecnologia que está salvando cabelos.
                        </p>

                        <a
                            href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-3 rounded-xl transition transform active:scale-95 shadow-lg relative z-10"
                        >
                            VERIFICAR PREÇO AGORA
                        </a>
                    </div>
                </div>
            </article>

            {/* Footer de Portal */}
            <Footer />
        </div>
    );
}
