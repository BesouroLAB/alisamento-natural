import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Clock, Tag, ChevronRight } from "lucide-react";
import { posts } from "@/lib/posts";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Blog | Alisamento Natural",
    description: "Artigos, guias e análises científicas sobre alisamento capilar sem formol. Descubra a verdade por trás das receitas caseiras e tecnologias profissionais.",
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition">
                    <ArrowLeft size={18} />
                    <span className="text-xs font-bold uppercase tracking-wide">Home</span>
                </Link>
                <div className="flex items-center gap-1.5 text-pink-600 font-bold text-sm uppercase tracking-wider">
                    <BookOpen size={16} /> Blog
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-5 py-8 pb-32">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">ARTIGOS & ANÁLISES</h1>
                    <p className="text-gray-500 text-sm">
                        Conteúdo baseado em ciência para você tomar decisões inteligentes sobre seu cabelo.
                    </p>
                </div>

                {/* Lista de Posts com Thumbnails */}
                <div className="space-y-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="group border-b border-gray-100 pb-8 last:border-0">
                            {/* Thumbnail */}
                            <Link href={`/blog/${post.slug}`} className="block mb-4">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src={post.thumbnail}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </Link>

                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-3">
                                <span className="text-pink-600 bg-pink-50 px-2 py-0.5 rounded flex items-center gap-1">
                                    <Tag size={10} /> {post.category}
                                </span>
                                <span className="text-gray-400 flex items-center gap-1">
                                    <Clock size={10} /> {post.readingTime}
                                </span>
                            </div>

                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition leading-tight">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                {post.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-gray-400">
                                    Por {post.author} • {new Date(post.date).toLocaleDateString('pt-BR')}
                                </span>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-xs font-bold text-pink-600 flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Ler Artigo <ChevronRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Contextual */}
                <div className="mt-12 p-6 bg-gray-900 rounded-2xl text-center text-white">
                    <h3 className="text-lg font-bold mb-2">Cansada de receitas que não funcionam?</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Veja a tecnologia que está revolucionando o alisamento em casa.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-black py-3 px-8 rounded-xl transition"
                    >
                        Conhecer o Hidraliso ➔
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
