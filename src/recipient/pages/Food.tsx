import { motion } from 'framer-motion';
import { FoodCard } from './FoodCard';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import { foodOptions } from '../../data/foodOptions';
import { useFood } from '../../shared/hooks/useFood';

export type FoodProps = {
  onNext?: () => void;
  onSelect?: (food: string) => void;
};

export const Food = ({ onNext, onSelect }: FoodProps) => {
  const { selectedFood, handleSelect } = useFood({
    onNext,
    onSelect,
  });

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
            animate={{
              rotate: [-3, 3, -3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-7xl"
          >
            🍽️
          </motion.div>

          <h2 className="text-4xl font-bold text-pink-600">
            Самый важный вопрос вечера
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foodOptions.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              selected={selectedFood?.id === food.id}
              onSelect={() => handleSelect(food)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
