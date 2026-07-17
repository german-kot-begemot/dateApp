import { motion, AnimatePresence } from 'framer-motion';
import type { FoodOption } from '../../shared/types';
import { useTranslation } from 'react-i18next';
import { getFoodTranslation } from '../../shared/lib/getFoodTranslation';

type FoodCardProps = {
  food: FoodOption;
  selected: boolean;
  onSelect: (food: FoodOption) => void;
};

export const FoodCard = ({ food, selected, onSelect }: FoodCardProps) => {
  const { t } = useTranslation();
  const translatedFood = getFoodTranslation(food, t);

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(food)}
      style={{
        boxShadow: selected
          ? '0 0 15px rgba(189,40,97,0.9), 0 0 45px rgba(189,40,97,0.6)'
          : '0 10px 25px rgba(0,0,0,0.15)',
      }}
      className={`relative flex flex-col items-center gap-3 rounded-3xl 
        text-center transition-all max-w-75 p-2 cursor-pointer in-[.is-preview]:max-w-37.5 
        in-[.is-preview]:p-2 in-[.is-preview]:gap-2     
        ${
          selected
            ? 'border-2 border-[#bd2861] bg-white ring-4 ring-pink-500/10 scale-105'
            : 'border border-gray-200/60 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 '
        }
      `}
    >
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#bd2861] text-white text-xs font-bold shadow-md"
          >
            ✓
          </motion.div>
        )}
      </AnimatePresence>

      <span
        className={`text-4xl transition-transform in-[.is-preview]:text-2xl duration-300 ${selected ? 'scale-110' : ''}`}
      >
        {food.emoji}
      </span>

      <h3 className="text-2xl font-bold text-[#531A2A] in-[.is-preview]:text-[#531A2A]! ">
        {translatedFood.title}
      </h3>

      <p className="text-[14px] text-[#531A2A]! in-[.is-preview]:text-[#531A2A]! in-[.is-preview]:text-[12px]!">
        {translatedFood.description}
      </p>
    </motion.button>
  );
};
