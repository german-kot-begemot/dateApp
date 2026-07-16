import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card } from '../../shared/types';

export type QuestionProps = {
  card: Card;
  value?: string;
  onSelect?: (answer: string) => void;
};

export const Question = ({ card, value, onSelect }: QuestionProps) => {
  const [hoveredNo, setHoveredNo] = useState(false);

  const handleYes = () => {
    onSelect?.('yes');
  };

  return (
    <section className="content-block flex flex-col items-center justify-center gap-8 rounded-4xl p-8 shadow-2xl backdrop-blur-xl">
      <FloatingHearts />
      <h1 className="text-center text-5xl in-[.is-preview]:text-4xl in-[.is-preview]:text-[#531A2A]">
        {card.questionTitle}
      </h1>
      <p className="text-2xl text-[#531A2A] in-[.is-preview]:text-[#531A2A]!">
        Choose your answer ❤️
      </p>

      <div className="flex max-w-xl items-center justify-center gap-6 rounded-3xl">
        <motion.button
          onClick={handleYes}
          disabled={value === 'yes'}
          animate={value === 'yes' ? { scale: [1, 1.1, 1] } : {}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-15 w-40 items-center justify-center rounded-2xl bg-[#CC476C] text-xl! text-white shadow-lg disabled:opacity-70 disabled:cursor-default! disabled:hover:scale-100 transition"
        >
          {value === 'yes' ? 'Yes ❤️' : 'Yes 💕'}
        </motion.button>

        <div
          className="flex h-15 w-40 items-center justify-center"
          onMouseEnter={() => setHoveredNo(true)}
          onMouseLeave={() => setHoveredNo(false)}
        >
          <AnimatePresence mode="wait">
            {!hoveredNo ? (
              <motion.button
                key="no"
                className="h-full w-full rounded-2xl bg-gray-200 text-xl! font-semibold text-gray-600 shadow-lg"
              >
                No 😢
              </motion.button>
            ) : (
              <motion.div
                key="kiss"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                className="flex h-full w-full items-center justify-center text-6xl"
              >
                💋
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {value === 'yes' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl "
          >
            Great! 💖
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
