import { motion } from 'framer-motion';
import { inviteGifOptions } from '../../data/inviteGifOptions';

type gifProps = {
  selected: string;
  onSelect: (gif: string) => void;
};

export const WizardGifPicker = ({ selected, onSelect }: gifProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-5">
      {inviteGifOptions.map((gif) => {
        const isCurrentSelected = selected === gif.src;

        return (
          <motion.button
            key={gif.id}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(gif.src)}
            style={{
              boxShadow: isCurrentSelected
                ? '0 0 40px rgba(189,40,97,0.5), 0 4px 16px rgba(0,0,0,0.4)'
                : '0 0 0 rgba(189,40,97,0)',
            }}
            className={`overflow-hidden rounded-2xl transition w-25 h-25 shadow-lg border-[#bd2861]!
              ${
                isCurrentSelected
                  ? 'border-[#bd2861]! border-2!'
                  : 'border-transparent border! shadow-lg shadow-[#bd2861]'
              }`}
          >
            <img
              src={gif.src}
              alt={gif.title}
              className="aspect-square w-full object-cover"
            />
          </motion.button>
        );
      })}
    </div>
  );
};
