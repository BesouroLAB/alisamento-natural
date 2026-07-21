interface VeredictoRapidoProps {
  /** Nota editorial de 0 a 5 (ex: 4.0) */
  nota?: number;
  /** Conteúdo do veredito (1-3 frases curtas, 40-55 palavras) */
  children: React.ReactNode;
}

/**
 * Bloco de destaque no topo de reviews — resume o veredito editorial.
 * Disponível no MDX como <VeredictoRapido nota={4.0}>texto</VeredictoRapido>.
 */
export function VeredictoRapido({ nota, children }: VeredictoRapidoProps) {
  const notaLabel = nota !== undefined ? nota.toFixed(1) : null;
  const notaColor =
    nota !== undefined
      ? nota >= 4
        ? 'text-green-700 bg-green-100 border-green-300'
        : nota >= 3
          ? 'text-amber-700 bg-amber-100 border-amber-300'
          : 'text-red-700 bg-red-100 border-red-300'
      : '';

  return (
    <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
      <div className="flex items-start gap-4">
        {notaLabel && (
          <div
            className={`shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-lg border-2 ${notaColor}`}
          >
            <span className="text-2xl font-bold leading-none">{notaLabel}</span>
            <span className="text-[10px] uppercase tracking-wider font-medium mt-0.5">
              / 5.0
            </span>
          </div>
        )}
        <div className="text-sm text-gray-700 leading-relaxed [&>p]:m-0">
          <p className="font-bold text-gray-900 text-base mb-1">Veredito Rápido</p>
          {children}
        </div>
      </div>
    </div>
  );
}
