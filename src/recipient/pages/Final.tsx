import type { RecipientAnswers } from '../../shared/types';
import FloatingHearts from '../../shared/ui/FloatingHearts';

export type FinalProps = {
  answers: RecipientAnswers;
};

export const Final = ({ answers }: FinalProps) => {
  if (!answers.selectedDate) {
    return null;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6 gap-8">
      <FloatingHearts />
      <h1 className="text-8xl font-bold text-pink-600">
        Вот и чудненько!
        <br /> Свиданию быть!!
      </h1>
      <p className="text-6xl">
        Увидимся: &nbsp;
        {answers.selectedDate
          .toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
          .replace(/^./, (str) => str.toUpperCase())}{' '}
        в &nbsp;
        {answers.selectedDate.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  );
};
