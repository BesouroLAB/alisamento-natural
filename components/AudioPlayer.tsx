"use client";
import { useState } from "react";
import { Play, Pause, Headphones, ChevronDown, Volume2 } from "lucide-react";
import Link from "next/link";
import { useAudioStore } from "@/hooks/useAudioStore";

/**
 * Player de áudio visual. O elemento <audio> real está no GlobalAudioProvider.
 * Isso permite que o áudio persista entre navegações de página.
 */
export default function AudioPlayer() {
    const { isPlaying, setIsPlaying } = useAudioStore();
    const [showNotes, setShowNotes] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const audioSchema = {
        "@context": "https://schema.org",
        "@type": "AudioObject",
        "contentUrl": "https://res.cloudinary.com/do8gdtozt/video/upload/v1770517153/Por_que_maizena_n%C3%A3o_alisa_o_cabelo_e18u55.mp4",
        "description": "Análise técnica: Por que a Maizena falha em alisar e como a tecnologia de baixo peso molecular realinha o fio definitivamente.",
        "duration": "PT5M30S",
        "encodingFormat": "audio/mpeg",
        "name": "Adeus Maizena: A Revolução do Liso de Chuveiro",
        "uploadDate": "2024-05-23"
    };

    return (
        <div className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-800 rounded-2xl p-5 mb-8 shadow-xl overflow-hidden border border-indigo-500/20 text-indigo-50">
            {/* Efeito de luz decorativo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(audioSchema) }}
            />

            {/* Player Principal */}
            <div className="relative z-10 flex items-center gap-4">
                {/* Botão de Play Grande e Chamativo */}
                <button
                    onClick={togglePlay}
                    className="relative flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-900 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform group"
                    aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                >
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                    )}
                    {isPlaying ? (
                        <Pause size={28} className="fill-current" strokeWidth={2.5} />
                    ) : (
                        <Play size={28} className="ml-1 fill-current" strokeWidth={2.5} />
                    )}
                </button>

                {/* Info do Episódio */}
                <div className="flex-1 min-w-0 text-white">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="bg-white/25 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                            🎙️ Exclusivo
                        </span>
                        <span className="text-[10px] font-bold flex items-center gap-1 opacity-90">
                            <Headphones size={10} /> 3.2k ouvindo
                        </span>
                    </div>
                    <p className="text-[11px] font-medium opacity-80 line-clamp-1">
                        Episódio #01 • Ciência Capilar
                    </p>
                    <h3 className="text-sm md:text-base font-extrabold leading-tight line-clamp-2 drop-shadow-sm">
                        "Adeus Maizena: O que alisa de verdade."
                    </h3>
                </div>
            </div>

            {/* CTA do Player - Sutil */}
            <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/20 pt-3">
                <button
                    onClick={() => setShowNotes(!showNotes)}
                    className="flex items-center gap-1.5 text-[11px] text-white/80 hover:text-white transition font-medium"
                >
                    📝 Ver resumo técnico
                    <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${showNotes ? "rotate-180" : ""}`}
                    />
                </button>
                <Link
                    href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full transition shadow-lg"
                >
                    <Volume2 size={12} /> Conferir Oferta
                </Link>
            </div>

            {/* Show Notes Expandido */}
            {showNotes && (
                <div className="relative z-10 mt-3 text-xs text-white/90 space-y-2 bg-black/10 backdrop-blur-sm p-4 rounded-xl">
                    <p className="font-bold text-white">📌 Destaques:</p>
                    <ul className="space-y-1.5 list-disc list-inside opacity-90">
                        <li><strong>00:45</strong> - Por que a Maizena não penetra no fio.</li>
                        <li><strong>01:30</strong> - O formol "enverniza" e causa quebra.</li>
                        <li><strong>02:45</strong> - Como as nanopartículas realinham o cabelo.</li>
                        <li><strong>04:00</strong> - Custo: Salão vs Progressiva de Chuveiro.</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
