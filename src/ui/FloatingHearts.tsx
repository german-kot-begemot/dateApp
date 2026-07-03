/* eslint-disable react-hooks/purity */
import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingHearts() {
  // Генерируем массив из 15 случайных сердечек один раз при монтировании
  const backgroundHearts = useMemo(() => {
    return Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 95}%`,
      duration: 3 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {backgroundHearts.map((heart) => (
        <motion.div
          key={heart.id}
          animate={{ y: [-15, 15, -15] }}
          transition={{
            repeat: Infinity,
            duration: heart.duration,
            ease: 'easeInOut',
          }}
          className="absolute text-3xl opacity-15"
          style={{ top: heart.top, left: heart.left }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
