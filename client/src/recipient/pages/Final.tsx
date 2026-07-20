import { useTranslation } from 'react-i18next';
import type { RecipientAnswers } from '../../shared/types';
import FloatingHearts from '../../shared/ui/FloatingHearts';
import i18n from '../../i18n/i18n';

export type FinalProps = {
  answers: RecipientAnswers;
};

export const Final = ({ answers }: FinalProps) => {
  const { t } = useTranslation();

  if (!answers.selectedDate || !answers.selectedTime) {
    return null;
  }

  const date = answers.selectedDate
    .toLocaleDateString(i18n.language, {
      day: 'numeric',
      month: 'long',
    })
    .replace(/^./, (str) => str.toUpperCase());

  const time = answers.selectedTime.toLocaleTimeString(i18n.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <section className="content-block flex flex-col items-center gap-5 rounded-4xl px-4 py-6 text-center shadow-2xl backdrop-blur-xl sm:gap-10 sm:px-8 sm:py-10">
      <FloatingHearts />

      <h1 className="text-3xl leading-tight sm:text-6xl">
        {t('final.finalHint')} {t('final.finalHint2')}
      </h1>

      <p className="text-xl leading-relaxed sm:text-4xl">
        {t('final.finalHint3')} <span className="font-semibold">{date}</span>{' '}
        {t('date.timePhrase')} <span className="font-semibold">{time}</span>
      </p>
    </section>
  );
};
