// import './App.css';

import { useState } from 'react';
import type { Answers } from './types';
import { Invite } from './components/Invite';
import { Food } from './components/Food';

// export default function App() {
//   return <div className="App">DateApp</div>;
// }

export default function App() {
  const [step, setStep] = useState(0);

  const initialAnswers: Answers = {
    food: '',
    date: null,
    outfit: '',
    question: '',
  };
  const [answers, setAnswers] = useState(initialAnswers);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  console.log('answers', answers);

  const updateAnswer = (key: keyof Answers, value: string | Date | null) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: value,
    }));
  };

  const screens = [
    <Invite onNext={nextStep} />,

    <Food onNext={nextStep} onSelect={(food) => updateAnswer('food', food)} />,

    // <Date onNext={nextStep} onSelect={(date) => updateAnswer('date', date)} />,

    // <Outfit
    //   onNext={nextStep}
    //   onSelect={(outfit) => updateAnswer('outfit', outfit)}
    // />,

    // <Question
    //   onNext={nextStep}
    //   onSelect={(answer) => updateAnswer('question', answer)}
    // />,

    // <Final answers={answers} />,
  ];
  return <main>{screens[step]}</main>;
}
