import { motion } from 'framer-motion';
import { inviteGifOptions } from '../../data/inviteGifOptions';
import type { InviteGifId } from '../../shared/types';

type GifProps = {
  selected: InviteGifId | '';
  onSelect: (gif: InviteGifId | '') => void;
};

export const WizardGifPicker = ({ selected, onSelect }: GifProps) => {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4 lg:grid-cols-6">
      {inviteGifOptions.map((gif) => {
        const isCurrentSelected = selected === gif.id;

        return (
          <motion.button
            key={gif.id}
            whileHover={{
              y: -8,
              scale: 1.07,
              boxShadow:
                '0 0 25px rgba(189,40,97,0.7), 0 8px 25px rgba(0,0,0,0.25)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => onSelect(gif.id)}
            style={{
              boxShadow: isCurrentSelected
                ? '0 0 40px rgba(189,40,97,0.7), 0 4px 16px rgba(0,0,0,0.4)'
                : '0 0 0 rgba(189,40,97,0)',
            }}
            className={`aspect-square overflow-hidden rounded-xl sm:rounded-2xl border-2 transition ${
              isCurrentSelected
                ? 'border-[#bd2861]'
                : 'border-transparent hover:border-[#bd2861]'
            }`}
          >
            <img
              src={gif.src}
              alt={gif.title}
              className="h-full w-full object-cover transition duration-300 hover:brightness-110"
            />
          </motion.button>
        );
      })}
    </div>
  );
};
