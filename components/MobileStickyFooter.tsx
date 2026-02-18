"use client";
import { Home, Tag, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MobileStickyFooter() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-bottom shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {/* Mobile: Grid 4 colunas / Desktop: Flex centralizado */}
      <div className="max-w-xl mx-auto grid grid-cols-4 md:flex md:justify-center md:gap-12 h-16" suppressHydrationWarning>
        {/* Início */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-gray-900 active:scale-95 transition px-4"
        >
          <Home size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Início</span>
        </Link>

        {/* Blog */}
        <Link
          href="/blog"
          className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-gray-900 active:scale-95 transition px-4"
        >
          <BookOpen size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Blog</span>
        </Link>

        {/* Dicas */}
        <Link
          href="/dicas"
          className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-gray-900 active:scale-95 transition px-4"
        >
          <Sparkles size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Dicas</span>
        </Link>

        {/* Ofertas - Destacado */}
        <a
          href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-orange-600 hover:text-orange-700 active:scale-95 transition relative px-4 text-center"
        >
          <div className="absolute top-2 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <div className="absolute top-2 right-1/4 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          <Tag size={22} strokeWidth={3} />
          <span className="text-[10px] font-black uppercase tracking-tighter">Ofertas</span>
        </a>
      </div>
    </nav>
  );
}
