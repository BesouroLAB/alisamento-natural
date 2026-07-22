import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 min-h-16 flex flex-col sm:flex-row items-center justify-between py-2 sm:py-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group mb-2 sm:mb-0">
          <div className="bg-gradient-to-br from-orange-500 to-indigo-600 p-1.5 rounded-lg text-white shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles size={18} />
          </div>
          <div>
            <span className="font-sans font-black text-xl text-gray-900 tracking-tight block leading-none">
              Alisamento<span className="text-orange-500">Natural</span>
            </span>
            <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest block mt-0.5">
              Curadoria & Ciência Capilar
            </span>
          </div>
        </Link>

        {/* Navegação Limpa & Responsiva (Mesmo Estilo do CAsemform) */}
        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-semibold text-gray-600 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          <Link
            href="/comparativos/301-melhores-progressivas-de-chuveiro"
            className="hover:text-orange-500 transition-colors whitespace-nowrap text-orange-600 font-bold"
          >
            Ranking 2026
          </Link>
          <Link
            href="/progressivas-de-chuveiro"
            className="hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Reviews
          </Link>
          <Link
            href="/comparativos"
            className="hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Comparativos
          </Link>
          <Link
            href="/alisamento-caseiro"
            className="hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Mitos & Receitas
          </Link>
          <Link
            href="/cuidados"
            className="hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Segurança & Anvisa
          </Link>
          <Link
            href="/sobre"
            className="hover:text-orange-500 transition-colors whitespace-nowrap text-indigo-600"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
