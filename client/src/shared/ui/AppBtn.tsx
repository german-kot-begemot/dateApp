//for Next-Create-Copy link-Main menu-Telegram-Send-Save buttons

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type AppBtnProps = HTMLMotionProps<'button'> & {
  children: ReactNode;
  active?: boolean;
};

export const AppBtn = ({
  children,
  active = true,
  className = '',
  ...props
}: AppBtnProps) => {
  return (
    <motion.button
      whileHover={props.disabled ? undefined : { scale: 1.03, y: -2 }}
      whileTap={
        props.disabled
          ? undefined
          : {
              scale: 0.98,
              backgroundColor: 'rgba(188, 40, 96, 0.4)',
              borderColor: '#BC2860',
              boxShadow: '0 0 40px rgba(189, 40, 97, 0.7)',

            }
      }
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 border-2 text-xl! font-medium backdrop-blur-[28px] transition-colors shadow-lg
    disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none
    ${
      active
        ? 'border-[#BC2860pro] bg-white/20 text-[#fdf1e8] shadow-[0_0_30px_rgba(189,40,97,0.35)]'
        : 'border-white/10 bg-white/10 text-[#fdf1e8]'
    } ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
