import Confetti from 'react-confetti';

type Props = {
  active: boolean;
  origin: { x: number; y: number };
};

export const ConfettiBlast = ({ active, origin }: Props) => {
  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <Confetti
        numberOfPieces={250}
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        gravity={0.35}
        initialVelocityX={12}
        initialVelocityY={0}
        confettiSource={{
          x: origin.x,
          y: origin.y,
          w: 0,
          h: 0,
        }}
        colors={['#ec4899', '#f472b6', '#fbcfe8', '#a855f7', '#facc15']}
      />
    </div>
  );
};
