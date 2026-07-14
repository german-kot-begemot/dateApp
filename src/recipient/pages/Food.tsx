import { motion } from 'framer-motion';
import { FoodCard } from './FoodCard';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card, FoodOption } from '../../shared/types';

export type FoodProps = {
  card: Card;
  selectedFood: FoodOption[];
  onSelect?: (foods: FoodOption[]) => void;
  className?: string;
};

export const Food = ({ card, selectedFood, onSelect }: FoodProps) => {
  const handleSelect = (food: FoodOption) => {
    const exists = selectedFood.some((item) => item.id === food.id);
    if (exists) {
      onSelect?.(selectedFood.filter((item) => item.id !== food.id));
    } else {
      onSelect?.([...selectedFood, food]);
    }
  };

  return (
    <section className="content-block flex rounded-4xl flex-col items-center justify-center gap-8 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col items-center gap-8 rounded-3xl">
        <FloatingHearts />
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-7xl"
        >
          🍽️
        </motion.div>

        <h2 className="text-center text-5xl font-bold in-[.is-preview]:text-[#531A2A]">
          {card.foodTitle}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {card.foodOptions.map((food) => (
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
