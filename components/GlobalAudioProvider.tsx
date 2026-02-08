"use client";
import { useRef, useEffect } from "react";
import { useAudioStore } from "@/hooks/useAudioStore";

/**
 * Componente de áudio global que persiste entre navegações.
 * Vive no layout.tsx e é controlado pelo Zustand store.
 */
export default function GlobalAudioProvider() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { isPlaying, setIsPlaying, setAudioData, audioSrc } = useAudioStore();

    // Sincronizar play/pause com o estado global
    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play().catch(() => setIsPlaying(false));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, setIsPlaying]);

    // Atualizar progresso
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setAudioData({
                currentTime: audioRef.current.currentTime,
                duration: audioRef.current.duration
            });
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setAudioData({ duration: audioRef.current.duration });
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setAudioData({ currentTime: 0 });
    };

    return (
        <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            preload="metadata"
        />
    );
}
