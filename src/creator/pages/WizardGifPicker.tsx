import { motion } from 'framer-motion';
import { inviteGifOptions } from '../../data/inviteGifOptions';

type gifProps = {
  selected: string;
  onSelect: (gif: string) => void;
};

export const WizardGifPicker = ({ selected, onSelect }: gifProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-5">
      {inviteGifOptions.map((gif) => (
        <motion.button
          key={gif.id}
          whileHover={{ y: -6, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(gif.src)}
          className={`overflow-hidden rounded-2xl transition w-25 h-25 border! border-solid! border-[#b84094]!
            ${
              selected === gif.src
                ? 'border-pink-500 border-2! shadow-xl'
                : 'border-transparent'
            }`}
        >
          <img
            src={gif.src}
            alt={gif.title}
            className="aspect-square w-full object-cover"
          />
        </motion.button>
      ))}
    </div>
  );
};
