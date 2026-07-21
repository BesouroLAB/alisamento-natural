interface AlertaAnvisaProps {
  /** Texto curto explicativo (opcional — usa um padrão se não passar) */
  children?: React.ReactNode;
}

/**
 * Bloco visual de alerta regulatório (Anvisa) para resenhas e guias.
 * Disponível no MDX como <AlertaAnvisa /> ou <AlertaAnvisa>texto</AlertaAnvisa>.
 */
export function AlertaAnvisa({ children }: AlertaAnvisaProps) {
  return (
    <div className="my-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0" aria-hidden="true">⚠️</span>
        <div className="text-sm text-amber-900 space-y-2">
          <p className="font-bold text-amber-800 m-0">Alerta de Segurança — Anvisa</p>
          {children ? (
            <div className="[&>p]:m-0">{children}</div>
          ) : (
            <>
              <p className="m-0">
                Verifique o registro do produto na Anvisa antes de comprar.
                Formol como alisante é <strong>proibido no Brasil</strong> — e ácido glioxílico
                <strong> não é autorizado</strong> para alisamento.
              </p>
              <p className="m-0">
                Faça sempre <strong>teste de mecha e prova de pele</strong> antes da
                primeira aplicação. Alisantes são proibidos para crianças.
              </p>
              <p className="m-0 text-xs text-amber-700">
                Fonte:{' '}
                <a
                  href="https://www.gov.br/anvisa/pt-br/acessoainformacao/perguntasfrequentes/cosmeticos/alisantes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-amber-700 hover:text-amber-900"
                >
                  Anvisa — Perguntas frequentes sobre alisantes
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
