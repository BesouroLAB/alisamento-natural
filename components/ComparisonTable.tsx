"use client";
import { Check, X } from "lucide-react";

const items = [
    { label: "Contém Formol?", bad: "Sim (Disfarçado)", good: "100% Natural" },
    { label: "Cheiro", bad: "Forte / Arde", good: "Cheiro Doce" },
    { label: "Custo", bad: "Custo Elevado", good: "Econômico" },
    { label: "Saúde do Fio", bad: "Danifica os Fios", good: "Nutre e Hidrata" },
];

export default function ComparisonTable() {
    return (
        <section className="p-4 my-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                {/* Cabeçalho */}
                <div className="bg-gray-50 p-4 border-b border-gray-100">
                    <h3 className="text-center font-bold text-gray-800">
                        Comparativo de Resultados
                    </h3>
                </div>

                {/* Conteúdo */}
                <div className="grid grid-cols-2">
                    {/* Coluna Ruim */}
                    <div className="p-4 border-r border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-3 text-center tracking-wider">
                            Progressiva Comum
                        </p>
                        <ul className="space-y-3">
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-xs text-gray-600"
                                >
                                    <X size={14} className="text-red-500 shrink-0" />
                                    <span className="line-clamp-1">{item.bad}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna Boa */}
                    <div className="p-4 bg-indigo-50/50">
                        <p className="text-[10px] font-bold text-indigo-900 uppercase mb-3 text-center tracking-wider px-2 py-1 bg-white rounded-full shadow-sm">
                            Hidraliso
                        </p>
                        <ul className="space-y-3">
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-xs font-semibold text-gray-800"
                                >
                                    <Check size={14} className="text-emerald-600 shrink-0" />
                                    <span className="line-clamp-1">{item.good}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
