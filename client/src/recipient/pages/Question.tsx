import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card } from '../../shared/types';
import { useTranslation } from 'react-i18next';

export type QuestionProps = {
  card: Card;
  value?: string;
  onSelect?: (answer: string) => void;
};

export const Question = ({ card, value, onSelect }: QuestionProps) => {
  const [hoveredNo, setHoveredNo] = useState(false);
  const { t } = useTranslation();

  const handleNoTouch = () => {
    setHoveredNo(true);

    setTimeout(() => {
      setHoveredNo(false);
    }, 1200);
  };

  const handleYes = () => {
    onSelect?.('yes');
  };

  return (
    <section className="content-block flex w-full flex-col items-center justify-center gap-5 rounded-3xl p-5 text-center sm:gap-8 sm:p-8 in-[.is-preview]:gap-3 in-[.is-preview]:rounded-xl in-[.is-preview]:p-2">
      <FloatingHearts />

      <h1 className="text-3xl font-bold text-[#fdf1e8] sm:text-5xl in-[.is-preview]:text-xl in-[.is-preview]:text-[#531A2A]">
        {card.questionTitle}
      </h1>

      <p className="text-base text-[#531A2A] sm:text-2xl in-[.is-preview]:text-sm in-[.is-preview]:text-[#531A2A]!">
        {t('wizard.questionOption')}
      </p>

      <div className="flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6 in-[.is-preview]:gap-2">
        <motion.button
          onClick={handleYes}
          disabled={value === 'yes'}
          animate={value === 'yes' ? { scale: [1, 1.1, 1] } : {}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#CC476C] px-4 text-base text-white shadow-lg transition disabled:cursor-default! disabled:opacity-70 sm:h-15 sm:w-40 sm:text-xl in-[.is-preview]:h-10 in-[.is-preview]:text-sm"
        >
          {value === 'yes' ? t('invite.yesHeart') : t('invite.yesDoubleHeart')}
        </motion.button>

        <div
          className="flex h-12 w-full items-center justify-center sm:h-15 sm:w-40 in-[.is-preview]:h-10"
          onMouseEnter={() => setHoveredNo(true)}
          onMouseLeave={() => setHoveredNo(false)}
          onTouchStart={() => setHoveredNo(true)}
          onTouchEnd={handleNoTouch}
        >
          <AnimatePresence mode="wait">
            {!hoveredNo ? (
              <motion.button
                key="no"
                className="h-full w-full rounded-2xl bg-gray-200 text-base font-semibold text-gray-600 shadow-lg sm:text-xl in-[.is-preview]:text-sm"
              >
                {t('wizard.noAnswer')}
              </motion.button>
            ) : (
              <motion.div
                key="kiss"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                className="flex h-full w-full items-center justify-center text-5xl sm:text-6xl in-[.is-preview]:text-3xl"
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
            className="text-lg text-[#fdf1e8] sm:text-3xl in-[.is-preview]:text-sm in-[.is-preview]:text-[#531A2A]"
          >
            {t('wizard.greatPhrase')}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
