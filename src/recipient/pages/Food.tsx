import { motion } from 'framer-motion';
import { FoodCard } from './FoodCard';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { Card, FoodOption } from '../../shared/types';

export type FoodProps = {
  card: Card;
  selectedFood: FoodOption[];
  onSelect?: (foods: FoodOption[]) => void;
  onNext?: () => void;
};

export const Food = ({ card, selectedFood, onNext, onSelect }: FoodProps) => {
  const handleSelect = (food: FoodOption) => {
    const exists = selectedFood.some((item) => item.id === food.id);
    if (exists) {
      onSelect?.(selectedFood.filter((item) => item.id !== food.id));
    } else {
      onSelect?.([...selectedFood, food]);
    }
  };

  const foodsToShow = selectedFood ?? card.foodOptions;

  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6 py-14">
      <FloatingHearts />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=" w-full max-w-6xl rounded-3xl bg-pink-100 p-8 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex flex-col items-center gap-4 p-4 pt-0">
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

          <h2 className="text-4xl font-bold text-pink-600">{card.foodTitle}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foodsToShow.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              selected={selectedFood.some((item) => item.id === food.id)}
              onSelect={handleSelect}
            />
          ))}
        </div>
        <button
          disabled={selectedFood.length === 0}
          onClick={onNext}
          className="mt-8 rounded-xl bg-pink-500 px-6 py-3 text-white disabled:opacity-50"
        >
          Далее
        </button>
      </motion.div>
    </section>
  );
};
