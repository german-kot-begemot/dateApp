// import { useState } from 'react';
// import type { FoodOption } from '../types';

// type UseFoodProps = {
//   onSelect?: (food: string) => void;
//   onNext?: (food: FoodOption) => void;
// };

// export const useFoodRecipient = ({ onNext, onSelect }: UseFoodProps) => {
//   const [selectedFood, setSelectedFood] = useState<FoodOption | null>(null);

//   const handleSelect = (food: FoodOption) => {
//     setSelectedFood(food);

//     onSelect?.(food.title);

//     setTimeout(() => {
//       onNext?.(food);
//     }, 600);
//   };

//   return {
//     selectedFood,
//     handleSelect,
//   };
// };
