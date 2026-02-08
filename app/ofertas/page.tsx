import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Tag, Shield, Clock, ExternalLink, Scissors, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Cupons e Ofertas | Alisamento Natural",
    description: "Acesse cupons exclusivos e as melhores ofertas do Hidraliso na Amazon. Economize agora com segurança.",
};

export default function OfertasPage() {
    const coupons = [
        {
            id: 1,
            title: "Creme Alisante Vintage Lola Cosmetics (450g)",
            discount: "47% OFF",
            price: "78,90",
            originalPrice: "149,90",
            badge: "CUSTO-BENEFÍCIO",
            amazonUrl: "https://amzn.to/45OiPhy",
            image: "https://m.media-amazon.com/images/P/B074LWHJ2H.01._SCLZZZZZZZ_SX500_.jpg",
        },
        {
            id: 2,
            title: "HidraLiso Alisante Orgânico - Kit 3 Unidades",
            discount: "MAIS VENDIDO",
            price: "197,00",
            originalPrice: "297,00",
            badge: "ECONOMIZE",
            amazonUrl: "https://amzn.to/4bBVdQR",
            image: "https://m.media-amazon.com/images/P/B0FKCM7NZ8.01._SCLZZZZZZZ_SX500_.jpg",
        },
        {
            id: 3,
            title: "Escova Secadora Alisadora Revlon Titanium",
            discount: "35% OFF",
            price: "237,40",
            originalPrice: "369,00",
            badge: "TECNOLOGIA",
            amazonUrl: "https://amzn.to/4al8sTE",
            image: "https://m.media-amazon.com/images/P/B0C4BJGN4L.01._SCLZZZZZZZ_SX500_.jpg",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header Estilo Portal de Descontos */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 shadow-sm flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition group">
                    <ArrowLeft size={18} />
                    <span className="text-xs font-bold uppercase tracking-wide">Voltar</span>
                </Link>
                <div className="flex items-center gap-1.5 text-indigo-900 font-bold text-sm uppercase tracking-wider italic">
                    <Scissors size={16} className="text-orange-500" /> Central de Cupons
                </div>
            </header>

            <main className="flex-1 max-w-2xl mx-auto px-5 py-8 pb-32">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">CUPONS EXCLUSIVOS</h1>
                    <p className="text-gray-500 text-xs max-w-sm mx-auto">
                        Selecionamos as melhores ofertas verificadas na Amazon. Clique em "Pegar Oferta" para resgatar.
                    </p>
                </div>

                {/* Lista de Cupons */}
                <div className="space-y-6">
                    {coupons.map((coupon) => (
                        <div
                            key={coupon.id}
                            className="relative bg-white border-2 border-dashed border-gray-200 rounded-2xl flex overflow-hidden shadow-sm hover:border-orange-300 transition-colors group"
                        >
                            {/* Círculos de "Corte" Laterais (Estética de Cupom) */}
                            <div className="absolute top-1/2 -left-3 -translate-y-1/2 size-6 bg-gray-100 rounded-full border-r-2 border-dashed border-gray-200" />
                            <div className="absolute top-1/2 -right-3 -translate-y-1/2 size-6 bg-gray-100 rounded-full border-l-2 border-dashed border-gray-200" />

                            {/* Lado Esquerdo: Foto e Badge */}
                            <div className="w-40 bg-gray-50 flex flex-col items-center justify-center p-4 border-r border-dashed border-gray-200">
                                <div className="relative size-24 mb-2">
                                    <Image
                                        src={coupon.image}
                                        alt={coupon.title}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <span className="bg-indigo-900 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                                    {coupon.badge}
                                </span>
                            </div>

                            {/* Lado Direito: Info e Preço */}
                            <div className="flex-1 p-5 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-tighter leading-none pr-4">
                                        {coupon.title}
                                    </h3>
                                    <span className="text-orange-600 font-black text-sm whitespace-nowrap">{coupon.discount}</span>
                                </div>

                                <div className="flex items-baseline gap-2 mb-4">
                                    <p className="text-2xl font-black text-gray-900 leading-none">R$ {coupon.price}</p>
                                    <p className="text-[10px] text-gray-400 line-through">De R$ {coupon.originalPrice}</p>
                                </div>

                                <a
                                    href={coupon.amazonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider transition active:scale-95 shadow-md group-hover:bg-orange-600"
                                >
                                    Pegar Oferta na Amazon <ExternalLink size={14} />
                                </a>

                                <div className="mt-2 flex items-center gap-1.5 text-[9px] text-gray-400 font-medium">
                                    <CheckCircle size={10} className="text-green-500" /> Cupom verificado & ativo hoje
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Amazon */}
                <div className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                    <Image src="/amazon-logo.svg" alt="Amazon" width={60} height={20} className="mx-auto mb-3 opacity-60" />
                    <p className="text-[10px] text-orange-700 leading-relaxed font-medium">
                        Você será redirecionada para o site oficial da Amazon Brasil para finalizar sua compra com segurança total e garantia de entrega.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center">
                        <Shield className="text-gray-300 mb-1" size={20} />
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Compra Segura</span>
                    </div>
                    <div className="flex flex-col items-center text-center text-gray-400">
                        <Clock className="text-gray-300 mb-1" size={20} />
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Link Verificado</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Tag className="text-gray-300 mb-1" size={20} />
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Melhor Preço</span>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
