import { motion } from 'framer-motion';

export const Heart = () => {
  return (
    <motion.div
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="text-7xl select-none"
    >
      💖
    </motion.div>
  );
};
