import { motion } from 'framer-motion';
import { FoodCard } from './FoodCard';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card, FoodOption } from '../../shared/types';

export type FoodProps = {
  card: Card;
  selectedFood: FoodOption[];
  mode?: 'select' | 'preview';
  onSelect?: (foods: FoodOption[]) => void;
  className?: string;
};

export const Food = ({
  card,
  selectedFood,
  onSelect,
  mode = 'select',
  className = '',
}: FoodProps) => {
  const handleSelect = (food: FoodOption) => {
    const exists = selectedFood.some((item) => item.id === food.id);

    if (exists) {
      onSelect?.(selectedFood.filter((item) => item.id !== food.id));
    } else {
      onSelect?.([...selectedFood, food]);
    }
  };

  const foodsToShow = mode === 'preview' ? selectedFood : card.foodOptions;

  return (
    <section
      className={`content-block flex w-full flex-col items-center justify-center gap-6 rounded-3xl p-5 text-center sm:gap-8 sm:p-8 in-[.is-preview]:gap-2 in-[.is-preview]:rounded-xl in-[.is-preview]:p-2 ${className}`}
    >
      <div className="flex w-full flex-col items-center gap-6 rounded-3xl sm:gap-8 in-[.is-preview]:gap-2">
        <FloatingHearts />

        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl sm:text-7xl in-[.is-preview]:text-3xl"
        >
          🍽️
        </motion.div>

        <h2 className="text-center text-3xl font-bold text-[#fdf1e8] sm:text-5xl in-[.is-preview]:text-xl in-[.is-preview]:text-[#531A2A]">
          {card.foodTitle}
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 in-[.is-preview]:grid-cols-1 in-[.is-preview]:gap-4">
          {foodsToShow.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              selected={selectedFood.some((item) => item.id === food.id)}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
