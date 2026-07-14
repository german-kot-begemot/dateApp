import type { RecipientAnswers } from '../../shared/types';
import FloatingHearts from '../../shared/ui/FloatingHearts';

export type FinalProps = {
  answers: RecipientAnswers;
};

export const Final = ({ answers }: FinalProps) => {
  if (!answers.selectedDate || !answers.selectedTime) {
    return null;
  }
  return (
    <section className="content-block flex rounded-4xl flex-col items-center justify-center gap-8 ">
      <FloatingHearts />
      <h1 className="text-8xl text-center">
        That's just great!
        <br /> The date is on!
      </h1>
      <p className="text-6xl">
        See you: &nbsp;
        {answers.selectedDate
          .toLocaleDateString('en-En', { day: 'numeric', month: 'long' })
          .replace(/^./, (str) => str.toUpperCase())}{' '}
        at &nbsp;
        {answers.selectedTime.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </section>
  );
};
