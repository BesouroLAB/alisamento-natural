"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// DADOS ESTRATÉGICOS - FAQ OTIMIZADA NEURONWRITER (10 PERGUNTAS)
const faqData = [
    {
        question: "O Hidraliso tem formol? Vai arder meus olhos?",
        answer: "Não. O grande diferencial desta progressiva de chuveiro é ser 100% livre de formol. Sua base alisante utiliza um blend de ácidos frutais e tecnologia Pro Liss. Por isso, não libera vapores tóxicos, não causa ardência nos olhos e nem irritação na garganta durante a aplicação."
    },
    {
        question: "Gestantes e lactantes podem usar?",
        answer: "Segundo o fabricante, a fórmula é suave e não possui contraindicações graves. No entanto, por se tratar de um período delicado, a recomendação padrão de segurança é: sempre leve a composição do produto para o seu médico obstetra avaliar antes de usar qualquer cosmético de transformação."
    },
    {
        question: "Meu cabelo é loiro ou descolorido. Vai amarelar?",
        answer: "Não. O Hidraliso possui componentes matizadores em sua fórmula (muitas usuárias relatam que o produto tem uma cor levemente violeta/azulada). Isso evita o desbotamento e o amarelamento comum em progressivas ácidas, ajudando a manter os fios loiros com cor viva e brilho."
    },
    {
        question: "Tenho cabelo crespo ou muito volumoso. Funciona para mim?",
        answer: "Sim. A tecnologia de baixo peso molecular foi desenvolvida para penetrar até nos fios mais resistentes (Curvaturas 4A, 4B e 4C). Em cabelos muito crespos, o resultado da primeira aplicação costuma ser uma redução drástica de volume e abertura de cachos. Para um efeito 'liso escorrido', pode ser necessária uma segunda aplicação (respeitando o intervalo) e finalização com chapinha."
    },
    {
        question: "O produto é compatível com outras químicas (Henê, Guanidina, Tioglicolato)?",
        answer: "O Hidraliso é compatível com a grande maioria das químicas, incluindo Henê e colorações, pois age por pH e não por quebra de pontes de enxofre agressiva. Porém, a regra de ouro dos cabeleireiros vale aqui: faça sempre o Teste de Mecha antes de aplicar na cabeça toda para verificar a resistência do seu fio."
    },
    {
        question: "Quanto tempo dura o efeito liso?",
        answer: "A durabilidade média é de 30 a 90 dias. Isso varia de acordo com o crescimento da sua raiz e a frequência de lavagens. O produto não sai 'de uma vez', ele vai saindo gradualmente, o que evita aquele efeito marcado de raiz alta e ponta esticada."
    },
    {
        question: "De quanto em quanto tempo posso retocar?",
        answer: "Você pode reaplicar o produto assim que sentir necessidade (geralmente quando a raiz cresce, cerca de 30 dias). Como ele também atua como um hidratante potente, não há risco de 'corte químico' por acumulação, desde que o cabelo esteja saudável."
    },
    {
        question: "Preciso mesmo usar secador e chapinha?",
        answer: "Sim, o uso de fontes de calor é obrigatório para a ativação. O produto é termoativado. Se você apenas passar e deixar secar naturalmente, ele vai funcionar como um redutor de volume e anti-frizz, mas não vai alisar a estrutura. Para o liso perfeito, o calor é o catalisador da reação."
    },
    {
        question: "Onde comprar o Hidraliso Original?",
        answer: "Cuidado com golpes! Devido ao sucesso, existem falsificações sendo vendidas no Mercado Livre, Shopee e Americanas (muitas vezes com formol escondido). O produto original, com segurança e garantia, é vendido exclusivamente através do Site Oficial do Fabricante (link no final desta página)."
    },
    {
        question: "E se eu não gostar do resultado?",
        answer: "O fabricante oferece uma Garantia Blindada de 30 Dias. Se você usar e achar que seu cabelo não alisou, não brilhou ou não teve o resultado esperado, basta entrar em contato com o suporte deles e pedir o reembolso de 100% do valor pago. O risco é zero."
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
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Perguntas Frequentes (FAQ): Tire suas dúvidas sobre o Alisamento Natural</h2>
            </div>

            <p className="text-gray-600 text-sm mb-6">
                Separamos as 10 perguntas mais comuns enviadas por nossas leitoras e respondidas com base na bula oficial e na nossa análise de mercado.
            </p>

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

            {/* CTA FINAL */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-orange-50 rounded-2xl border border-indigo-100 text-center">
                <p className="text-gray-700 font-medium mb-4">
                    Quer testar o alisamento natural sem riscos? Aproveite o lote promocional com entrega rápida para todo o Brasil.
                </p>
                <a
                    href="https://app.monetizze.com.br/r/AGF20985468/?u=JJ82891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition transform hover:scale-[1.02] shadow-lg"
                >
                    👉 CLIQUE AQUI PARA ACESSAR O SITE OFICIAL
                </a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                * Resultados podem variar de acordo com a estrutura capilar de cada pessoa.
            </p>
        </section>
    );
}
