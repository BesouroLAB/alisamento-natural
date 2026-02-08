import Link from "next/link";
import { ArrowLeft, Award, Shield, Beaker } from "lucide-react";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Sobre Nós | Alisamento Natural",
    description: "Conheça a missão do portal Alisamento Natural: separar mitos da ciência no universo da beleza capilar.",
};

export default function SobrePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition">
                    <ArrowLeft size={18} />
                    <span className="text-xs font-bold uppercase tracking-wide">Home</span>
                </Link>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Institucional</span>
            </header>

            <main className="max-w-2xl mx-auto px-5 py-10 pb-32">
                <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Sobre o Alisamento Natural</h1>
                <p className="text-lg text-indigo-600 font-medium mb-8 italic">Nossa Missão: Ciência & Beleza</p>

                <div className="prose prose-gray max-w-none">
                    <p>
                        Bem-vinda ao <strong>AlisamentoNatural.com.br</strong>, o seu portal de referência sobre tricologia acessível e tecnologia capilar.
                    </p>
                    <p>
                        Nascemos de uma inconformidade: a internet está cheia de receitas caseiras perigosas e promessas milagrosas que frustram a mulher brasileira. Nossa missão editorial é clara: <strong>separar o mito da ciência</strong>.
                    </p>

                    <h2>O Que Fazemos</h2>
                    <p>
                        Investigamos a fundo as formulações químicas dos produtos mais populares do mercado. Nossa equipe editorial analisa pH, peso molecular e compatibilidade química para recomendar apenas o que é seguro e eficaz.
                    </p>

                    <h2>Nossos Valores</h2>
                    <div className="not-prose grid gap-4 my-6">
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <Shield className="text-orange-500 shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Segurança em Primeiro Lugar</h3>
                                <p className="text-sm text-gray-600">Jamais recomendamos produtos com Formol ou proibidos pela ANVISA.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <Beaker className="text-indigo-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Verdade Científica</h3>
                                <p className="text-sm text-gray-600">Explicamos por que algo funciona, em vez de apenas dizer "use isso".</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <Award className="text-orange-500 shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Independência Editorial</h3>
                                <p className="text-sm text-gray-600">Nossas análises são baseadas em testes técnicos e feedbacks reais de consumidoras.</p>
                            </div>
                        </div>
                    </div>

                    <p>
                        Se você está cansada de testar produtos que não entregam o que prometem, <strong>você está no lugar certo</strong>.
                    </p>
                </div>
            </main>

            <Footer />
            <MobileStickyFooter />
        </div>
    );
}
