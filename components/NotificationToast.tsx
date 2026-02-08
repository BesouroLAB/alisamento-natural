"use client";
import { useState, useEffect } from "react";
import { TrendingUp, Users, Flame, Tag } from "lucide-react";
import Link from "next/link";

// Mensagens editoriais e de conversão
const messages = [
    { icon: TrendingUp, text: "🔥 Trending: Mais lido sobre tecnologia capilar", color: "text-orange-500" },
    { icon: Users, text: "247 pessoas lendo sobre o Hidraliso agora", color: "text-blue-500" },
    { icon: Tag, text: "Notícia: Lote promocional identificado na Amazon", color: "text-pink-500" },
    { icon: Flame, text: "Aviso: Verificamos cupons ativos para hoje", color: "text-red-500" },
];

export default function NotificationToast() {
    const [show, setShow] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(messages[0]);

    useEffect(() => {
        // Aparece após 20 segundos (menos intrusivo)
        const showTimer = setTimeout(() => setShow(true), 20000);

        // Cicla mensagens a cada 45 segundos (movimento suave)
        const cycler = setInterval(() => {
            setShow(false);
            setTimeout(() => {
                setCurrentMessage(
                    messages[Math.floor(Math.random() * messages.length)]
                );
                setShow(true);
            }, 2000);
        }, 45000);

        return () => {
            clearTimeout(showTimer);
            clearInterval(cycler);
        };
    }, []);

    if (!show) return null;

    const IconComponent = currentMessage.icon;

    return (
        <a
            href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-20 right-4 z-[60] animate-slide-in-right group cursor-pointer"
        >
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg py-2 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center gap-3 max-w-[280px] hover:border-orange-300 transition-all duration-300 group">
                <div className="bg-orange-50 p-1.5 rounded-md shrink-0 ring-1 ring-orange-100">
                    <IconComponent size={14} className={currentMessage.color} />
                </div>
                <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Boletim Editorial</p>
                    <p className="text-[11px] font-semibold text-gray-800 leading-snug">
                        {currentMessage.text}
                    </p>
                </div>
            </div>
        </a>
    );
}
