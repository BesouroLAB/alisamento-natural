"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// DADOS ESTRATÉGICOS - FAQ TOPO DE FUNIL: RESENHA HIDRALISO
// Objetivo: Responder TODAS as dúvidas sobre o produto e converter
const faqData = [
    {
        question: "O Hidraliso tem formol?",
        answer: "Não. O Hidraliso é 100% livre de formol e parabenos. Sua base alisante utiliza um blend de ácidos frutais e tecnologia Pro Liss. Por isso, não libera vapores tóxicos, não causa ardência nos olhos e nem irritação na garganta durante a aplicação."
    },
    {
        question: "Quanto tempo dura o efeito do Hidraliso?",
        answer: "O Hidraliso funciona como uma progressiva real, durando cerca de 30 a 90 dias dependendo da estrutura do cabelo e frequência de lavagens. O efeito vai saindo gradualmente, sem marcar a raiz."
    },
    {
        question: "Posso usar Hidraliso em cabelo loiro?",
        answer: "Sim! O Hidraliso não desbota os fios e possui pigmento violeta na fórmula. Isso evita o amarelamento comum em outras progressivas ácidas, mantendo a cor do loiro viva e brilhante."
    },
    {
        question: "O Hidraliso alisa cabelo crespo?",
        answer: "Sim. O Hidraliso alisante foi desenvolvido para funcionar em todos os tipos de cabelo, incluindo crespos (curvaturas 4A, 4B e 4C). Em cabelos muito crespos, o resultado da primeira aplicação é redução drástica de volume e abertura de cachos."
    },
    {
        question: "Hidraliso é compatível com Henê ou Guanidina?",
        answer: "Sim, o Hidraliso é 100% compatível com todas as químicas anteriores, incluindo Henê, Guanidina e colorações. Porém, sempre faça o Teste de Mecha antes de aplicar no cabelo todo."
    },
    {
        question: "Homens podem usar o Hidraliso?",
        answer: "Sim! No chuveiro é muito fácil usar o produto, servindo para homens também. Muitos homens usam para reduzir volume e alisar cabelos ondulados ou cacheados."
    },
    {
        question: "O Hidraliso é uma progressiva de chuveiro mesmo?",
        answer: "Sim, o Hidraliso progressiva de chuveiro é um alisante termoativado real. Ele não é apenas uma máscara de hidratação — ele possui ativos que penetram no fio e realinham a estrutura capilar com auxílio do calor."
    },
    {
        question: "Preciso de um profissional para aplicar?",
        answer: "Não, você pode aplicar o Hidraliso sozinha em casa. Um folheto explicativo acompanha o produto com o passo a passo completo. A aplicação é simples e feita durante o banho."
    },
    {
        question: "Hidraliso tem cheiro forte?",
        answer: "Não! Diferente das progressivas com formol que têm um cheiro insuportável, o Hidraliso tem uma fragrância suave e agradável. Ele não libera fumaça e nem causa incômodo durante a aplicação no chuveiro."
    },
    {
        question: "Posso usar Hidraliso todos os dias?",
        answer: "Não é necessário e nem recomendado. O Hidraliso é um tratamento de longa duração (até 90 dias). O uso excessivo não vai alisar mais, pois o fio tem um limite de absorção. O ideal é respeitar o intervalo de crescimento da raiz, geralmente 30 dias."
    },
    {
        question: "Hidraliso no Reclame Aqui: É confiável?",
        answer: "Sim. Ao pesquisar o Hidraliso no Reclame Aqui, você verá que a grande maioria das reclamações é sobre atraso na entrega (correios) ou compra em sites não oficiais. A nota da empresa é excelente e eles resolvem 100% dos casos de quem compra pelo site oficial."
    },
    {
        question: "Onde comprar o Hidraliso original?",
        answer: "Para garantir o produto original e evitar falsificações, compre apenas pelo site oficial do fabricante. Cuidado com Mercado Livre e Shopee — produtos falsos podem conter formol escondido e prejudicar seu cabelo."
    }
];

export default function FAQHidraliso() {
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
        <section className="my-12" id="faq-hidraliso" suppressHydrationWarning>
            {/* Injeção Invisível para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex items-center gap-3 mb-6" suppressHydrationWarning>
                <div className="bg-orange-100 p-2 rounded-full text-orange-600" suppressHydrationWarning>
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight" suppressHydrationWarning>
                    FAQ: Perguntas sobre o Hidraliso
                </h2>
            </div>

            <p className="text-gray-600 text-sm mb-6" suppressHydrationWarning>
                Separamos as principais dúvidas baseadas nas buscas reais das nossas leitoras:
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
                            suppressHydrationWarning
                        >
                            <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-white" suppressHydrationWarning>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA FINAL */}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/30 text-center text-white shadow-xl">
                <p className="font-bold text-orange-400 mb-3 text-lg">
                    🛡️ Garantia de 30 Dias + Frete Grátis
                </p>
                <p className="text-gray-300 text-sm mb-6">
                    Compre no site oficial e receba em casa. Se não gostar, devolvemos seu dinheiro.
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
