"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// DADOS ESTRATÉGICOS - FAQ TOPO DE FUNIL: MAIZENA E ALISAMENTO NATURAL
// Objetivo: Capturar dúvidas de quem busca receitas caseiras e converter para tecnologia
const faqData = [
    {
        question: "A maizena realmente alisa o cabelo?",
        answer: "Não de forma definitiva. A maizena é um amido de milho que, quando aplicado no cabelo, forma uma película externa que dá a sensação de fios mais pesados e com menos volume. Porém, essa 'maquiagem' sai na primeira lavagem. Para alisar de verdade, é necessário agir no córtex do fio, o que a maizena não consegue fazer por ter uma molécula muito grande."
    },
    {
        question: "Por que minha receita caseira não funcionou?",
        answer: "O problema está na ciência. Ingredientes como amido, leite e açúcar são moléculas macromoleculares (gigantes). Elas não conseguem atravessar as cutículas do cabelo para chegar ao córtex, onde ocorre a transformação real do fio. Você não fez nada errado — é simplesmente uma limitação física desses ingredientes."
    },
    {
        question: "A receita da Julia Doorman funciona?",
        answer: "As receitas virais popularizadas por influenciadoras como Julia Doorman são excelentes para hidratação e redução temporária de volume. No entanto, elas não alteram a estrutura do cabelo. O resultado é uma suavização passageira que dura até a próxima lavagem. Para alisamento permanente, é necessário tecnologia específica."
    },
    {
        question: "Maizena com leite estraga o cabelo?",
        answer: "Em geral, não estraga se usada ocasionalmente e enxaguada completamente. Porém, dermatologistas alertam que resíduos de alimentos no couro cabeludo podem proliferar fungos e causar caspa ou dermatite seborreica. O ideal é não abusar e sempre lavar bem depois."
    },
    {
        question: "Qual a diferença entre hidratação e alisamento?",
        answer: "Hidratação repõe água e nutrientes no fio, deixando-o macio e brilhoso, mas NÃO muda a forma do cabelo. Alisamento altera a estrutura interna do fio (quebrando e reconstruindo pontes de enxofre) para transformar cabelo cacheado/crespo em liso. Maizena hidrata; progressiva alisa."
    },
    {
        question: "Existe algum ingrediente natural que alisa de verdade?",
        answer: "Não existe ingrediente de cozinha que alise permanentemente. Os únicos ativos capazes de alisar são os ácidos de baixo peso molecular desenvolvidos em laboratório (como ácido glioxílico, ácido tioglicólico ou blends termoativados). Esses compostos são pequenos o suficiente para penetrar no fio."
    },
    {
        question: "A progressiva de chuveiro é diferente da maizena?",
        answer: "Sim, completamente diferente. A progressiva de chuveiro usa tecnologia de ácidos termoativados que realmente penetram no fio e realinham sua estrutura. Já a maizena apenas cria uma película externa temporária. Uma age por dentro (transformação), a outra por fora (maquiagem)."
    },
    {
        question: "Posso usar maizena antes de fazer progressiva?",
        answer: "Sim, você pode usar receitas de maizena antes de fazer uma progressiva, desde que lave bem o cabelo e remova todos os resíduos. A maizena não interfere quimicamente na progressiva, mas resíduos no fio podem impedir que o produto profissional penetre corretamente."
    },
    {
        question: "Existe alguma receita caseira que seja perigosa?",
        answer: "Sim! Cuidado com receitas que sugerem misturar 'pó xadrez', 'açúcar mascavo fervido' ou outros itens não capilares. Isso pode causar queimaduras no couro cabeludo e quebra severa dos fios. Se você quer segurança, use produtos testados e aprovados pela Anvisa."
    }
];

export default function FAQMaizena() {
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
        <section className="my-12" id="faq-maizena" suppressHydrationWarning>
            {/* Injeção Invisível para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex items-center gap-3 mb-6" suppressHydrationWarning>
                <div className="bg-amber-100 p-2 rounded-full text-amber-600" suppressHydrationWarning>
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight" suppressHydrationWarning>
                    Perguntas Frequentes: Maizena e Alisamento Natural
                </h2>
            </div>

            <p className="text-gray-600 text-sm mb-6" suppressHydrationWarning>
                Separamos as dúvidas mais comuns sobre receitas caseiras de alisamento e respondemos com base científica.
            </p>

            <div className="space-y-3">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-amber-300 group"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-start p-5 text-left bg-white focus:outline-none"
                        >
                            <span className="font-semibold text-gray-800 text-sm md:text-base pr-4 leading-relaxed group-hover:text-amber-600 transition-colors">
                                {item.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="text-amber-600 min-w-[20px] mt-1" />
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

            {/* CTA FINAL - PONTE PARA RESENHA HIDRALISO */}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/30 text-center text-white shadow-xl">
                <p className="font-bold text-orange-400 mb-3 text-lg">
                    🔬 Cansou de perder tempo na cozinha?
                </p>
                <p className="text-gray-300 text-sm mb-6">
                    Descubra a tecnologia que +50.000 brasileiras estão usando para ter o liso espelhado em casa, sem formol.
                </p>
                <a
                    href="/blog/hidraliso-funciona-resenha"
                    className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded-xl transition-all hover:scale-[1.02] shadow-lg uppercase tracking-wide"
                >
                    👉 VER RESENHA COMPLETA DO HIDRALISO
                </a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                * Resultados podem variar de acordo com a estrutura capilar de cada pessoa.
            </p>
        </section>
    );
}
