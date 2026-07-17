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
import FloatingHearts from '../../shared/ui/FloatingHearts';
import { AppBtn } from '../../shared/ui/AppBtn';

export const CardPage = () => {
  const { id } = useParams();
  const { step, next, back } = useStep();
  const [card, setCard] = useState<Card | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<RecipientAnswers>({
    cardId: '',
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
      !response.selectedTime ||
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
    <>
      <ProgressBar step={step} total={5} />
      <div className="recipient-wrapper bg-love-gradient min-h-screen flex flex-col items-center justify-center px-6 gap-8">
        <FloatingHearts />
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
            />
          )}
          {step === 3 && (
            <Question
              card={card}
              value={response.answer}
              onSelect={(answer) =>
                setResponse((prev) => ({
                  ...prev,
                  answer,
                }))
              }
            />
          )}
          {step === 4 && <Final answers={response} />}
        </WizardStep>
        <div className="btn-hol relative flex w-full max-w-xl justify-center gap-4">
          {step > 0 && step < 4 && <AppBtn onClick={back}>Back</AppBtn>}

          {step === 1 && (
            <AppBtn
              onClick={next}
              disabled={response.selectedFood.length === 0}
            >
              Next
            </AppBtn>
          )}

          {step === 2 && (
            <AppBtn
              onClick={next}
              disabled={!response.selectedDate || !response.selectedTime}
            >
              Next
            </AppBtn>
          )}

          {step === 3 && (
            <AppBtn onClick={handleSubmit} disabled={!response.answer}>
              Send answers
            </AppBtn>
          )}
        </div>
      </div>
    </>
  );
};
