import { useCallback, useRef, useState } from 'react';
import type React from 'react';
import { useTranslation } from 'react-i18next';

const SAFE_DISTANCE = 120;
const PADDING = 12;
const CANDIDATES = 15;
const DODGE_DELAY = 700;

type Position = {
  left: number;
  top: number;
};

export const useAnswerNoButton = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const lastDodgeTime = useRef(0);

  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState<Position | null>(null);

  const dodge = useCallback((clientX: number, clientY: number) => {
    const now = Date.now();

    if (now - lastDodgeTime.current < DODGE_DELAY) {
      return;
    }

    const container = containerRef.current;
    const button = noBtnRef.current;

    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.hypot(
      buttonCenterX - clientX,
      buttonCenterY - clientY,
    );

    if (distance > SAFE_DISTANCE) return;

    lastDodgeTime.current = now;

    const maxLeft = Math.max(
      containerRect.width - buttonRect.width - PADDING,
      PADDING,
    );

    const maxTop = Math.max(
      containerRect.height - buttonRect.height - PADDING,
      PADDING,
    );

    const cursorX = clientX - containerRect.left;
    const cursorY = clientY - containerRect.top;

    let bestLeft = PADDING;
    let bestTop = PADDING;
    let bestDistance = 0;

    for (let i = 0; i < CANDIDATES; i++) {
      const left = Math.random() * (maxLeft - PADDING) + PADDING;

      const top = Math.random() * (maxTop - PADDING) + PADDING;

      const distance = Math.hypot(left - cursorX, top - cursorY);

      if (distance > bestDistance) {
        bestDistance = distance;
        bestLeft = left;
        bestTop = top;
      }
    }

    setPosition({
      left: bestLeft,
      top: bestTop,
    });

    setAttempts((prev) => prev + 1);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      dodge(e.clientX, e.clientY);
    },
    [dodge],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const touch = e.touches[0];

      if (!touch) return;

      dodge(touch.clientX, touch.clientY);
    },
    [dodge],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLButtonElement>) => {
      const touch = e.touches[0];

      if (!touch) return;

      dodge(touch.clientX, touch.clientY);
    },
    [dodge],
  );

  const phrases =
    (t('noPhrases.btnNo', {
      returnObjects: true,
    }) as string[]) ?? [];

  const text = phrases.length > 0 ? phrases[attempts % phrases.length] : 'No';

  return {
    containerRef,
    noBtnRef,
    position,
    isDodging: position !== null,
    text,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
  };
};
