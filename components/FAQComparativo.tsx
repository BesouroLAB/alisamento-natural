"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
    {
        question: "Hidraliso ou La Bella Liss: qual alisa mais?",
        answer: "Ambas alisam muito bem, mas para cabelos crespos 4B e 4C, o Hidraliso costuma entregar redução de volume mais intensa na primeira aplicação, graças ao blend de ácidos de baixo peso molecular. A La Bella Liss é excelente para cabelos ondulados e cacheados leves."
    },
    {
        question: "Qual é mais barata: Hidraliso ou La Bella Liss?",
        answer: "O Hidraliso tende a ter melhor custo-benefício pois é vendido direto de fábrica pelo site oficial, sem intermediários. A La Bella Liss é encontrada em farmácias e lojas de cosméticos, mas com a margem do varejo incluída no preço."
    },
    {
        question: "As duas são livres de formol?",
        answer: "Sim! Tanto o Hidraliso quanto a La Bella Liss Progressiva de Chuveiro são livres de formol. Ambas usam tecnologia termoativada baseada em ácidos para alisar sem química agressiva."
    },
    {
        question: "Posso alternar entre Hidraliso e La Bella Liss?",
        answer: "Sim, elas são quimicamente compatíveis. Como ambas são livres de formol e usam tecnologia ácida, você pode alternar sem risco. Porém, recomendamos manter uma marca por pelo menos 2 ciclos para avaliar o resultado real."
    },
    {
        question: "Qual dura mais tempo no cabelo?",
        answer: "O Hidraliso promete durabilidade de 30 a 90 dias. A La Bella Liss tem duração similar, entre 30 e 60 dias dependendo da frequência de lavagem. Em ambos os casos, o resultado vai saindo gradualmente sem marcar a raiz."
    },
    {
        question: "Qual funciona melhor em cabelo loiro?",
        answer: "O Hidraliso leva vantagem aqui pois possui pigmento violeta na fórmula, o que evita o amarelamento. A La Bella Liss também funciona em loiros, mas pode ser necessário usar um matizador separado."
    },
    {
        question: "Qual tem melhor nota no Reclame Aqui?",
        answer: "Ambas têm boas avaliações. O Hidraliso possui nota excelente no Reclame Aqui, com a maioria das queixas sendo sobre logística (Correios). A La Bella Liss também tem boa reputação, sendo uma marca consolidada no mercado de beleza."
    },
    {
        question: "Preciso usar chapinha com as duas?",
        answer: "Sim! Ambas são termoativadas — ou seja, o calor do secador e/ou chapinha é essencial para selar o alisamento. Sem calor, o resultado será apenas redução de volume e anti-frizz, sem alisamento real."
    }
];

export default function FAQComparativo() {
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
        <section className="my-12" id="faq-comparativo" suppressHydrationWarning>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex items-center gap-3 mb-6" suppressHydrationWarning>
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-600" suppressHydrationWarning>
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight" suppressHydrationWarning>
                    FAQ: Hidraliso vs La Bella Liss
                </h2>
            </div>

            <p className="text-gray-600 text-sm mb-6" suppressHydrationWarning>
                Respondemos as principais dúvidas de quem está escolhendo entre essas progressivas:
            </p>

            <div className="space-y-3" suppressHydrationWarning>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-indigo-300 group"
                        suppressHydrationWarning
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-start p-5 text-left bg-white focus:outline-none"
                        >
                            <span className="font-semibold text-gray-800 text-sm md:text-base pr-4 leading-relaxed group-hover:text-indigo-600 transition-colors" suppressHydrationWarning>
                                {item.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="text-indigo-600 min-w-[20px] mt-1" />
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
                    🏆 Nossa Escolha: Hidraliso
                </p>
                <p className="text-gray-300 text-sm mb-6">
                    Melhor custo-benefício, venda direta de fábrica e garantia de 30 dias.
                </p>
                <a
                    href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded-xl transition-all hover:scale-[1.02] shadow-lg uppercase tracking-wide"
                >
                    👉 VER PREÇO COM DESCONTO DO HIDRALISO
                </a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                * Resultados podem variar de acordo com a estrutura capilar de cada pessoa.
            </p>
        </section>
    );
}
