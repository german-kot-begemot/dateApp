import { motion } from 'framer-motion';
import type { FoodOption } from '../../shared/types';

export type FoodCardProps = {
  food: FoodOption;
  selected: boolean;
  onSelect: (food: FoodOption) => void;
};

export const FoodCard = ({ food, selected, onSelect }: FoodCardProps) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: 'spring',
        stiffness: 350,
      }}
      onClick={() => onSelect(food)}
      className={`relative flex flex-col items-center gap-3 rounded-3xl p-6
      text-center shadow-lg  bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100
        ${selected ? 'ring-pink-500 scale-105 border border-pink-500' : 'hover:shadow-lg'}
      `}
    >
      {selected && (
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
        >
          ❤️
        </motion.div>
      )}

      <span className="text-6xl">{food.emoji}</span>
      <h3 className="text-2xl font-bold text-gray-800">{food.title}</h3>
      <p className=" text-2xl leading-6 text-[#5F6B85]">{food.description}</p>
    </motion.button>
  );
};
