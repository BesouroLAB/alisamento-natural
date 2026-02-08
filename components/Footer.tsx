import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-32 md:pb-12 text-gray-600 text-sm">
            <div className="max-w-4xl mx-auto px-5">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center md:text-left">
                    {/* Coluna 1: Sobre */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Alisamento Natural</h4>
                        <p className="leading-relaxed text-xs text-gray-500">
                            Somos um portal editorial focado em desmistificar a indústria da beleza. Nossa missão é apresentar tecnologias seguras que substituem químicas agressivas.
                        </p>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Navegação</h4>
                        <ul className="space-y-2 text-xs">
                            <li><Link href="/" className="hover:text-orange-600 transition">Página Inicial</Link></li>
                            <li><Link href="/blog" className="hover:text-orange-600 transition">Blog</Link></li>
                            <li><Link href="/dicas" className="hover:text-orange-600 transition">Dicas de Especialista</Link></li>
                            <li><Link href="/sobre" className="hover:text-orange-600 transition">Sobre Nós</Link></li>
                            <li><Link href="/sitemap.xml" className="hover:text-orange-600 transition" prefetch={false}>Mapa do Site</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Legal */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Legal</h4>
                        <ul className="space-y-2 text-xs">
                            <li><Link href="/termos" className="hover:text-orange-600 transition">Termos de Uso</Link></li>
                            <li><Link href="/privacidade" className="hover:text-orange-600 transition">Política de Privacidade</Link></li>
                        </ul>
                        <p className="text-[10px] text-gray-400 mt-4">
                            Contato: <a href="mailto:alisamentonatural.redacao@gmail.com" className="hover:text-orange-600">alisamentonatural.redacao@gmail.com</a>
                        </p>
                    </div>
                </div>

                {/* Disclaimer de Compliance (Ads) */}
                <div className="border-t border-gray-200 pt-8 text-center opacity-70 hover:opacity-100 transition-opacity">
                    <p className="text-[10px] text-gray-500 max-w-3xl mx-auto leading-relaxed mb-4 font-medium">
                        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
                        Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
                        Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.
                        Nós não vendemos o seu e-mail ou qualquer informação para terceiros.
                        Jamais fazemos nenhum tipo de spam. Este site pode conter links de afiliados.
                    </p>

                    <p className="text-xs font-bold text-gray-400">
                        © {currentYear} AlisamentoNatural.com.br - Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
