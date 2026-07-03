import { useCallback, useRef, useState } from 'react';
import type React from 'react';

const PHRASES = [
  'Нет 😢',
  'Нет 🙈',
  'Точно нет? 😅',
  'Попробуй 😎',
  'Не поймаешь 😂',
  'Сдавайся ❤️',
] as const;

const SAFE_DISTANCE = 130; // с какого расстояния курсора кнопка начинает бояться
const PADDING = 12; // отступ от краёв контейнера
const CANDIDATES = 12; // сколько случайных точек перебрать, выбирая самую дальнюю от курсора

type Position = {
  left: number;
  top: number;
};

export const useAnswerNoButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState<Position | null>(null);

  const dodge = useCallback((clientX: number, clientY: number) => {
    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distanceToCursor = Math.hypot(
      buttonCenterX - clientX,
      buttonCenterY - clientY,
    );

    if (distanceToCursor > SAFE_DISTANCE) return;

    const maxLeft = containerRect.width - buttonRect.width - PADDING;
    const maxTop = containerRect.height - buttonRect.height - PADDING;

    const cursorLeft = clientX - containerRect.left;
    const cursorTop = clientY - containerRect.top;

    let bestLeft = PADDING;
    let bestTop = PADDING;
    let bestDistance = -Infinity;

    for (let i = 0; i < CANDIDATES; i++) {
      const candidateLeft =
        PADDING + Math.random() * Math.max(maxLeft - PADDING, 0);
      const candidateTop =
        PADDING + Math.random() * Math.max(maxTop - PADDING, 0);

      const candidateCenterX = candidateLeft + buttonRect.width / 2;
      const candidateCenterY = candidateTop + buttonRect.height / 2;

      const dist = Math.hypot(
        candidateCenterX - cursorLeft,
        candidateCenterY - cursorTop,
      );

      if (dist > bestDistance) {
        bestDistance = dist;
        bestLeft = candidateLeft;
        bestTop = candidateTop;
      }
    }

    setPosition({ left: bestLeft, top: bestTop });
    setAttempts((prev) => prev + 1);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      dodge(e.clientX, e.clientY);
    },
    [dodge],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLButtonElement>) => {
      const touch = e.touches[0];
      if (touch) dodge(touch.clientX, touch.clientY);
    },
    [dodge],
  );

  return {
    containerRef,
    buttonRef,
    position,
    isDodging: position !== null,
    text: PHRASES[attempts % PHRASES.length],
    handleMouseMove,
    handleTouchStart,
  };
};
