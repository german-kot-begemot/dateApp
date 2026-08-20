import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type OpenCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenCard: (cardId: string) => void;
};

export const OpenCardModal = ({
  isOpen,
  onClose,
  onOpenCard,
}: OpenCardModalProps) => {
  const { t } = useTranslation();
  const [cardId, setCardId] = useState('');

  const handleSubmit = () => {
    const value = cardId.trim();
    if (!value) return;
    onOpenCard(value);
    setCardId('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#531A2A]/30 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md flex flex-col gap-7.5 rounded-3xl border border-pink-200/60 bg-linear-to-br from-pink-50 via-rose-50 to-fuchsia-100 p-6 text-[#531A2A] shadow-[0_15px_50px_rgba(83,26,42,0.25)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#531A2A]/60 transition-all duration-200 hover:bg-[#CC476C]/10 hover:text-[#CC476C] hover:scale-105 active:scale-95"
            >
              <X size={20} />
            </button>

            <h2 className="text-center text-4xl text-[#531A2A]">
              {t('home.modalOpenCard.title')}
            </h2>

            <p className="text-center text-[#531A2A]/70! text-xl">
              {t('home.modalOpenCard.description')}
            </p>

            <input
              type="text"
              placeholder={t('home.modalOpenCard.placeholder')}
              className="mt-6 w-full rounded-2xl border-2 border-pink-200 bg-white/80 px-4 py-3 text-[#531A2A] shadow-sm outline-none transition-all duration-200 placeholder:text-[#531A2A]! hover:border-pink-300 focus:border-[#CC476C] focus:bg-white focus:shadow-[0_0_20px_rgba(204,71,108,0.15)]"
            />

            <button
              type="button"
              className="mt-4 w-full rounded-2xl bg-[#CC476C] px-5 py-3 text-lg font-semibold text-white shadow-lg shadow-[#CC476C]/25 transition-all duration-200 hover:bg-[#bd2861] hover:shadow-xl hover:shadow-[#CC476C]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              onClick={handleSubmit}
            >
              {t('home.modalOpenCard.button')}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
