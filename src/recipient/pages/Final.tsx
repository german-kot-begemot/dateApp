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
  return (
    <section className="content-block  items-center gap-10 ">
      <FloatingHearts />
      <h1 className="text-6xl text-center">
        {t('final.finalHint')}
        <br /> {t('final.finalHint2')}
      </h1>
      <p className="text-4xl text-center">
        {t('final.finalHint3')}&nbsp;
        {answers.selectedDate
          .toLocaleDateString(i18n.language, {
            day: 'numeric',
            month: 'long',
          })
          .replace(/^./, (str) => str.toUpperCase())}{' '}
        {t('date.timePhrase')} &nbsp;
        {answers.selectedTime.toLocaleTimeString(i18n.language, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}
      </p>
    </section>
  );
};
