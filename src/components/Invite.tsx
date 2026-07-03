import { motion } from 'framer-motion';
import { Heart } from '../ui/Heart';
import FloatingHearts from '../ui/FloatingHearts';
import { useAnswerNoButton } from '../hooks/useAnswerNoButton';
import type { InviteProps } from '../types';

export const Invite = ({ onNext }: InviteProps) => {
  const {
    containerRef,
    buttonRef,
    position,
    isDodging,
    text,
    handleMouseMove,
    handleTouchStart,
  } = useAnswerNoButton();

  return (
    <section className="page-container flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100">
      <FloatingHearts />

      <div className="invite-container flex flex-col items-center gap-8 rounded-3xl bg-pink-100 p-8 shadow-lg">
        <Heart />

        <h1 className="text-center text-4xl font-bold text-pink-600">
          Пойдешь со мной на свидание?
        </h1>

        <p className="text-center text-2xl">
          Обещаю, будет вкусно, весело и без скучных разговоров 😌
        </p>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative flex h-52 w-full items-center justify-center rounded-2xl bg-pink-50"
        >
          <div className="flex gap-6">
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isDodging ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, repeat: isDodging ? Infinity : 0 }}
              className="rounded-xl bg-pink-500 px-8 py-4 text-2xl text-white shadow-lg transition hover:bg-pink-600"
            >
              Да ❤️
            </motion.button>

            <motion.button
              ref={buttonRef}
              onTouchStart={handleTouchStart}
              style={
                position ? { position: 'absolute', left: 0, top: 0 } : undefined
              }
              animate={
                position
                  ? { x: position.left, y: position.top }
                  : { x: 0, y: 0 }
              }
              transition={{ type: 'spring', stiffness: 500, damping: 28 }}
              className="select-none rounded-xl bg-gray-300 px-8 py-4 text-2xl font-semibold text-gray-700 shadow-lg"
            >
              {text}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
