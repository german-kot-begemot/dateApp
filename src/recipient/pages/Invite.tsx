import { motion } from 'framer-motion';
import { Heart } from '../../shared/ui/Heart';
import { ConfettiBlast } from '../../shared/ui/ConfettiBlast';
import { useAnswerNoButton } from '../../shared/hooks/useAnswerNoButton';
import { useConfettiBlast } from '../../shared/hooks/useConfettiBlast';
import type { Card } from '../../shared/types';
import { getInviteGif } from '../../shared/lib/getInviteGif';

export type InviteProps = {
  card: Card;
  onNext?: () => void;
};

export const Invite = ({ card, onNext }: InviteProps) => {
  const {
    containerRef,
    position,
    text,
    noBtnRef,
    handleMouseMove,
    handleTouchStart,
  } = useAnswerNoButton();

  const { trigger, confetti, yesBtnRef } = useConfettiBlast(onNext);

  return (
    <section className="content-block flex rounded-4xl flex-col items-center justify-center gap-8 ">
      <Heart />
      <ConfettiBlast active={confetti.active} origin={confetti.origin} />
      <div className="gif-container flex max-w-80 h-auto items-center justify-center rounded-2xl">
        <img src={getInviteGif(card.inviteGif)} alt="Invite GIF" />
      </div>
      <h2 className="text-center text-5xl in-[.is-preview]:text-[#531A2A]">
        {card.inviteTitle}
      </h2>
      <p className="text-center text-2xl text-[#531A2A] in-[.is-preview]:text-[#531A2A]!">
        I promise it will be delicious, fun, and free of boring conversations 😌
      </p>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative block-content flex h-52 w-full items-center justify-center rounded-2xl gap-6"
      >
        {/* YES BUTTON */}
        <motion.button
          onClick={trigger}
          ref={yesBtnRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl bg-pink-500 px-8 py-4 text-2xl text-white shadow-lg"
        >
          Yes ❤️
        </motion.button>

        {/* NO BUTTON */}
        <motion.button
          ref={noBtnRef}
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
    </section>
  );
};
