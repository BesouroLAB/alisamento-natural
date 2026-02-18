"use client";
import { Check, X } from "lucide-react";

const items = [
    { label: "Tecnologia", bad: "Maquiagem (Silicone)", good: "Liss (Baixo Peso)" },
    { label: "Compatibilidade", bad: "Muitas Incompatíveis", good: "Compatível com tudo" },
    { label: "Durabilidade", bad: "Sai na 1ª Lavagem", good: "30 a 90 dias" },
    { label: "Segurança", bad: "Risco de Ardência", good: "Grau 2 Anvisa" },
    { label: "Resultado", bad: "Só reduz volume", good: "Liso Real s/ Frizz" },
];

export default function ComparisonTable() {
    return (
        <section className="py-6" suppressHydrationWarning>
            <div className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-800 rounded-2xl p-5 mb-8 shadow-xl overflow-hidden border border-indigo-500/20 text-indigo-50" suppressHydrationWarning>
                {/* Cabeçalho */}
                <div className="bg-gray-50 p-4 border-b border-gray-100">
                    <h3 className="text-center font-bold text-gray-800">
                        Comparativo Técnico de Performance
                    </h3>
                </div>

                {/* Conteúdo */}
                <div className="grid grid-cols-2">
                    {/* Coluna Ruim */}
                    <div className="p-4 border-r border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-3 text-center tracking-wider">
                            Progressivas Comuns
                        </p>
                        <ul className="space-y-4">
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex flex-col gap-1"
                                >
                                    <span className="text-[10px] text-gray-400 font-medium uppercase">{item.label}</span>
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <X size={14} className="text-red-500 shrink-0" />
                                        <span className="line-clamp-1">{item.bad}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna Boa */}
                    <div className="p-4 bg-indigo-50/50">
                        <p className="text-[10px] font-bold text-indigo-900 uppercase mb-3 text-center tracking-wider px-2 py-1 bg-white rounded-full shadow-sm">
                            Hidraliso
                        </p>
                        <ul className="space-y-4">
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex flex-col gap-1"
                                >
                                    <span className="text-[10px] text-indigo-400 font-medium uppercase">{item.label}</span>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                                        <Check size={14} className="text-emerald-600 shrink-0" />
                                        <span className="line-clamp-1">{item.good}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
