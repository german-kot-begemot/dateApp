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
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(gif.id)}
            style={{
              boxShadow: isCurrentSelected
                ? '0 0 40px rgba(189,40,97,0.5), 0 4px 16px rgba(0,0,0,0.4)'
                : '0 0 0 rgba(189,40,97,0)',
            }}
            className={`aspect-square overflow-hidden rounded-xl sm:rounded-2xl transition shadow-lg ${
              isCurrentSelected
                ? 'border-2 border-[#bd2861]'
                : 'border border-transparent shadow-[#bd2861]'
            }`}
          >
            <img
              src={gif.src}
              alt={gif.title}
              className="h-full w-full object-cover"
            />
          </motion.button>
        );
      })}
    </div>
  );
};
