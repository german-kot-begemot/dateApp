import { motion } from 'framer-motion';

export const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-pink-50">
    <motion.div
      animate={{
        scale: [1, 1.25, 1],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
      }}
      className="text-6xl"
    >
      💖
    </motion.div>
  </div>
);
