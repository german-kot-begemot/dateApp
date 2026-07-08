import { motion } from 'framer-motion';
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
    <div className="flex gap-4 flex-wrap justify-between">
      {foodOptions.map((food) => {
        const isSelected = selected.some((item) => item.id === food.id);

        return (
          <motion.button
            key={food.id}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleToggle(food)}
            className={`relative flex flex-col items-center gap-3 rounded-3xl text-center shadow-lg
              bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 transition max-w-37.5 h-auto p-2.5
              ${
                isSelected
                  ? 'border border-pink-500 ring-2 ring-pink-500'
                  : 'hover:shadow-xl'
              }`}
          >
            <span className="text-3xl">{food.emoji}</span>

            <h3 className="text-xl font-bold">{food.title}</h3>

            <p className="text-[#5F6B85]">{food.description}</p>
          </motion.button>
        );
      })}
    </div>
  );
};
