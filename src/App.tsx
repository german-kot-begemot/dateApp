// import { useEffect, useState } from 'react';
// import type { Answers } from './shared/types';
// import { Invite } from './recipient/pages/Invite';
// import { Food } from './recipient/pages/Food';
// import { DatePage } from './recipient/pages/DatePage';
// import { Question } from './recipient/pages/Question';
// import { Final } from './recipient/pages/Final';
// import { ProgressBar } from './shared/ui/ProgressBar';
// import { AnimatePresence, motion } from 'framer-motion';

// export default function App() {
//   const saved = localStorage.getItem('date-app-answers');
//   const [step, setStep] = useState(0);
//   const initialAnswers: Answers = saved
//     ? JSON.parse(saved)
//     : {
//         food: '',
//         date: new Date(2026, 6, 1),
//         question: '',
//       };

//   const [answers, setAnswers] = useState(initialAnswers);
//   const nextStep = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const updateAnswer = (key: keyof Answers, value: string | Date | null) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [key]: value,
//     }));
//   };

//   const screens = [
//     <Invite onNext={nextStep} />,

//     <Food onNext={nextStep} onSelect={(food) => updateAnswer('food', food)} />,

//     <DatePage
//       onNext={nextStep}
//       onSelect={(date) => updateAnswer('date', date)}
//     />,

//     <Question
//       onNext={nextStep}
//       onSelect={(answer) => updateAnswer('question', answer)}
//     />,

//     <Final answers={answers} />,
//   ];

//   useEffect(() => {
//     localStorage.setItem('date-app-answers', JSON.stringify(answers));
//   }, [answers]);

//   return (
//     <>
//       <ProgressBar step={step} total={screens.length} />
//       <AnimatePresence mode="wait">
//         <motion.main
//           key={step}
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -60 }}
//           transition={{ duration: 0.35 }}
//         >
//           {screens[step]}
//         </motion.main>
//       </AnimatePresence>
//     </>
//   );
// }

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export default function App() {
  return <RouterProvider router={router} />;
}
