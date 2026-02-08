"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// DADOS ESTRATÉGICOS - FAQ MEIO DE FUNIL: RANKING DE PROGRESSIVAS
// Objetivo: Responder dúvidas transacionais e converter para compra
const faqData = [
    {
        question: "Qual a melhor progressiva de chuveiro para cabelo crespo?",
        answer: "Para cabelos crespos (curvaturas 4A, 4B, 4C), as melhores opções são La Bella Liss, Super Poderes e Hidraliso. Todas possuem tecnologia de baixo peso molecular que penetra nos fios mais resistentes. O Hidraliso se destaca pelo custo-benefício e a La Bella Liss pelo resultado de salão."
    },
    {
        question: "A La Bella Liss é melhor que o Hidraliso?",
        answer: "Depende do seu objetivo. A La Bella Liss é mais conhecida e tem presença forte em salões. Já o Hidraliso oferece melhor custo-benefício, sendo vendido direto de fábrica com desconto. Em termos de resultado, ambas são excelentes e livre de formol."
    },
    {
        question: "Progressiva de chuveiro estraga o cabelo?",
        answer: "Não. Diferente das progressivas antigas com formol, as progressivas de chuveiro modernas (como as deste ranking) são tratamentos que hidratam enquanto alisam. Elas são livres de formol e podem ser usadas com frequência sem danificar os fios."
    },
    {
        question: "Quanto tempo dura o efeito da progressiva de chuveiro?",
        answer: "A duração média é de 30 a 90 dias, dependendo da marca, frequência de lavagem e estrutura do cabelo. Produtos como Megalizz prometem até 3 meses. Para manutenção, reaplique quando sentir necessidade."
    },
    {
        question: "Posso usar progressiva de chuveiro em cabelo com química?",
        answer: "Sim. A maioria das progressivas de chuveiro é compatível com outras químicas (coloração, Henê, Guanidina). Porém, sempre faça o Teste de Mecha antes de aplicar no cabelo todo, especialmente se o cabelo estiver sensibilizado."
    },
    {
        question: "Super Poderes é boa para reduzir volume?",
        answer: "Sim! A Super Poderes é uma das melhores opções para redução de volume instantâneo. Ela é conhecida como 'tratamento de choque' e foca em desmaiar o cabelo rapidamente, ideal para quem tem fios muito volumosos."
    },
    {
        question: "Onde comprar progressiva de chuveiro original?",
        answer: "Você pode encontrar as marcas do ranking em farmácias, perfumarias e sites como Amazon e Mercado Livre. Para o Hidraliso especificamente, recomendamos o site oficial do fabricante para garantir o produto original e promoções exclusivas."
    },
    {
        question: "Preciso usar chapinha depois da progressiva de chuveiro?",
        answer: "Sim, para ativar 100% do produto. A maioria das progressivas de chuveiro é termoativada, ou seja, o calor do secador e/ou chapinha é essencial para o alisamento. Sem o calor, o efeito será apenas de redução de volume e anti-frizz."
    },
    {
        question: "Qual a diferença entre progressiva de chuveiro e botox capilar?",
        answer: "A progressiva de chuveiro foca no alisamento/redução de volume. O botox foca na hidratação e reposição de massa. Alguns produtos como a Prohall Biomask e Aussie misturam os dois conceitos (hidratação + alinhamento)."
    },
    {
        question: "A progressiva de chuveiro funciona em cabelo loiro?",
        answer: "Sim, mas escolha produtos com componentes matizadores (como o Hidraliso) para evitar amarelamento. Evite produtos com excesso de óleos que podem pesar em cabelos finos. Teste sempre uma mecha antes."
    }
];

export default function FAQRanking() {
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
        <section className="my-12" id="faq-ranking">
            {/* Injeção Invisível para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    Perguntas Frequentes: Progressiva de Chuveiro
                </h2>
            </div>

            <p className="text-gray-600 text-sm mb-6">
                Tire suas dúvidas sobre as melhores marcas de progressiva de chuveiro do mercado.
            </p>

            <div className="space-y-3">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-indigo-300 group"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-start p-5 text-left bg-white focus:outline-none"
                        >
                            <span className="font-semibold text-gray-800 text-sm md:text-base pr-4 leading-relaxed group-hover:text-indigo-600 transition-colors">
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
                        >
                            <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-white">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA FINAL */}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/30 text-center text-white shadow-xl">
                <p className="font-bold text-orange-400 mb-3 text-lg">
                    🏆 Pronta para escolher sua progressiva?
                </p>
                <p className="text-gray-300 text-sm mb-6">
                    Aproveite a promoção direto de fábrica com frete grátis para todo o Brasil.
                </p>
                <a
                    href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded-xl transition-all hover:scale-[1.02] shadow-lg uppercase tracking-wide"
                >
                    👉 VER PROMOÇÃO DO HIDRALISO
                </a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                * Resultados podem variar de acordo com a estrutura capilar de cada pessoa.
            </p>
        </section>
    );
}
