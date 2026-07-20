import { motion, AnimatePresence } from 'framer-motion';
import type { FoodOption } from '../../shared/types';
import { foodOptions } from '../../data/foodOptions';
import { useTranslation } from 'react-i18next';
import { getFoodTranslation } from '../../shared/lib/getFoodTranslation';

type FoodSelectorProps = {
  selected: FoodOption[];
  onChange: (value: FoodOption[]) => void;
};

export const FoodSelector = ({ selected, onChange }: FoodSelectorProps) => {
  const { t } = useTranslation();

  const handleToggle = (food: FoodOption) => {
    const exists = selected.some((item) => item.id === food.id);

    if (exists) {
      onChange(selected.filter((item) => item.id !== food.id));
    } else {
      onChange([...selected, food]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {foodOptions.map((option) => {
        const food = getFoodTranslation(option, t);
        const isSelected = selected.some((item) => item.id === food.id);

        return (
          <motion.button
            key={food.id}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleToggle(food)}
            style={{
              boxShadow: isSelected
                ? '0 0 15px rgba(189,40,97,0.9), 0 0 45px rgba(189,40,97,0.6)'
                : '0 10px 25px rgba(0,0,0,0.15)',
            }}
            className={`relative flex min-h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl p-2 text-center transition-all sm:min-h-40 sm:rounded-3xl sm:gap-3 ${
              isSelected
                ? 'border-2 border-[#bd2861] bg-white ring-4 ring-pink-500/10 scale-105'
                : 'border border-gray-200/60 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 opacity-80'
            }`}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#bd2861] text-xs font-bold text-white shadow-md"
                >
                  ✓
                </motion.div>
              )}
            </AnimatePresence>

            <span
              className={`text-3xl transition-transform duration-300 sm:text-4xl ${
                isSelected ? 'scale-110' : ''
              }`}
            >
              {food.emoji}
            </span>

            <h3 className="text-sm font-bold text-[#531A2A] sm:text-xl">
              {food.title}
            </h3>

            <p className="text-xs text-[#531A2A]! sm:text-sm">
              {food.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};
