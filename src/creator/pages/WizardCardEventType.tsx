import { motion } from 'framer-motion';

type Props = {
  selected: string | null;
  onSelect: (v: string) => void;
};

const options = [
  { id: 'invite', title: 'Приглашение' },
  { id: 'birthday', title: 'Поздравление с Днем рождения' },
  { id: 'custom', title: 'Свой вариант' },
];

export const WizardCardEventType = ({ selected, onSelect }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((opt) => (
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -6,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            type: 'spring',
            stiffness: 350,
          }}
          key={opt.id}
          onClick={() => onSelect(opt.id)}
          className={`relative text-2xl! flex flex-col items-center gap-3 rounded-3xl p-4 max-w-sm justify-center
      text-center shadow-lg  bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100
        ${selected === opt.id ? 'ring-pink-500 scale-105 border border-pink-500' : 'hover:shadow-lg'}
      `}
        >
          {opt.title}
        </motion.button>
      ))}
    </div>
  );
};
