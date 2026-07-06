import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const CONFETTI_DURATION = 1200;
const Y_OFFSET = 180;

type Origin = { x: number; y: number };

export const useConfettiBlast = (onNext?: () => void) => {
  const buttonYesRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(false);
  const [origin, setOrigin] = useState<Origin>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const trigger = () => {
    const rect = buttonYesRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.bottom + Y_OFFSET : window.innerHeight / 2;

    setOrigin({ x, y });

    flushSync(() => {
      setActive(true);
    });

    setTimeout(() => {
      onNext?.();
    }, CONFETTI_DURATION);
  };

  return {
    buttonRef: buttonYesRef,
    confetti: {
      active,
      origin,
    },
    trigger,
  };
};
