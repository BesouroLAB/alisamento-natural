"use client";
import { Play, Pause, Headphones, X } from "lucide-react";
import { useAudioStore } from "@/hooks/useAudioStore";

export default function AudioMiniPlayer() {
    const { isPlaying, setIsPlaying, currentTime, duration, title } = useAudioStore();

    // Só mostrar se estiver tocando ou se houve progresso
    if (!isPlaying && currentTime === 0) return null;

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="fixed top-14 left-0 right-0 z-40 bg-indigo-950/95 backdrop-blur-md border-b border-indigo-500/20 animate-slide-in-down shadow-lg text-white">
            <div className="max-w-2xl mx-auto px-4 py-2 flex items-center gap-3">
                {/* Botão Play/Pause Pequeno */}
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="size-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-sm active:scale-95 transition"
                >
                    {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} className="ml-0.5" fill="currentColor" />}
                </button>

                {/* Info do Áudio */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="flex items-center gap-1 text-[10px] font-bold text-orange-400 uppercase tracking-wider animate-pulse">
                            <Headphones size={10} /> Ouvindo agora
                        </span>
                        <div className="h-2 w-[1px] bg-indigo-400/30" />
                        <span className="text-[10px] text-indigo-300/70 font-medium truncate">
                            {title}
                        </span>
                    </div>
                    {/* Barra de Progresso Fina */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-orange-500 transition-all duration-300 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Botão Fechar (Para o áudio e some) */}
                <button
                    onClick={() => {
                        setIsPlaying(false);
                        // Reset progress via setAudioData seria ideal aqui
                    }}
                    className="text-indigo-300/50 hover:text-indigo-200 p-1"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
