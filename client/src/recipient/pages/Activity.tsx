import { motion } from 'framer-motion';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import type { ActivityOption, Card } from '../../shared/types';
import { ActivityCard } from './ActivityCard';

type ActivityProps = {
  card: Card;
  selectedActivity: ActivityOption[];
  mode?: 'select' | 'preview';
  onSelect?: (activity: ActivityOption[]) => void;
  className?: string;
};

export const Activity = ({
  card,
  selectedActivity,
  onSelect,
  mode = 'select',
  className = '',
}: ActivityProps) => {
  const handleSelect = (activity: ActivityOption) => {
    const exists = selectedActivity.some((item) => item.id === activity.id);

    if (exists) {
      onSelect?.(selectedActivity.filter((item) => item.id !== activity.id));
    } else {
      onSelect?.([...selectedActivity, activity]);
    }
  };

  const activitiesToShow =
    mode === 'preview' ? selectedActivity : card.activityOptions;

  return (
    <section
      className={`content-block flex w-full flex-col items-center justify-center gap-6 rounded-3xl p-5 text-center sm:gap-8 sm:p-8 in-[.is-preview]:gap-2 in-[.is-preview]:rounded-xl in-[.is-preview]:p-2 ${className}`}
    >
      <div className="flex w-full flex-col items-center gap-6 rounded-3xl sm:gap-8 in-[.is-preview]:gap-2">
        <FloatingHearts />
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl sm:text-7xl in-[.is-preview]:text-3xl"
        >
          🎉
        </motion.div>
        <h2 className="text-center text-3xl font-bold text-[#fdf1e8] sm:text-5xl in-[.is-preview]:text-xl in-[.is-preview]:text-[#531A2A]">
          {card.activityTitle}
        </h2>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 in-[.is-preview]:grid-cols-1 in-[.is-preview]:gap-4">
          {activitiesToShow.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              selected={selectedActivity.some(
                (item) => item.id === activity.id,
              )}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
