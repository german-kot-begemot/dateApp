import { motion } from 'framer-motion';
import { ConfettiBlast } from '../../shared/ui/ConfettiBlast';
import { useAnswerNoButton } from '../../shared/hooks/useAnswerNoButton';
import { useConfettiBlast } from '../../shared/hooks/useConfettiBlast';
import type { Card } from '../../shared/types';
import { getInviteGif } from '../../shared/lib/getInviteGif';
import { useTranslation } from 'react-i18next'; // ИСПРАВЛЕНО: Импортируем хук

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
    handleTouchStart,
  } = useAnswerNoButton();

  const { trigger, confetti, yesBtnRef } = useConfettiBlast(onNext);

  return (
    <section className="content-block items-center gap-4 in-[.is-preview]:overflow-hidden">
      <ConfettiBlast active={confetti.active} origin={confetti.origin} />
      <div className="gif-container flex max-w-50 h-auto items-center justify-center rounded-2xl in-[.is-preview]:max-w-50 in-[.is-preview]:h-auto">
        <img src={getInviteGif(card.inviteGif)} alt="Invite GIF" />
      </div>
      <h2 className="text-center text-5xl in-[.is-preview]:text-[#531A2A]">
        {card.inviteTitle}
      </h2>
      <p className="text-center text-2xl text-[#531A2A] in-[.is-preview]:text-[#531A2A]!">
        {t('invite.promise')}
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
          className="rounded-xl bg-[#CC476C] px-8 py-4 text-xl! text-white shadow-lg"
        >
          {t('invite.yes')}
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
          className="select-none rounded-xl bg-gray-300 px-8 py-4 text-xl! font-semibold text-gray-700 shadow-lg"
        >
          {text}
        </motion.button>
      </div>
    </section>
  );
};
