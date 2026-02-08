import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InlineCTAProps {
    variant?: "inline" | "sticker";
    text?: string;
}

/**
 * CTA contextual que aparece em menções do Hidraliso ou Progressiva de Chuveiro.
 * - `inline`: Link sutil dentro do texto.
 * - `sticker`: Destaque visual tipo "badge" ao lado do conteúdo.
 */
export default function InlineCTA({ variant = "inline", text = "Ver oferta" }: InlineCTAProps) {
    if (variant === "sticker") {
        return (
            <Link
                href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_4px_15px_rgba(234,88,12,0.35)] hover:bg-orange-700 hover:shadow-[0_6px_20px_rgba(234,88,12,0.45)] hover:scale-105 transition-all border border-white/20 whitespace-nowrap group"
            >
                <span className="group-hover:animate-bounce">🛒</span> {text} <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        );
    }

    // Inline (sutil, dentro do parágrafo)
    return (
        <Link
            href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-orange-600 font-bold text-sm hover:text-orange-700 transition ml-1 underline decoration-dotted underline-offset-2"
        >
            {text} <ArrowRight size={14} />
        </Link>
    );
}
