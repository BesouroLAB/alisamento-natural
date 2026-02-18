"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
    {
        question: "Preciso lavar o cabelo antes de aplicar o Hidraliso?",
        answer: "Sim! Lavar com shampoo antirresíduos é obrigatório. Ele remove silicones, óleos e resíduos que formam uma barreira no fio. Sem essa limpeza, o Hidraliso não consegue penetrar e o resultado fica comprometido."
    },
    {
        question: "Posso aplicar o Hidraliso na raiz?",
        answer: "Não! Mantenha uma distância de 1,5cm da raiz. Aplicar na raiz pode causar oleosidade excessiva, coceira e irritação no couro cabeludo. O produto é feito para agir no comprimento e pontas."
    },
    {
        question: "O que acontece se eu não usar chapinha?",
        answer: "Sem a ativação térmica (secador + chapinha), o resultado será apenas uma hidratação com leve redução de volume. O alisamento real só acontece quando o calor sela o produto dentro do fio capilar."
    },
    {
        question: "Quanto tempo esperar para lavar depois de aplicar?",
        answer: "Aguarde no mínimo 48 horas antes da primeira lavagem. Esse período é essencial para o produto se fixar completamente na fibra capilar. Quanto mais tempo esperar, mais duradouro será o resultado."
    },
    {
        question: "Posso usar condicionador junto com o Hidraliso?",
        answer: "Não no dia da aplicação! O condicionador cria uma película que impede a ativação térmica. Após as 48 horas de espera, você pode usar condicionador e máscaras normalmente nas lavagens seguintes."
    },
    {
        question: "Quantas vezes posso reaplicar o Hidraliso?",
        answer: "O ideal é reaplicar a cada 30 a 90 dias, conforme o crescimento da raiz. Não há necessidade de aplicar no cabelo todo — apenas no crescimento novo. Isso economiza produto e evita sobrecarga nos fios."
    },
    {
        question: "Qual a temperatura ideal da chapinha?",
        answer: "Entre 180°C e 200°C para a maioria dos cabelos. Para cabelos finos ou danificados, use 180°C. Para cabelos crespos e grossos, pode ir até 200°C. Deslize devagar e uniformemente, sem parar em um ponto."
    },
    {
        question: "Posso dormir com o Hidraliso no cabelo?",
        answer: "Não é recomendado. O tempo de pausa ideal é de 15 a 30 minutos. Deixar por mais tempo não melhora o resultado e pode ressecar os fios. Siga o tempo indicado para o seu tipo de cabelo."
    }
];

export default function FAQComoUsar() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="my-12" id="faq-como-usar" suppressHydrationWarning>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex items-center gap-3 mb-6" suppressHydrationWarning>
                <div className="bg-emerald-100 p-2 rounded-full text-emerald-600" suppressHydrationWarning>
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight" suppressHydrationWarning>
                    FAQ: Dúvidas sobre Como Usar o Hidraliso
                </h2>
            </div>

            <p className="text-gray-600 text-sm mb-6" suppressHydrationWarning>
                Resolvemos as dúvidas mais comuns sobre a aplicação:
            </p>

            <div className="space-y-3" suppressHydrationWarning>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-emerald-300 group"
                        suppressHydrationWarning
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-start p-5 text-left bg-white focus:outline-none"
                        >
                            <span className="font-semibold text-gray-800 text-sm md:text-base pr-4 leading-relaxed group-hover:text-emerald-600 transition-colors" suppressHydrationWarning>
                                {item.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="text-emerald-600 min-w-[20px] mt-1" />
                            ) : (
                                <ChevronDown className="text-gray-400 min-w-[20px] mt-1" />
                            )}
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            suppressHydrationWarning
                        >
                            <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-white" suppressHydrationWarning>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/30 text-center text-white shadow-xl">
                <p className="font-bold text-orange-400 mb-3 text-lg">
                    🛡️ Ainda não tem o Hidraliso?
                </p>
                <p className="text-gray-300 text-sm mb-6">
                    Compre pelo site oficial com garantia de 30 dias e frete grátis.
                </p>
                <a
                    href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded-xl transition-all hover:scale-[1.02] shadow-lg uppercase tracking-wide"
                >
                    👉 COMPRAR HIDRALISO ORIGINAL COM DESCONTO
                </a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                * Resultados podem variar de acordo com a estrutura capilar de cada pessoa.
            </p>
        </section>
    );
}
