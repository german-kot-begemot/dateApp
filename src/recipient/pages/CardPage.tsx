import { ProgressBar } from '../../shared/ui/ProgressBar';
import { useParams } from 'react-router-dom';
import { WizardStep } from '../../creator/pages/WizardStep';
import { Invite } from './Invite';
import { useStep } from '../../shared/hooks/useStep';
import type { Card, RecipientAnswers } from '../../shared/types';
import { useEffect, useState } from 'react';
import { Food } from './Food';
import { DatePage } from './DatePage';
import { Question } from './Question';
import { getCard, sendAnswersResponse } from '../../api/cardApi';
import { Final } from './Final';

export const CardPage = () => {
  const { id } = useParams();
  const { step, next, back } = useStep();
  const [card, setCard] = useState<Card | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<RecipientAnswers>({
    selectedFood: [],
    selectedDate: null,
    selectedTime: null,
    answer: '',
  });

  useEffect(() => {
    const fetchCard = async () => {
      if (!id) return;
      try {
        const cardData = await getCard(id);
        setCard(cardData);
      } catch (error) {
        console.error('Ошибка при загрузке карточки:', error);
        setError(
          error instanceof Error
            ? error.message
            : 'Не удалось загрузить карточку. Попробуйте позже.',
        );
      }
    };
    fetchCard();
  }, [id]);

  const handleSubmit = async () => {
    if (
      !response.selectedFood.length ||
      !response.selectedDate ||
      !response.answer
    ) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    if (!id) return;
    try {
      await sendAnswersResponse(id, response);
      next();
    } catch (error) {
      console.error('Ошибка при отправке ответов:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'Не удалось отправить ответы. Попробуйте позже.',
      );
    }
  };

  if (error)
    return (
      <div>
        <p>Ошибка сервера. Попробуйте позже:</p>
        {error}
      </div>
    );

  if (!card) return <div>Loading...</div>;

  return (
    <div className="recipient-wrapper min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl flex flex-col gap-8 max-h-150 overflow-auto">
        <ProgressBar step={step} total={5} />
        <WizardStep step={step}>
          {step === 0 && <Invite card={card} onNext={next} />}
          {step === 1 && (
            <Food
              card={card}
              selectedFood={response.selectedFood}
              onSelect={(foods) =>
                setResponse((prev) => ({
                  ...prev,
                  selectedFood: foods,
                }))
              }
              onNext={next}
            />
          )}
          {step === 2 && (
            <DatePage
              card={card}
              selectedDate={response.selectedDate}
              selectedTime={response.selectedTime}
              onDateSelect={(date) =>
                setResponse((prev) => ({ ...prev, selectedDate: date }))
              }
              onTimeSelect={(time) =>
                setResponse((prev) => ({ ...prev, selectedTime: time }))
              }
              onNext={next}
            />
          )}
          {step === 3 && (
            <Question
              card={card}
              value={response.answer}
              onSelect={(answer) =>
                setResponse((prev) => ({ ...prev, answer }))
              }
              onNext={handleSubmit}
            />
          )}
          {step === 4 && <Final answers={response} />}
        </WizardStep>
        {step > 0 && step < 4 && (
          <button onClick={back} className="rounded-xl bg-gray-100 px-4 py-2">
            Назад
          </button>
        )}
      </div>
    </div>
  );
};
