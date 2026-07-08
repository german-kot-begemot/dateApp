import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card } from '../../shared/types';

export type QuestionProps = {
  card: Card;
  value?: string;
  onNext?: () => void;
  onSelect?: (answer: string) => void;
};

export const Question = ({ card, onNext, onSelect }: QuestionProps) => {
  const [hoveredNo, setHoveredNo] = useState(false);

  const handleYes = () => {
    onSelect?.('yes');
    onNext?.();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6 gap-8">
      <FloatingHearts />
      <h1 className="text-8xl text-center text-pink-600">
        {card.questionTitle}
      </h1>

      <div className="relative flex h-52 w-full items-center justify-center gap-4 overflow-hidden rounded-2xl bg-pink-100 max-w-xl p-8 shadow-lg">
        {/* YES */}
        <motion.button
          onClick={handleYes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl bg-pink-500 px-8 py-4 text-2xl text-white shadow-lg"
        >
          Да ❤️
        </motion.button>

        {/* NO AREA */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredNo(true)}
          onMouseLeave={() => setHoveredNo(false)}
        >
          <AnimatePresence mode="wait">
            {!hoveredNo ? (
              <motion.button
                key="no"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="rounded-xl bg-gray-300 px-8 py-4 text-2xl font-semibold text-gray-700 shadow-lg"
              >
                Нет
              </motion.button>
            ) : (
              <motion.div
                key="kiss"
                initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 18,
                }}
                className="flex h-16 w-30 items-center justify-center "
              >
                <span className="text-8xl">💋</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
