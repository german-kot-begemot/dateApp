import { useEffect, useState } from 'react';
import type { Answers } from './types';
import { Invite } from './components/Invite';
import { Food } from './components/Food';
import { DatePage } from './components/DatePage';
import { Question } from './components/Question';
import { Final } from './components/Final';
import { ProgressBar } from './ui/ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const saved = localStorage.getItem('date-app-answers');
  const [step, setStep] = useState(0);
  const initialAnswers: Answers = saved
    ? JSON.parse(saved)
    : {
        food: '',
        date: new Date(2026, 6, 1),
        question: '',
      };

  const [answers, setAnswers] = useState(initialAnswers);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const updateAnswer = (key: keyof Answers, value: string | Date | null) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: value,
    }));
  };

  const screens = [
    <Invite onNext={nextStep} />,

    <Food onNext={nextStep} onSelect={(food) => updateAnswer('food', food)} />,

    <DatePage
      onNext={nextStep}
      onSelect={(date) => updateAnswer('date', date)}
    />,

    <Question
      onNext={nextStep}
      onSelect={(answer) => updateAnswer('question', answer)}
    />,

    <Final answers={answers} />,
  ];

  useEffect(() => {
    localStorage.setItem('date-app-answers', JSON.stringify(answers));
  }, [answers]);

  return (
    <>
      <ProgressBar step={step} total={screens.length} />
      <AnimatePresence mode="wait">
        <motion.main
          key={step}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.35 }}
        >
          {screens[step]}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
