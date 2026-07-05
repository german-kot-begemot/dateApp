import { motion } from 'framer-motion';
import { Heart } from '../../shared/ui/Heart';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import { ConfettiBlast } from '../../shared/ui/ConfettiBlast';
import { useAnswerNoButton } from '../../shared/hooks/useAnswerNoButton';
import { useConfettiBlast } from '../../shared/hooks/useConfettiBlast';

export type InviteProps = {
  onNext: () => void;
};

export const Invite = ({ onNext }: InviteProps) => {
  const {
    containerRef,
    position,
    text,
    buttonRef,
    handleMouseMove,
    handleTouchStart,
  } = useAnswerNoButton();

  const { trigger, confetti } = useConfettiBlast(onNext);

  return (
    <section className="page-container flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100">
      <FloatingHearts />

      <div className="invite-container flex flex-col items-center gap-8 rounded-3xl bg-pink-100 p-8 shadow-lg">
        <Heart />

        <ConfettiBlast active={confetti.active} origin={confetti.origin} />

        <h1 className="text-center text-5xl font-bold text-pink-600">
          Пойдешь со мной на свидание?
        </h1>

        <p className="text-center text-3xl">
          Обещаю, будет вкусно, весело и без скучных разговоров 😌
        </p>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative flex h-52 w-full items-center justify-center rounded-2xl bg-pink-50 gap-6"
        >
          {/* YES BUTTON */}
          <motion.button
            onClick={trigger}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-pink-500 px-8 py-4 text-2xl text-white shadow-lg"
          >
            Да ❤️
          </motion.button>

          {/* NO BUTTON */}
          <motion.button
            ref={buttonRef}
            onTouchStart={handleTouchStart}
            style={
              position ? { position: 'absolute', left: 0, top: 0 } : undefined
            }
            animate={
              position ? { x: position.left, y: position.top } : { x: 0, y: 0 }
            }
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            className="select-none rounded-xl bg-gray-300 px-8 py-4 text-2xl font-semibold text-gray-700 shadow-lg"
          >
            {text}
          </motion.button>
        </div>
      </div>
    </section>
  );
};
