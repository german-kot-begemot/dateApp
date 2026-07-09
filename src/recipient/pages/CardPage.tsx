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
import { motion } from 'framer-motion';

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
    console.log('Submitting response:', response);
    console.log('selectedFood:', response.selectedFood);
    console.log('selectedDate:', response.selectedDate);
    console.log('selectedTime:', response.selectedTime);
    console.log('answer:', response.answer);
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
      <div className="recipient-wrapper min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6 gap-8">
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
          {step > 0 && step < 4 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={back}
              className="send-btn rounded-xl bg-gray-100 px-4 py-2"
            >
              Назад
            </motion.button>
          )}
          {step === 3 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleSubmit}
              className="rounded-xl bg-pink-500 px-4 py-2 text-white"
            >
              Отправить ответ
            </motion.button>
          )}
        </div>
      </div>
    </>
  );
};
