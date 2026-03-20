import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Clock, PenTool, ArrowRight, Home, ChevronRight } from "lucide-react";
import { getPostBySlug, posts } from "@/lib/posts";
import Footer from "@/components/Footer";
import FAQMaizena from "@/components/FAQMaizena";
import FAQRanking from "@/components/FAQRanking";
import FAQHidraliso from "@/components/FAQHidraliso";
import FAQComparativo from "@/components/FAQComparativo";
import FAQComoUsar from "@/components/FAQComoUsar";

// ================================================================================
// 🚀 SSG: Gera as páginas estáticas no build (Velocidade Extrema)
// ================================================================================
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// ================================================================================
// 🎯 SEO: Metadados Dinâmicos Otimizados para cada post
// ================================================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    // Títulos SEO otimizados para MOBILE (≤60 chars) — baseado em queries reais do GSC
    // Google mobile corta títulos acima de ~60 chars. 73.5% do tráfego é mobile.
    const seoTitles: Record<string, string> = {
        "alisamento-natural-com-maizena-funciona": "Maizena Alisa o Cabelo? A Verdade Sobre a Receita [2026]",
        "hidraliso-funciona-resenha": "Hidraliso Funciona? Resenha e Resultado Real [2026]",
        "melhores-progressivas-de-chuveiro": "10 Melhores Progressivas de Chuveiro em 2026",
        "hidraliso-vs-la-bella-liss": "Hidraliso vs La Bella Liss: Qual Melhor? [2026]",
        "como-usar-hidraliso-passo-a-passo": "Como Usar Hidraliso Passo a Passo [2026]",
    };

    // Meta descriptions otimizadas por artigo — baseado em queries do GSC
    const seoDescriptions: Record<string, string> = {
        "alisamento-natural-com-maizena-funciona": "É verdade que maizena alisa o cabelo? Veja a receita viral de alisamento natural com maizena e leite, se funciona de verdade e qual alternativa dá resultado real.",
        "hidraliso-funciona-resenha": "Hidraliso funciona mesmo? Hidraliso é bom? Testamos este alisante de chuveiro e mostramos o resultado real. Veja composição, como usar e se vale a pena comprar.",
        "melhores-progressivas-de-chuveiro": "Qual a melhor progressiva de chuveiro? Veja o ranking atualizado com La Bella Liss, Super Poderes, Hidraliso e mais. Comparamos preço, resultado e duração.",
        "hidraliso-vs-la-bella-liss": "Comparativo completo entre Hidraliso e La Bella Liss. Qual alisa mais? Qual dura mais? Qual é mais barata? Veja preço, resultado e duração lado a lado.",
        "como-usar-hidraliso-passo-a-passo": "Guia completo de como usar o Hidraliso passo a passo. Aprenda a aplicar a progressiva de chuveiro em casa e evite os 5 erros que destroem o resultado.",
    };

    const optimizedTitle = seoTitles[slug] || post.title;
    const optimizedDescription = seoDescriptions[slug] || post.description;
    const imageUrl = post.thumbnail.startsWith("http") ? post.thumbnail : `https://alisamentonatural.com.br${post.thumbnail}`;

    return {
        title: optimizedTitle,
        description: optimizedDescription,
        keywords: ["alisamento natural", "hidraliso", "progressiva de chuveiro", "sem formol", post.category.toLowerCase()],
        authors: [{ name: "Redação AlisamentoNatural", url: "https://alisamentonatural.com.br" }],
        openGraph: {
            title: optimizedTitle,
            description: optimizedDescription,
            type: "article",
            publishedTime: post.date,
            modifiedTime: "2026-03-19",
            authors: ["Redação AlisamentoNatural"],
            section: post.category,
            tags: ["alisamento natural", "hidraliso", "progressiva de chuveiro"],
            images: [{
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: post.title,
            }],
            siteName: "AlisamentoNatural.com.br",
            locale: "pt_BR",
        },
        twitter: {
            card: "summary_large_image",
            title: optimizedTitle,
            description: optimizedDescription,
            images: [imageUrl],
        },
        alternates: {
            canonical: `https://alisamentonatural.com.br/blog/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    };
}

// ================================================================================
// 📄 PÁGINA DO ARTIGO COM SCHEMAS COMPLETOS
// ================================================================================
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const baseUrl = "https://alisamentonatural.com.br";
    const articleUrl = `${baseUrl}/blog/${post.slug}`;
    const imageUrl = post.thumbnail.startsWith("http") ? post.thumbnail : `${baseUrl}${post.thumbnail}`;

    // SEO: Títulos e descriptions otimizados (espelha generateMetadata)
    const seoTitles: Record<string, string> = {
        "alisamento-natural-com-maizena-funciona": "Maizena Alisa o Cabelo? A Verdade Sobre a Receita [2026]",
        "hidraliso-funciona-resenha": "Hidraliso Funciona? Resenha e Resultado Real [2026]",
        "melhores-progressivas-de-chuveiro": "10 Melhores Progressivas de Chuveiro em 2026",
        "hidraliso-vs-la-bella-liss": "Hidraliso vs La Bella Liss: Qual Melhor? [2026]",
        "como-usar-hidraliso-passo-a-passo": "Como Usar Hidraliso Passo a Passo [2026]",
    };
    const seoDescriptions: Record<string, string> = {
        "alisamento-natural-com-maizena-funciona": "É verdade que maizena alisa o cabelo? Veja a receita viral de alisamento natural com maizena e leite, se funciona de verdade e qual alternativa dá resultado real.",
        "hidraliso-funciona-resenha": "Hidraliso funciona mesmo? Hidraliso é bom? Testamos este alisante de chuveiro e mostramos o resultado real. Veja composição, como usar e se vale a pena comprar.",
        "melhores-progressivas-de-chuveiro": "Qual a melhor progressiva de chuveiro? Veja o ranking atualizado com La Bella Liss, Super Poderes, Hidraliso e mais. Comparamos preço, resultado e duração.",
        "hidraliso-vs-la-bella-liss": "Comparativo completo entre Hidraliso e La Bella Liss. Qual alisa mais? Qual dura mais? Qual é mais barata? Veja preço, resultado e duração lado a lado.",
        "como-usar-hidraliso-passo-a-passo": "Guia completo de como usar o Hidraliso passo a passo. Aprenda a aplicar a progressiva de chuveiro em casa e evite os 5 erros que destroem o resultado.",
    };
    const optimizedTitle = seoTitles[slug] || post.title;
    const optimizedDescription = seoDescriptions[slug] || post.description;

    // ================================================================================
    // 🔧 SCHEMA 1: BreadcrumbList (Navegação para Rich Snippets)
    // ================================================================================
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${baseUrl}/blog`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": articleUrl
            }
        ]
    };

    // ================================================================================
    // 🔧 SCHEMA 2: Article/BlogPosting (E-E-A-T Compliance)
    // ================================================================================
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        "headline": optimizedTitle,
        "description": optimizedDescription,
        "image": {
            "@type": "ImageObject",
            "url": imageUrl,
            "width": 1200,
            "height": 630,
            "license": "https://alisamentonatural.com.br/termos",
            "acquireLicensePage": "https://alisamentonatural.com.br/termos",
            "creditText": "Alisamento Natural",
            "creator": {
                "@type": "Organization",
                "name": "Alisamento Natural"
            },
            "copyrightNotice": "Alisamento Natural - Conteúdo Editorial"
        },
        "author": {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
            "name": "Redação AlisamentoNatural",
            "url": baseUrl
        },
        "publisher": {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
            "name": "Alisamento Natural",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/favicon.svg`,
                "width": 512,
                "height": 512
            }
        },
        "datePublished": post.date,
        "dateModified": "2026-03-19",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        },
        "articleSection": post.category,
        "wordCount": post.content.split(" ").length,
        "inLanguage": "pt-BR",
        "isAccessibleForFree": true,
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".prose p:first-of-type"]
        }
    };

    // ================================================================================
    // 🔧 SCHEMA 3: Product + Review Editorial (Para artigo de resenha)
    // NOTA: Removidos aggregateRating (reviews fabricadas) e merchant details
    // (shipping/returnPolicy) para evitar penalização — somos blog, não loja.
    // ================================================================================
    const productSchema = slug === "hidraliso-funciona-resenha" ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Hidraliso Alisante de Chuveiro",
        "image": "https://res.cloudinary.com/do8gdtozt/image/upload/v1770516774/hidraliso-como-funciona_piosk7.jpg",
        "description": "Progressiva de chuveiro sem formol com tecnologia termoativada. Alisa cabelos ondulados, cacheados e crespos em casa.",
        "brand": {
            "@type": "Brand",
            "name": "Hidraliso"
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4",
                "bestRating": "5",
                "worstRating": "1"
            },
            "author": {
                "@type": "Organization",
                "name": "Redação AlisamentoNatural"
            },
            "datePublished": "2026-02-08",
            "reviewBody": "O Hidraliso é uma boa opção de progressiva de chuveiro sem formol. A tecnologia termoativada funciona bem em cabelos ondulados e cacheados. Pontos fortes: garantia de 30 dias e facilidade de uso em casa. Ponto fraco: preço acima da média das farmácias."
        }
    } : null;

    // ================================================================================
    // 🔧 SCHEMA 4: ItemList (Para artigo de ranking - Carrossel de produtos)
    // ================================================================================
    const rankingSchema = slug === "melhores-progressivas-de-chuveiro" ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "As 10 Melhores Progressivas de Chuveiro",
        "description": "Ranking das melhores progressivas de chuveiro sem formol disponíveis no Brasil.",
        "numberOfItems": 10,
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "La Bella Liss", "url": "https://amzn.to/labellaliss" },
            { "@type": "ListItem", "position": 2, "name": "Super Poderes", "url": "https://amzn.to/superpoderes" },
            { "@type": "ListItem", "position": 3, "name": "Hidraliso", "url": "https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891" },
            { "@type": "ListItem", "position": 4, "name": "Knut Ultra Liss" },
            { "@type": "ListItem", "position": 5, "name": "Aussie 3 Minute Miracle Botox" },
            { "@type": "ListItem", "position": 6, "name": "Abelha Rainha" },
            { "@type": "ListItem", "position": 7, "name": "Muriel Progressive System" },
            { "@type": "ListItem", "position": 8, "name": "Alise Hair" },
            { "@type": "ListItem", "position": 9, "name": "Megalizz" },
            { "@type": "ListItem", "position": 10, "name": "Prohall Biomask" },
        ]
    } : null;

    // ================================================================================
    // 🔧 SCHEMA 5: HowTo (Para artigo de maizena - Passo a passo)
    // ================================================================================
    const howToSchema = slug === "alisamento-natural-com-maizena-funciona" ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Como fazer alisamento com maizena (receita caseira)",
        "description": "Receita caseira de hidratação com amido de milho e leite para cabelos. Atenção: não alisa de verdade.",
        "totalTime": "PT30M",
        "supply": [
            { "@type": "HowToSupply", "name": "Amido de milho (maizena)" },
            { "@type": "HowToSupply", "name": "Leite integral" },
            { "@type": "HowToSupply", "name": "Máscara de hidratação" }
        ],
        "tool": [
            { "@type": "HowToTool", "name": "Panela" },
            { "@type": "HowToTool", "name": "Colher" }
        ],
        "step": [
            { "@type": "HowToStep", "name": "Dissolver", "text": "Dissolver duas colheres de amido de milho em água ou leite integral" },
            { "@type": "HowToStep", "name": "Cozinhar", "text": "Levar ao fogo até virar um mingau" },
            { "@type": "HowToStep", "name": "Misturar", "text": "Misturar com uma máscara de hidratação" },
            { "@type": "HowToStep", "name": "Aplicar", "text": "Aplicar no cabelo e deixar agir por 20 minutos" }
        ]
    } : slug === "como-usar-hidraliso-passo-a-passo" ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Como Usar o Hidraliso: Passo a Passo Completo",
        "description": "Guia completo de como aplicar o Hidraliso passo a passo em casa para resultado de salão.",
        "totalTime": "PT60M",
        "supply": [
            { "@type": "HowToSupply", "name": "Hidraliso Alisante de Chuveiro" },
            { "@type": "HowToSupply", "name": "Shampoo antirresíduos" },
            { "@type": "HowToSupply", "name": "Luvas" }
        ],
        "tool": [
            { "@type": "HowToTool", "name": "Secador de cabelo" },
            { "@type": "HowToTool", "name": "Chapinha" },
            { "@type": "HowToTool", "name": "Pente fino" }
        ],
        "step": [
            { "@type": "HowToStep", "name": "Limpeza Profunda", "text": "Lave o cabelo com shampoo antirresíduos duas vezes para remover resíduos." },
            { "@type": "HowToStep", "name": "Retirar Excesso de Água", "text": "Retire o excesso com toalha. O cabelo deve ficar úmido, não encharcado." },
            { "@type": "HowToStep", "name": "Aplicação Mecha por Mecha", "text": "Divida em 4 quadrantes e aplique mecha por mecha, mantendo 1,5cm de distância da raiz." },
            { "@type": "HowToStep", "name": "Tempo de Pausa", "text": "Deixe agir por 15 a 30 minutos conforme o tipo de cabelo." },
            { "@type": "HowToStep", "name": "Enxágue", "text": "Enxague apenas com água corrente, sem condicionador." },
            { "@type": "HowToStep", "name": "Ativação Térmica", "text": "Seque com secador e pranche com chapinha a 180-200°C para selar o produto." }
        ]
    } : null;

    return (
        <div className="min-h-screen bg-[var(--color-background-light)] font-sans">
            {/* ================== SCHEMAS JSON-LD ================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {productSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
            )}
            {rankingSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(rankingSchema) }}
                />
            )}
            {howToSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
                />
            )}

            {/* Header Fixo */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-brand)] shadow-lg px-4 h-14 flex items-center justify-between">
                <Link href="/blog" className="flex items-center gap-2 text-white/90 hover:text-white transition group">
                    <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide">Voltar ao Blog</span>
                </Link>
                <span className="text-[10px] font-bold text-white bg-white/20 px-2 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                </span>
            </header>

            <article className="mt-14 max-w-2xl mx-auto px-5 py-8">
                {/* Breadcrumb Visual (AEO - Mostra contexto de navegação) */}
                <nav className="flex items-center gap-1 text-xs text-gray-500 mb-4" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-orange-600 transition flex items-center gap-1">
                        <Home size={12} /> Home
                    </Link>
                    <ChevronRight size={12} />
                    <Link href="/blog" className="hover:text-orange-600 transition">Blog</Link>
                    <ChevronRight size={12} />
                    <span className="text-gray-900 font-medium truncate max-w-[200px]">{post.category}</span>
                </nav>

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
                        <span className="flex items-center gap-1 text-[var(--color-brand)] bg-emerald-50 px-2 py-0.5 rounded-full">
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

                    {/* Autoridade Editorial (E-E-A-T) */}
                    <div className="flex items-center gap-3 mt-6">
                        <div className="w-10 h-10 bg-[var(--color-brand)] rounded-full flex items-center justify-center text-white shadow-sm">
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

                {/* FAQ ESPECÍFICA PARA ARTIGO DE MAIZENA */}
                {slug === "alisamento-natural-com-maizena-funciona" && <FAQMaizena />}

                {/* FAQ ESPECÍFICA PARA RESENHA HIDRALISO */}
                {slug === "hidraliso-funciona-resenha" && <FAQHidraliso />}

                {/* FAQ ESPECÍFICA PARA ARTIGO DE RANKING */}
                {slug === "melhores-progressivas-de-chuveiro" && <FAQRanking />}

                {/* FAQ ESPECÍFICA PARA COMPARATIVO */}
                {slug === "hidraliso-vs-la-bella-liss" && <FAQComparativo />}

                {/* FAQ ESPECÍFICA PARA TUTORIAL COMO USAR */}
                {slug === "como-usar-hidraliso-passo-a-passo" && <FAQComoUsar />}

                {/* CTA FINAL (Túnel de Conversão) */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                    <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl p-6 text-center text-white shadow-xl relative overflow-hidden border border-indigo-500/30">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-[80px] opacity-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-10"></div>

                        <p className="font-bold text-orange-400 mb-3 text-lg relative z-10">🔬 Quer o resultado de salão em casa?</p>
                        <p className="text-gray-300 text-sm mb-6 relative z-10">
                            Não perca tempo com receitas que apenas &quot;maquiam&quot; os fios. Use a nanotecnologia que os especialistas recomendam.
                        </p>

                        <a
                            href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded-xl transition-all hover:scale-[1.02] shadow-lg uppercase tracking-wide relative z-10"
                        >
                            VERIFICAR ESTOQUE AGORA <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                    </div>
                </div>
            </article>

            {/* Footer */}
            <Footer />
        </div>
    );
}
