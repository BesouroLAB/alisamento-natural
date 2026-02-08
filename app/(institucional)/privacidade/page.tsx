import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Política de Privacidade | Alisamento Natural",
    description: "Saiba como o Alisamento Natural coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
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
                <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Política de Privacidade</h1>
                <p className="text-sm text-gray-400 mb-8">Em conformidade com a LGPD</p>

                <div className="prose prose-gray prose-sm max-w-none">
                    <p>
                        Sua privacidade é levada a sério no <strong>AlisamentoNatural.com.br</strong>. Esta política descreve como coletamos, usamos e protegemos seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                    </p>

                    <h2>1. Coleta de Dados</h2>
                    <p>Ao acessar nosso site, podemos coletar automaticamente:</p>
                    <ul>
                        <li><strong>Cookies e Pixels:</strong> Utilizamos tecnologias de rastreamento (como o Google Analytics e Pixel do Facebook) para entender como você navega, quais artigos lê e para otimizar a exibição de anúncios relevantes.</li>
                        <li><strong>Dados de Dispositivo:</strong> Tipo de aparelho (Mobile/Desktop), navegador e localização aproximada (IP).</li>
                    </ul>

                    <h2>2. Uso das Informações</h2>
                    <p><strong>Não vendemos seus dados.</strong> As informações coletadas servem para:</p>
                    <ul>
                        <li>Personalizar o conteúdo (ex: mostrar artigos relevantes para cabelos crespos).</li>
                        <li>Melhorar a performance técnica do site.</li>
                        <li><strong>Marketing e Remarketing:</strong> Podemos exibir anúncios do Hidraliso para você em outras plataformas baseados no seu interesse demonstrado aqui.</li>
                    </ul>

                    <h2>3. Links para Terceiros</h2>
                    <p>
                        Nosso site contém links para o site oficial do fabricante do Hidraliso e plataformas de pagamento. Ao clicar nesses links, você estará sujeito à política de privacidade deles. Não temos acesso aos seus dados bancários ou de cartão de crédito.
                    </p>

                    <h2>4. Seus Direitos</h2>
                    <p>
                        Você pode, a qualquer momento, solicitar a exclusão de seus dados de nossa base de marketing ou desativar os cookies através das configurações do seu navegador.
                    </p>

                    <h2>5. Contato</h2>
                    <p>
                        Para dúvidas sobre seus dados, entre em contato pelo e-mail: <a href="mailto:privacidade@alisamentonatural.com.br">privacidade@alisamentonatural.com.br</a>
                    </p>
                </div>
            </main>

            <Footer />
            <MobileStickyFooter />
        </div>
    );
}
