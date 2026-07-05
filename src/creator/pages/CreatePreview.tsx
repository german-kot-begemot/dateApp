import type { CardConfig } from '../../shared/types';

export const CreatePreview = () => {
  const data = localStorage.getItem('card-config');

  const config: CardConfig | null = data ? JSON.parse(data) : null;

  if (!config) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Preview</h1>

      <p>{config.question}</p>

      <a
        href={`/card/${config.id}`}
        className="bg-green-500 text-white px-6 py-3 rounded-xl"
      >
        Open recipient link
      </a>
    </div>
  );
};
