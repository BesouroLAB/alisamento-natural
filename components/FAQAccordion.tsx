"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// DADOS ESTRATÉGICOS (Baseados na Análise de Mercado e Busca por Voz)
const faqData = [
    {
        question: "Grávida ou lactante pode usar a Progressiva de Chuveiro?",
        answer: "O Hidraliso não contém formol, sendo desenvolvido com tecnologia de ácidos frutais de baixo peso molecular, o que o torna muito mais seguro. No entanto, por protocolo médico padrão, recomendamos que gestantes e lactantes apresentem a composição (disponível no site) ao seu médico antes do uso."
    },
    {
        question: "É compatível com outras químicas (Guanidina, Henê, Luzes)?",
        answer: "Sim! A tecnologia Pro Liss é compatível com todas as químicas, incluindo Henê, Guanidina e Tioglicolato. O segredo é sempre realizar o 'Teste de Mecha' antes da aplicação total para verificar a saúde do seu fio."
    },
    {
        question: "Funciona em cabelo crespo ou muito cacheado (Tipo 4)?",
        answer: "Sim. Diferente de receitas caseiras que apenas hidratam, o Hidraliso penetra no córtex capilar. Para cabelos crespos, recomenda-se deixar o produto agir pelo tempo máximo indicado (20 a 30 minutos) e caprichar na ativação com secador para o efeito liso absoluto."
    },
    {
        question: "Quanto tempo dura o efeito liso?",
        answer: "O efeito é progressivo e dura, em média, de 30 a 90 dias. Diferente da chapinha que sai na água, o Hidraliso possui 'efeito memória': quanto mais você usa, mais liso o cabelo fica a longo prazo."
    },
    {
        question: "O produto estraga o cabelo ou afina as pontas?",
        answer: "Não. O que estraga o cabelo é o formol (que cria uma capa plástica e impede a nutrição). O Hidraliso utiliza base condicionante que hidrata enquanto alisa, evitando o aspecto 'espigado' nas pontas."
    },
    {
        question: "Preciso saber escovar o cabelo profissionalmente?",
        answer: "Não. O produto é termoativado, o que significa que ele precisa de calor para fixar a forma. Você só precisa secar o cabelo com o secador (basta o ar quente) para ativar o brilho espelhado. Não é necessário técnica de salão."
    }
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // SCHEMA MARKUP PARA GOOGLE (JSON-LD)
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
        <section className="max-w-3xl mx-auto my-12 px-5" id="faq">
            {/* Injeção Invisível para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Dúvidas Frequentes</h2>
            </div>

            <div className="space-y-3">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-orange-300 group"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-start p-5 text-left bg-white focus:outline-none"
                        >
                            <span className="font-semibold text-gray-800 text-sm md:text-base pr-4 leading-relaxed group-hover:text-orange-600 transition-colors">
                                {item.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="text-orange-600 min-w-[20px] mt-1" />
                            ) : (
                                <ChevronDown className="text-gray-400 min-w-[20px] mt-1" />
                            )}
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-white">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                * Resultados podem variar de acordo com a estrutura capilar de cada pessoa.
            </p>
        </section>
    );
}
