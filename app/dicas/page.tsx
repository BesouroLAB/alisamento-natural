import Link from "next/link";
import { ArrowLeft, Sparkles, Droplets, ThermometerSun, Clock, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Guia Completo de Aplicação | Alisamento Natural",
    description: "Passo a passo detalhado para aplicar o Hidraliso em casa e obter resultados de salão em 15 minutos.",
};

export default function DicasPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 shadow-sm flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition group">
                    <ArrowLeft size={18} />
                    <span className="text-xs font-bold uppercase tracking-wide">Voltar</span>
                </Link>
                <div className="flex items-center gap-1.5 text-pink-600 font-bold text-sm uppercase tracking-wider">
                    <Sparkles size={16} /> Guia de Aplicação
                </div>
            </header>

            <main className="flex-1 max-w-2xl mx-auto px-5 py-8 pb-32">
                {/* Título Principal */}
                <div className="text-center mb-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-pink-600 font-bold bg-pink-50 px-3 py-1 rounded-full">Passo a Passo</span>
                    <h1 className="text-3xl font-black text-gray-900 mt-4 mb-3 tracking-tight">
                        Como Aplicar o Hidraliso em Casa
                    </h1>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                        Siga este guia e tenha resultados de salão em apenas 15 minutos, sem sair do seu banheiro.
                    </p>
                </div>

                {/* Timeline de Passos */}
                <div className="relative">
                    {/* Linha vertical conectora */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-pink-300 via-pink-400 to-green-400"></div>

                    {/* PASSO 1 */}
                    <div className="relative flex gap-5 mb-10">
                        <div className="shrink-0 size-12 rounded-full bg-pink-100 flex items-center justify-center z-10 border-4 border-white shadow-md">
                            <Droplets className="text-pink-600" size={20} />
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <span className="text-[10px] text-pink-600 font-bold uppercase tracking-wider">Passo 1</span>
                            <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Lave o Cabelo Normalmente</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Use seu shampoo favorito para remover resíduos de produtos. O cabelo deve estar limpo, mas ainda <strong>úmido</strong> para a aplicação.
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                                <Clock size={12} /> ~3 minutos
                            </div>
                        </div>
                    </div>

                    {/* PASSO 2 */}
                    <div className="relative flex gap-5 mb-10">
                        <div className="shrink-0 size-12 rounded-full bg-pink-200 flex items-center justify-center z-10 border-4 border-white shadow-md">
                            <span className="text-pink-700 font-black text-lg">2</span>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <span className="text-[10px] text-pink-600 font-bold uppercase tracking-wider">Passo 2</span>
                            <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Aplique o Hidraliso Mecha por Mecha</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Divida o cabelo em seções. Aplique o produto da raiz às pontas, sem economizar. Massageie bem para garantir <strong>cobertura completa</strong>.
                            </p>
                            <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                                <p className="text-xs text-amber-700 font-medium">
                                    💡 <strong>Dica:</strong> Use pente fino para ajudar a distribuição uniforme.
                                </p>
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                                <Clock size={12} /> ~5 minutos
                            </div>
                        </div>
                    </div>

                    {/* PASSO 3 */}
                    <div className="relative flex gap-5 mb-10">
                        <div className="shrink-0 size-12 rounded-full bg-pink-300 flex items-center justify-center z-10 border-4 border-white shadow-md">
                            <span className="text-pink-800 font-black text-lg">3</span>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <span className="text-[10px] text-pink-600 font-bold uppercase tracking-wider">Passo 3</span>
                            <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Deixe Agir por 3 Minutos</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Aguarde o tempo indicado. Os ativos de baixo peso molecular penetram na cutícula e começam a <strong>realinhar as pontes de hidrogênio</strong>.
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                                <Clock size={12} /> 3 minutos (exatos)
                            </div>
                        </div>
                    </div>

                    {/* PASSO 4 */}
                    <div className="relative flex gap-5 mb-10">
                        <div className="shrink-0 size-12 rounded-full bg-pink-400 flex items-center justify-center z-10 border-4 border-white shadow-md">
                            <ThermometerSun className="text-white" size={20} />
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <span className="text-[10px] text-pink-600 font-bold uppercase tracking-wider">Passo 4</span>
                            <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Enxágue e Seque com Secador</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Lave normalmente e seque os fios. Use escova e secador para <strong>ativar termicamente</strong> o produto. É aqui que a mágica acontece!
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                                <Clock size={12} /> ~5 minutos
                            </div>
                        </div>
                    </div>

                    {/* RESULTADO FINAL */}
                    <div className="relative flex gap-5">
                        <div className="shrink-0 size-12 rounded-full bg-green-500 flex items-center justify-center z-10 border-4 border-white shadow-md">
                            <CheckCircle className="text-white" size={22} />
                        </div>
                        <div className="flex-1 bg-green-50 rounded-2xl p-5 border border-green-200">
                            <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Resultado</span>
                            <h3 className="text-lg font-bold text-green-800 mt-1 mb-2">Cabelo Liso e Brilhante! ✨</h3>
                            <p className="text-sm text-green-700 leading-relaxed">
                                Pronto! Seu cabelo estará liso, sedoso e com aquele brilho de salão. O efeito dura até a próxima lavagem.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 p-6 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl text-center text-white shadow-xl">
                    <h3 className="text-xl font-bold mb-2">Pronta para testar?</h3>
                    <p className="text-pink-100 text-sm mb-5">
                        Aproveite as ofertas exclusivas na Amazon.
                    </p>
                    <Link
                        href="/ofertas"
                        className="inline-block w-full bg-white text-pink-600 font-black py-3 px-8 rounded-xl hover:bg-pink-50 transition"
                    >
                        VER OFERTAS →
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
