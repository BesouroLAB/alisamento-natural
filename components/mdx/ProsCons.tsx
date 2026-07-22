interface ProsConsProps {
  pros?: string[] | string;
  cons?: string[] | string;
  pontosFortes?: string[] | string;
  pontosFracos?: string[] | string;
  title?: string;
}

function parseArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.map(String);
  if (typeof val === 'string') {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed.map(String);
    } catch {
      return val.split(',').map((s) => s.trim()).filter(Boolean);
    }
  }
  return [];
}

export function ProsCons(props: ProsConsProps) {
  const { title = 'Prós e Contras' } = props;
  const safePros = parseArray(props.pros ?? props.pontosFortes);
  const safeCons = parseArray(props.cons ?? props.pontosFracos);

  return (
    <div className="my-8 rounded-xl border border-gray-200 overflow-hidden">
      {title && (
        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-base m-0">{title}</h3>
        </div>
      )}
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <div className="p-5">
          <h4 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-3">
            ✅ Pontos Fortes
          </h4>
          <ul className="space-y-2 text-sm text-gray-700 list-none p-0 m-0">
            {safePros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5 shrink-0">+</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <h4 className="text-sm font-bold text-red-700 uppercase tracking-wider mb-3">
            ❌ Pontos Fracos
          </h4>
          <ul className="space-y-2 text-sm text-gray-700 list-none p-0 m-0">
            {safeCons.map((con, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5 shrink-0">−</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
