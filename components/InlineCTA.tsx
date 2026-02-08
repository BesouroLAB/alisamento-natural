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
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[11px] font-black uppercase tracking-wide px-4 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all border border-orange-400/30 whitespace-nowrap"
            >
                🛒 {text} <ArrowRight size={14} strokeWidth={3} />
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
