import { AUTOR_TIAGO } from '@/data/autor';

interface ArticleHeaderProps {
  title: string;
  author: string;
  date: string;
}

/**
 * Header editorial do artigo com byline, data e selo E-E-A-T.
 * Usa o nome real do autor para reforçar a autoridade.
 */
export function ArticleHeader({ title, author, date }: ArticleHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const isMainAuthor = author === AUTOR_TIAGO.name;

  return (
    <header className="mb-8 pb-6 border-b border-gray-100">
      <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        {title}
      </h1>
      <div className="flex items-center gap-3 text-sm text-gray-500">
        {isMainAuthor && (
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
            TF
          </div>
        )}
        <div>
          <span className="font-semibold text-gray-800">{author}</span>
          {isMainAuthor && (
            <span className="text-xs text-gray-400 ml-1">
              · {AUTOR_TIAGO.role}
            </span>
          )}
          <div className="text-xs text-gray-400 mt-0.5">
            Atualizado em {formattedDate}
          </div>
        </div>
      </div>
    </header>
  );
}
