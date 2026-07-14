import { motion } from 'framer-motion';

type Props = {
  step: number;
  total: number;
};

export const ProgressBar = ({ step, total }: Props) => {
  const progress = Math.min(((step + 1) / total) * 100, 100);
  return (
    <div className="mx-auto mb-10 h-3 w-full overflow-hidden rounded-full bg-[#000000]">
      <motion.div
        animate={{ width: `${progress}%` }}
        className="h-full rounded-full bg-[#BA265E]"
      />
    </div>
  );
};
