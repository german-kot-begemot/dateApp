import { motion } from 'framer-motion';
import { ConfettiBlast } from '../../shared/ui/ConfettiBlast';
import { useAnswerNoButton } from '../../shared/hooks/useAnswerNoButton';
import { useConfettiBlast } from '../../shared/hooks/useConfettiBlast';
import type { Card } from '../../shared/types';
import { getInviteGif } from '../../shared/lib/getInviteGif';
import { useTranslation } from 'react-i18next';

export type InviteProps = {
  card: Card;
  onNext?: () => void;
};

export const Invite = ({ card, onNext }: InviteProps) => {
  const { t } = useTranslation();

  const {
    containerRef,
    position,
    text,
    noBtnRef,
    handleMouseMove,
    handleTouchMove,
    handleTouchStart,
  } = useAnswerNoButton();
  const { trigger, confetti, yesBtnRef } = useConfettiBlast(onNext);

  return (
    <section className="content-block flex w-full flex-col items-center gap-4 rounded-3xl p-5 text-center sm:p-8 in-[.is-preview]:gap-2 in-[.is-preview]:rounded-xl in-[.is-preview]:p-2">
      <ConfettiBlast active={confetti.active} origin={confetti.origin} />

      <div className="flex h-auto w-full max-w-50 items-center justify-center overflow-hidden rounded-2xl sm:max-w-60 in-[.is-preview]:max-w-24 in-[.is-preview]:rounded-lg">
        <img
          src={getInviteGif(card.inviteGif)}
          alt="Invite GIF"
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold text-center text-[#fdf1e8] sm:text-5xl in-[.is-preview]:text-xl in-[.is-preview]:text-[#531A2A]">
        {card.inviteTitle}
      </h2>

      <p className="text-lg text-center text-[#fdf1e8] sm:text-2xl in-[.is-preview]:text-xs in-[.is-preview]:text-[#531A2A]!">
        {t('invite.promise')}
      </p>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative flex flex-col sm:flex-row h-44 w-full items-center justify-center gap-4 rounded-2xl sm:h-52 in-[.is-preview]:h-40 sm:gap-6 in-[.is-preview]:h-20 in-[.is-preview]:gap-2 in-[.is-preview]:rounded-lg"
      >
        <motion.button
          onClick={trigger}
          ref={yesBtnRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-40 items-center justify-center rounded-2xl border-2 border-[#CC476C] bg-[#CC476C] px-6 py-3 text-base text-white shadow-lg backdrop-blur-[28px] saturate-150 sm:w-48 sm:text-xl in-[.is-preview]:w-28 in-[.is-preview]:px-3 in-[.is-preview]:py-2 in-[.is-preview]:text-xs"
        >
          {t('invite.yes')}
        </motion.button>

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
          className="select-none rounded-xl flex w-40 items-center justify-center bg-gray-300 px-6 py-3 text-base text-gray-700 shadow-lg sm:px-8 sm:py-4 sm:text-xl in-[.is-preview]:rounded-lg in-[.is-preview]:px-3 in-[.is-preview]:w-28 in-[.is-preview]:py-2 in-[.is-preview]:py-1 in-[.is-preview]:text-xs"
        >
          {text}
        </motion.button>
      </div>
    </section>
  );
};
