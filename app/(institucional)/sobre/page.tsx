import Link from "next/link";
import { ArrowLeft, Award, Shield, Beaker, UserCheck } from "lucide-react";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPersonSchema, getProfilePageSchema } from "@/lib/schema";

export const metadata = {
  title: "Sobre Nós | Alisamento Natural",
  description: "Conheça a missão do portal Alisamento Natural, nossa metodologia de curadoria e a história de Tiago Fernandes.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={getPersonSchema()} />
      <JsonLd data={getProfilePageSchema()} />
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition">
          <ArrowLeft size={18} />
          <span className="text-xs font-bold uppercase tracking-wide">Home</span>
        </Link>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Institucional</span>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-10 pb-32">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">
          Sobre o Alisamento Natural
        </h1>
        <p className="text-lg text-indigo-600 font-medium mb-8 italic">
          Curadoria independente, segurança científica e transparência sobre alisamentos capilares.
        </p>

        <div className="prose prose-gray max-w-none leading-relaxed space-y-6">
          <p>
            O <strong>Alisamento Natural</strong> nasceu de uma frustração comum: a dificuldade de encontrar informações honestas na internet sobre progressivas de chuveiro e alisamentos caseiros. De um lado, promessas de &quot;liso definitivo sem química&quot;; do outro, resenhas compradas que ocultam os reais ingredientes e riscos dos produtos.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nossa Missão</h2>
          <p>
            Ser o portal de referência investigativa no Brasil sobre alinhadores capilares de chuveiro e receitas caseiras. Isso significa desmistificar receitas populares com base científica, analisar a composição real (o INCI) dos produtos, checar a regularização oficial na <strong>Anvisa</strong> e alinhar a expectativa da leitora antes da compra.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-6 text-amber-900 text-sm">
            <strong>Princípio Fundamental:</strong> Uma progressiva de chuveiro realinha e reduz o frizz, mas <em>nunca substitui um alisamento químico definitivo de salão</em>. Quem promete transformar cabelo crespo em liso escorrido apenas no banho está vendendo uma ilusão.
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quem Está por Trás</h2>
          <div className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="bg-indigo-100 p-3 rounded-full shrink-0">
              <UserCheck className="text-indigo-600" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1" id="tiago-fernandes">
                Tiago Fernandes — Curador & Fundador
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Com 16 anos de experiência em e-commerce e UX (User Experience), Tiago Fernandes estruturou o Alisamento Natural sob o pilar da clareza e transparência. Seu trabalho é focado em transformar fichas químicas complexas e dados regulatórios em orientações simples e práticas para a leitora decidir com segurança.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Metodologia de Curadoria</h2>
          <div className="not-prose grid gap-4 my-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <Shield className="text-amber-500 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Rigor Regulatório (Anvisa)</h3>
                <p className="text-sm text-gray-600">
                  Verificamos os registros e notificações de cada produto diretamente no sistema oficial da Anvisa. Jamais indicamos fórmulas com formol ou ativos proibidos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <Beaker className="text-indigo-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Análise do INCI</h3>
                <p className="text-sm text-gray-600">
                  Avaliamos a lista real de ingredientes (INCI) de cada rótulo, identificando ativos de nutrição, reconstrução e eventuais conservantes alergênicos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <Award className="text-green-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Transparência de Afiliado</h3>
                <p className="text-sm text-gray-600">
                  O site é mantido via links de afiliados. Se você compra por nossos links, podemos receber uma comissão sem custo adicional para você. Nossa recomendação nunca é vendida: apontamos prós e contras de todos os produtos de forma igual.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fontes e Segurança</h2>
          <p className="text-sm text-gray-600">
            Toda recomendação do portal se fundamenta nas diretrizes oficiais da Anvisa (RDC nº 752/2022 e RDC nº 906/2024) e em pesquisas de cosmetologia. Lembre-se sempre de fazer a prova de pele e o teste de mecha antes de aplicar qualquer produto cosmético.
          </p>
        </div>
      </main>

      <Footer />
      <MobileStickyFooter />
    </div>
  );
}
