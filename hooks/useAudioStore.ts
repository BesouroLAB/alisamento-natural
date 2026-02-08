"use client";
import { create } from 'zustand';

interface AudioState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    title: string;
    setIsPlaying: (playing: boolean) => void;
    setAudioData: (data: { currentTime?: number; duration?: number; title?: string }) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    title: "Adeus Maizena: O Liso de Chuveiro",
    setIsPlaying: (playing) => set({ isPlaying: playing }),
    setAudioData: (data) => set((state) => ({ ...state, ...data })),
}));
