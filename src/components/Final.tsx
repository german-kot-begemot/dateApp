import { motion } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import type { InviteProps } from '../types';

// const BUTTON_WIDTH = 120;
// const BUTTON_HEIGHT = 56;
// const SAFE_DISTANCE = 140;

// export const Invite = ({ onNext }: InviteProps) => {
//   const moveButton = () => {
//     // eslint-disable-next-line react-hooks/purity
//     const x = Math.random() * 220 - 110;
//     // eslint-disable-next-line react-hooks/purity
//     const y = Math.random() * 140 - 70;
//     setPosition({ x, y });
//   };

//   const backgroundHearts = useMemo(() => {
//     return Array.from({ length: 18 }).map((_, index) => ({
//       id: index,
//       // eslint-disable-next-line react-hooks/purity
//       top: `${Math.random() * 100}%`,
//       // eslint-disable-next-line react-hooks/purity
//       left: `${Math.random() * 100}%`,
//       duration: 3 + index * 0.3,
//     }));
//   }, []);

//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const noButtonRef = useRef(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const button = noButtonRef.current as HTMLButtonElement | null;
//     if (!button) return;

//     // Получаем текущие координаты центра кнопки на экране
//     const rect = button.getBoundingClientRect();
//     const buttonCenterX = rect.left + rect.width / 2;
//     const buttonCenterY = rect.top + rect.height / 2;

//     // Вычисляем расстояние между курсором и центром кнопки
//     const distanceX = e.clientX - buttonCenterX;
//     const distanceY = e.clientY - buttonCenterY;
//     const distance = Math.hypot(distanceX, distanceY);

//     // Радиус чувствительности (в пикселях). Чем больше, тем раньше кнопка начнет убегать
//     const proximityRadius = 120;

//     if (distance < proximityRadius) {
//       // Если курсор слишком близко, генерируем случайный прыжок,
//       // но гарантированно В СТОРОНУ от курсора (вектор отталкивания)
//       const angle =
//         Math.atan2(distanceY, distanceX) + (Math.random() - 0.5) * 1.5;

//       // Дистанция отскока (в пикселях)
//       const escapeDistance = 150;

//       // Вычисляем новые координаты относительно начальной позиции кнопки
//       const newX = position.x - Math.cos(angle) * escapeDistance;
//       const yMod = position.y - Math.sin(angle) * escapeDistance;

//       // Ограничиваем область побега, чтобы кнопка не улетела далеко за пределы экрана
//       const maxMove = 250;
//       const clampedX = Math.max(-maxMove, Math.min(maxMove, newX));
//       const clampedY = Math.max(-maxMove, Math.min(maxMove, yMod));

//       setPosition({ x: clampedX, y: clampedY });
//     }
//   };

//   return (
//     <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6 py-12">
//       {/* Background Floating Hearts */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {backgroundHearts.map((heart) => (
//           <motion.div
//             key={heart.id}
//             animate={{ y: [-20, 20, -20] }}
//             transition={{
//               repeat: Infinity,
//               duration: heart.duration,
//               ease: 'easeInOut',
//             }}
//             className="absolute text-3xl opacity-20"
//             style={{ top: heart.top, left: heart.left }}
//           >
//             ❤️
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         onMouseMove={handleMouseMove}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl bg-white/80 p-8 text-center shadow-2xl backdrop-blur-lg sm:p-10"
//       >
//         <motion.div
//           animate={{ scale: [1, 1.15, 1] }}
//           transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
//           className="text-7xl select-none"
//         >
//           💖
//         </motion.div>

//         {/* Text Content */}
//         <div className="flex flex-col gap-8 text-center">
//           <h1 className="text-3xl font-bold text-pink-600">
//             Пойдешь со мной на свидание?
//           </h1>
//           <p className="text-2xl text-gray-700 sm:text-3xl">
//             Обещаю, будет вкусно, весело и без скучных разговоров 😌
//           </p>
//         </div>

//         {/* Action Buttons Container */}
//         <div className="relative flex h-28 w-full items-center justify-center gap-6">
//           {/* Button: YES */}
//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onNext}
//             className="rounded-xl bg-[#EBC4D4] px-8 py-4 text-3xl font-semibold shadow-lg transition hover:bg-pink-600 hover:text-white"
//           >
//             Да ❤️
//           </motion.button>

//           {/* Button: NO */}
//           <motion.button
//             animate={{ x: position.x, y: position.y }}
//             transition={{ type: 'spring', stiffness: 250, damping: 25 }}
//             onMouseEnter={moveButton}
//             className="rounded-xl bg-gray-200 px-8 py-4 font-semibold text-gray-700 shadow transition-colors hover:bg-gray-300"
//           >
//             Нет
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

const BUTTON_WIDTH = 120;
const BUTTON_HEIGHT = 56;
const SAFE_DISTANCE = 140;

export const Invite = ({ onNext }: InviteProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  const [attempts, setAttempts] = useState(0);

  const texts = [
    'Нет 🙈',
    'Точно нет? 😅',
    'Попробуй 😎',
    'Не поймаешь 😂',
    'Сдавайся ❤️',
  ];

  const moveButton = () => {
    const container = containerRef.current;

    if (!container) return;

    const { width, height } = container.getBoundingClientRect();

    const left = Math.random() * (width - BUTTON_WIDTH);
    const top = Math.random() * (height - BUTTON_HEIGHT);

    setPosition({ left, top });
    setAttempts((prev) => prev + 1);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const dx = e.clientX - buttonX;
    const dy = e.clientY - buttonY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < SAFE_DISTANCE) {
      moveButton();
    }
  };

  const backgroundHearts = useMemo(() => {
    return Array.from({ length: 18 }).map((_, index) => ({
      id: index,
      // eslint-disable-next-line react-hooks/purity
      top: `${Math.random() * 100}%`,
      // eslint-disable-next-line react-hooks/purity
      left: `${Math.random() * 100}%`,
      duration: 3 + index * 0.3,
    }));
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 flex items-center justify-center p-4 gap-4">
      // {/* Background Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundHearts.map((heart) => (
          <motion.div
            key={heart.id}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              repeat: Infinity,
              duration: heart.duration,
              ease: 'easeInOut',
            }}
            className="absolute text-3xl opacity-20"
            style={{ top: heart.top, left: heart.left }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="content-holder flex flex-col gap-4 w-full max-w-xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl p-10"
      >
        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-7xl select-none"
          >
            💖
          </motion.div>
          // {/* Text Content */}
          <div className="text-holder flex flex-col gap-8 text-center">
            <h1 className="text-3xl font-bold text-pink-600">
              Пойдешь со мной на свидание?
            </h1>
            <p className="text-2xl">
              Обещаю, будет вкусно, весело и без скучных разговоров 😌
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className=" btn-holder relative rounded-2xl flex h-46 w-full items-center justify-center gap-6 border-pink-100 bg-pink-50"
        >
          <button
            onClick={onNext}
            className="absolute left-8 bottom-8 rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-pink-600"
          >
            Да ❤️
          </button>

          <motion.button
            ref={buttonRef}
            animate={position}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 22,
            }}
            className="absolute rounded-xl bg-gray-200 px-8 py-4 font-semibold text-gray-700 shadow-lg select-none"
          >
            {texts[Math.min(attempts, texts.length - 1)]}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
