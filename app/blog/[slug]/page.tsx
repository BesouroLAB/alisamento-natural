import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Clock, PenTool, ArrowRight } from "lucide-react";
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
        "alisamento-com-maizena-funciona": "Alisamento com Maizena Funciona? A Verdade Científica [2026]",
        "fashion-gold-ou-hidraliso-qual-melhor": "Fashion Gold ou Hidraliso: Qual é Melhor? Testamos as Duas [2026]",
        "gravida-pode-usar-progressiva-de-chuveiro": "Grávida Pode Usar Progressiva de Chuveiro? Guia de Segurança [2026]",
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
    const blogSchema = {
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

    // 4. REVIEW SCHEMA: Para posts de comparação (Rich Snippets)
    const reviewSchema = post.slug.includes("comparativo") || post.slug.includes("qual-melhor") ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Hidraliso Alisante de Chuveiro",
        "image": "https://res.cloudinary.com/do8gdtozt/image/upload/v1770514316/ciencia-do-alisamento-capilar-infografico-entenda_bijphr.png",
        "description": "Tecnologia de alisamento sem formol de baixo peso molecular.",
        "brand": {
            "@type": "Brand",
            "name": "Hidraliso"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2480"
        }
    } : null;

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Injeção de JSON-LD Invisível */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            {reviewSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
                />
            )}

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
                    <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-[80px] opacity-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-10"></div>

                        <h3 className="text-2xl font-black mb-3 relative z-10 text-orange-400 uppercase tracking-tight italic">Quer o resultado de salão?</h3>
                        <p className="text-gray-400 text-sm mb-8 relative z-10 px-4 text-center leading-relaxed">
                            Não perca tempo com receitas que apenas "maquiam" os fios. Use a nanotecnologia que os especialistas recomendam.
                        </p>

                        <a
                            href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xl py-5 rounded-2xl transition transform hover:scale-[1.02] active:scale-95 shadow-[0_10px_25px_rgba(249,115,22,0.4)] relative z-10 flex items-center justify-center gap-2 group tracking-wider"
                        >
                            VERIFICAR ESTOQUE AGORA <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </article>

            {/* Footer de Portal */}
            <Footer />
        </div>
    );
}
