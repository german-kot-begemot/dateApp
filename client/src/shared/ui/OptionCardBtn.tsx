//for selectable option cards, like the "yes" and "no" buttons -- type Card

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type OptionCardProps = {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

export const OptionCardBtn = ({
  selected,
  onClick,
  children,
  className = '',
}: OptionCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.06,
        y: -8,
        boxShadow:
          '0 0 30px rgba(189,40,97,0.65), 0 10px 25px rgba(0,0,0,0.25)',
      }}
      whileTap={{ scale: 0.96 }}
      animate={{
        backgroundColor: selected
          ? 'rgba(255,255,255,0.2)'
          : 'rgba(255,245,240,0.06)',
        color: selected ? '#fdf1e8' : 'rgba(253,241,232,0.8)',
        borderColor: selected ? '#bd2861' : 'rgba(255,255,255,0.1)',
        boxShadow: selected
          ? '0 0 40px rgba(189,40,97,0.6), 0 6px 20px rgba(0,0,0,0.35)'
          : '0 0 0 rgba(189,40,97,0)',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 22,
        backgroundColor: { duration: 0.2 },
        borderColor: { duration: 0.2 },
        boxShadow: { duration: 0.2 },
      }}
      className={`relative flex w-full max-w-50 flex-col items-center justify-center rounded-3xl border-2 p-6 px-4 text-center text-xl! backdrop-blur-[28px] saturate-150 ${className}`}
    >
      {children}
    </motion.button>
  );
};
