import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInContainer } from '../../shared/animations/variants';

type WizardSectionProps = {
  children: ReactNode;
  className?: string;
};

export const WizardSection = ({
  children,
  className = '',
}: WizardSectionProps) => {
  return (
    <motion.section
      variants={fadeInContainer()}
      initial="hidden"
      animate="visible"
      className={`w-full min-w-0 ${className}`}
    >
      {children}
    </motion.section>
  );
};
