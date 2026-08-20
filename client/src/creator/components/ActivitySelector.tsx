import { useTranslation } from 'react-i18next';
import type { ActivityOption } from '../../shared/types';
import { AnimatePresence, motion } from 'framer-motion';
import { activityOptions } from '../../data/activityOptions';
import { getActivityTranslation } from '../../shared/lib/getActivityTranslation';

type ActivitySelectorProps = {
  selected: ActivityOption[];
  onChange: (value: ActivityOption[]) => void;
};

export const ActivitySelector = ({
  selected,
  onChange,
}: ActivitySelectorProps) => {
  const { t } = useTranslation();

  const handleToggle = (activity: ActivityOption) => {
    const exists = selected.some((item) => item.id === activity.id);

    if (exists) {
      onChange(selected.filter((item) => item.id !== activity.id));
    } else {
      onChange([...selected, activity]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6">
      {activityOptions.map((option) => {
        const activity = getActivityTranslation(option, t);
        const isSelected = selected.some((item) => item.id === activity.id);

        return (
          <motion.button
            key={activity.id}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow:
                '0 0 25px rgba(189,40,97,0.65), 0 8px 25px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 25,
            }}
            onClick={() => handleToggle(activity)}
            style={{
              boxShadow: isSelected
                ? '0 0 15px rgba(189,40,97,0.9), 0 0 45px rgba(189,40,97,0.6)'
                : '0 10px 25px rgba(0,0,0,0.15)',
            }}
            className={`relative flex min-h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl p-2 text-center sm:min-h-40 sm:rounded-3xl sm:gap-3 ${
              isSelected
                ? 'scale-105 border-2 border-[#bd2861] bg-white ring-4 ring-pink-500/10'
                : 'border border-gray-200/60 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 opacity-80'
            }`}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#bd2861] text-xs font-bold text-white shadow-md"
                >
                  ✓
                </motion.div>
              )}
            </AnimatePresence>
            <span
              className={`text-3xl transition-transform duration-300 sm:text-4xl ${
                isSelected ? 'scale-110' : ''
              }`}
            >
              {activity.emoji}
            </span>
            <h3 className="text-sm font-bold text-[#531A2A] sm:text-xl">
              {activity.title}
            </h3>
            <p className="text-xs text-[#531A2A]! sm:text-sm">
              {activity.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};
