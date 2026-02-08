"use client";
import { create } from 'zustand';

interface AudioState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    title: string;
    audioSrc: string;
    setIsPlaying: (playing: boolean) => void;
    setAudioData: (data: { currentTime?: number; duration?: number; title?: string }) => void;
    setAudioSrc: (src: string) => void;
}

const DEFAULT_AUDIO_SRC = "https://res.cloudinary.com/do8gdtozt/video/upload/v1770517153/Por_que_maizena_n%C3%A3o_alisa_o_cabelo_e18u55.mp4";

export const useAudioStore = create<AudioState>((set) => ({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    title: "Adeus Maizena: O Liso de Chuveiro",
    audioSrc: DEFAULT_AUDIO_SRC,
    setIsPlaying: (playing) => set({ isPlaying: playing }),
    setAudioData: (data) => set((state) => ({ ...state, ...data })),
    setAudioSrc: (src) => set({ audioSrc: src, currentTime: 0, duration: 0 }),
}));
