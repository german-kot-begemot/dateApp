import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const HowItWorksAccordion = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const steps = [
    {
      number: '01',
      title: t('home.howItWorksSteps.create.title'),
      description: t('home.howItWorksSteps.create.description'),
    },
    {
      number: '02',
      title: t('home.howItWorksSteps.share.title'),
      description: t('home.howItWorksSteps.share.description'),
    },
    {
      number: '03',
      title: t('home.howItWorksSteps.response.title'),
      description: t('home.howItWorksSteps.response.description'),
    },
  ];
  return (
    <div className="w-full max-w-3xl flex flex-col gap-7.5 items-center pb-10">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="mx-auto flex items-center gap-2 text-lg text-[#F93C96] transition-colors hover:text-[#CC476C] sm:text-xl lg:text-2xl"
      >
        {t('home.howItWorks')}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={22} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-3xl border border-white/30 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:p-7">
              <div className="flex flex-col gap-5 sm:gap-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-1 gap-3 sm:flex-col sm:gap-2"
                  >
                    <span className="shrink-0 text-2xl font-bold text-[#F93C96]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-3xl! text-[#F93C96] sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#531A2A]/80 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
