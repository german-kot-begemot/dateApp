import { createPortal } from 'react-dom';
import Confetti from 'react-confetti';

type Props = {
  active: boolean;
  origin: { x: number; y: number };
};

export const ConfettiBlast = ({ active, origin }: Props) => {
  if (!active) return null;

  return createPortal(
    <Confetti
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={250}
      gravity={0.35}
      initialVelocityX={{ min: -8, max: 8 }}
      initialVelocityY={{ min: -18, max: -8 }}
      confettiSource={{
        x: origin.x - 40,
        y: origin.y,
        w: 80,
        h: 1,
      }}
      colors={['#ec4899', '#f472b6', '#fbcfe8', '#a855f7', '#facc15']}
    />,
    document.body,
  );
};
