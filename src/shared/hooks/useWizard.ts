import { useEffect, useState } from 'react';
import { wizardStorage } from '../../store/wizardStorage';

export type CardType = 'invite' | 'birthday' | 'custom';

export type WizardData = {
  type: CardType | null;
  inviteGif: string;
  inviteTitle: string;
  foodTitle: string;
  dateTitle: string;
  questionTitle: string;
  link?: string;
};

const initial: WizardData = {
  type: null,
  inviteGif: '',
  inviteTitle: '',
  foodTitle: '',
  dateTitle: '',
  questionTitle: '',
  link: '',
};

export const useWizard = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>(() => {
    return wizardStorage.load<WizardData>() ?? initial;
  });

  const update = (patch: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  useEffect(() => {
    wizardStorage.save(data);
  }, [data]);

  return {
    step,
    data,
    update,
    next,
    back,
    setStep,
  };
};
