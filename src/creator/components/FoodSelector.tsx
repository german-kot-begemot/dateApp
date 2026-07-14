import { motion, AnimatePresence } from 'framer-motion';
import type { FoodOption } from '../../shared/types';
import { foodOptions } from '../../data/foodOptions';

type FoodSelectorProps = {
  selected: FoodOption[];
  onChange: (value: FoodOption[]) => void;
};

export const FoodSelector = ({ selected, onChange }: FoodSelectorProps) => {
  const handleToggle = (food: FoodOption) => {
    const exists = selected.some((item) => item.id === food.id);
    if (exists) {
      onChange(selected.filter((item) => item.id !== food.id));
    } else {
      onChange([...selected, food]);
    }
  };

  return (
    <div className="is-preview flex gap-4 gap-y-6 flex-wrap justify-between">
      {foodOptions.map((food) => {
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
            className={`relative flex flex-col items-center gap-3 rounded-3xl text-center transition-all max-w-37.5 h-auto p-2 cursor-pointer ${
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
                  className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#bd2861] text-white text-xs font-bold shadow-md"
                >
                  ✓
                </motion.div>
              )}
            </AnimatePresence>
            <span
              className={`text-4xl transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}
            >
              {food.emoji}
            </span>
            <h3 className="text-xl font-bold text-[#531A2A] in-[.is-preview]:text-[#531A2A]">
              {food.title}
            </h3>
            <p className="text-sm text-[#531A2A]! in-[.is-preview]:text-[#531A2A]!">
              {food.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};
