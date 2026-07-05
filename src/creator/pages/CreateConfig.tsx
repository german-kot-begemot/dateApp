import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CardConfig } from '../../shared/types';

export const CreateConfig = () => {
  const navigate = useNavigate();

  const [config, setConfig] = useState<CardConfig>({
    id: crypto.randomUUID(),
    type: 'date',
    theme: 'pink',
    foodOptions: [
      { id: '1', title: 'Sushi', emoji: '🍣' },
      { id: '2', title: 'Pizza', emoji: '🍕' },
    ],
    question: 'Ты придёшь? ❤️',
    allowDate: true,
    allowTime: true,
  });

  const handlePublish = () => {
    localStorage.setItem('card-config', JSON.stringify(config));

    navigate('/create/preview');
  };

  return (
    <div className="min-h-screen p-10 flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Configure card</h2>

      {/* QUESTION */}
      <input
        value={config.question}
        onChange={(e) => setConfig({ ...config, question: e.target.value })}
        className="border p-3 rounded-xl"
      />

      {/* FOOD OPTIONS (упрощённо пока) */}
      <button
        onClick={handlePublish}
        className="bg-pink-500 text-white px-6 py-3 rounded-xl"
      >
        Generate card
      </button>
    </div>
  );
};
