import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Termos de Uso | Alisamento Natural",
    description: "Termos de uso e condições do portal Alisamento Natural. Leia sobre isenção de responsabilidade, afiliação e propriedade intelectual.",
};

export default function TermosPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition">
                    <ArrowLeft size={18} />
                    <span className="text-xs font-bold uppercase tracking-wide">Home</span>
                </Link>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Institucional</span>
            </header>

            <main className="max-w-2xl mx-auto px-5 py-10 pb-32">
                <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Termos de Uso</h1>
                <p className="text-sm text-gray-400 mb-8">Última atualização: Fevereiro de 2026</p>

                <div className="prose prose-gray prose-sm max-w-none">
                    <h2>1. Natureza do Serviço</h2>
                    <p>
                        O <strong>AlisamentoNatural.com.br</strong> é um site de caráter informativo e editorial. Não somos os fabricantes do produto Hidraliso, nem responsáveis pela sua logística. Atuamos como curadores de conteúdo e divulgadores autorizados.
                    </p>

                    <h2>2. Isenção de Responsabilidade Médica (Disclaimer)</h2>
                    <p>
                        O conteúdo deste site não substitui aconselhamento médico profissional. Embora divulguemos produtos notificados na ANVISA (Grau 2), como o Hidraliso, informações sobre saúde capilar, gravidez e lactação são fornecidas apenas para fins educativos.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4 not-prose">
                        <p className="text-sm text-amber-800 font-medium">
                            ⚠️ <strong>Aviso:</strong> Gestantes, lactantes e pessoas com histórico de alergias devem sempre consultar um médico antes de iniciar qualquer tratamento cosmético, mesmo os livres de formol.
                        </p>
                    </div>

                    <h2>3. Afiliação e Publicidade</h2>
                    <p>
                        Este site pode conter links de afiliados. Isso significa que, se você clicar em um link e realizar uma compra, podemos receber uma comissão sem nenhum custo extra para você. Isso financia nossa equipe de redação e testes.
                    </p>

                    <h2>4. Propriedade Intelectual</h2>
                    <p>
                        Todo o conteúdo (textos, design, logotipos e a marca "Alisamento Natural") é protegido por direitos autorais. É proibida a cópia ou reprodução integral de nossos artigos (especialmente os comparativos e resenhas) sem autorização prévia.
                    </p>

                    <h2>5. Garantias e Resultados</h2>
                    <p>
                        Os resultados dos produtos analisados (como o efeito liso) podem variar de pessoa para pessoa, dependendo da estrutura capilar (Tipo 1 a 4C), histórico químico e correta aplicação. Não garantimos resultados específicos, pois a biologia individual é soberana.
                    </p>
                </div>
            </main>

            <Footer />
            <MobileStickyFooter />
        </div>
    );
}
