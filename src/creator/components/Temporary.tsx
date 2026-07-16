// import { motion, AnimatePresence } from 'framer-motion';
// import type { FoodOption } from '../../shared/types';
// import { foodOptions } from '../../data/foodOptions';
// import { useTranslation } from 'react-i18next'; // ИСПРАВЛЕНО: импортируем хук

// type FoodSelectorProps = {
//   selected: FoodOption[];
//   onChange: (value: FoodOption[]) => void;
// };

// export const FoodSelector = ({ selected, onChange }: FoodSelectorProps) => {
//   const { t } = useTranslation(); // ИСПРАВЛЕНО: достаем функцию t из хука

//   const handleToggle = (food: FoodOption) => {
//     const exists = selected.some((item) => item.id === food.id);
//     if (exists) {
//       onChange(selected.filter((item) => item.id !== food.id));
//     } else {
//       onChange([...selected, food]);
//     }
//   };

//   return (
//     <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 w-full">
//       {foodOptions.map((option) => {
//         const food: FoodOption = {
//           ...option,
//           title: t(`food.${option.id}`),
//           description: t(`food.${option.id}Description`),
//         };

//         const isSelected = selected.some((item) => item.id === food.id);

//         return (
//           <motion.button
//             key={food.id}
//             whileHover={{ scale: 1.03, y: -4 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => handleToggle(food)}
//             style={{
//               boxShadow: isSelected
//                 ? '0 0 15px rgba(189,40,97,0.9), 0 0 45px rgba(189,40,97,0.6)'
//                 : '0 10px 25px rgba(0,0,0,0.15)',
//             }}
//             className={`relative flex flex-col items-center gap-3 rounded-3xl text-center transition-all w-full h-auto p-2 cursor-pointer ${
//               isSelected
//                 ? 'border-2 border-[#bd2861] bg-white ring-4 ring-pink-500/10 scale-105'
//                 : 'border border-gray-200/60 bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100 opacity-80'
//             }`}
//           >
//             <AnimatePresence>
//               {isSelected && (
//                 <motion.div
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0, opacity: 0 }}
//                   className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#bd2861] text-white text-xs font-bold shadow-md"
//                 >
//                   ✓
//                 </motion.div>
//               )}
//             </AnimatePresence>
//             <span
//               className={`text-4xl transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}
//             >
//               {food.emoji}
//             </span>
//             <h3 className="text-xl font-bold text-[#531A2A] in-[.is-preview]:text-[#531A2A]">
//               {food.title}
//             </h3>
//             <p className="text-[14px] text-[#531A2A]! in-[.is-preview]:text-[#531A2A]! in-[.is-preview]:text-[10px]!">
//               {food.description}
//             </p>
//           </motion.button>
//         );
//       })}
//     </div>
//   );
// };

// import { motion } from 'framer-motion';
// import { FoodCard } from './FoodCard';
// import FloatingHearts from '../../shared/ui/FloatingHearts';
// import type { Card, FoodOption } from '../../shared/types';
// import { useTranslation } from 'react-i18next';

// export type FoodProps = {
//   card: Card;
//   selectedFood: FoodOption[];
//   onSelect?: (foods: FoodOption[]) => void;
//   mode?: 'select' | 'preview';
//   className?: string;
// };

// export const Food = ({
//   card,
//   selectedFood,
//   onSelect,
//   mode = 'select',
// }: FoodProps) => {
//   const { t } = useTranslation();

//   const handleSelect = (food: FoodOption) => {
//     const exists = selectedFood.some((item) => item.id === food.id);
//     if (exists) {
//       onSelect?.(selectedFood.filter((item) => item.id !== food.id));
//     } else {
//       onSelect?.([...selectedFood, food]);
//     }
//   };

//   const foodsToShow = mode === 'preview' ? selectedFood : card.foodOptions;

//   return (
//     <section className="content-block flex rounded-4xl flex-col items-center justify-center gap-8 shadow-2xl backdrop-blur-xl">
//       <div className="flex flex-col items-center gap-8 rounded-3xl">
//         <FloatingHearts />
//         <motion.div
//           animate={{ rotate: [-3, 3, -3] }}
//           transition={{
//             repeat: Infinity,
//             duration: 2,
//           }}
//           className="text-7xl"
//         >
//           🍽️
//         </motion.div>

//         <h2 className="text-center text-5xl font-bold in-[.is-preview]:text-[#531A2A]">
//           {card.foodTitle}
//         </h2>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
//           {foodsToShow.map((option) => {
//             const localizedFood: FoodOption = {
//               ...option,
//               title: t(`food.${option.id}`),
//               description: t(`food.${option.id}Description`),
//             };

//             return (
//               <FoodCard
//                 key={localizedFood.id}
//                 food={localizedFood}
//                 selected={selectedFood.some(
//                   (item) => item.id === localizedFood.id,
//                 )}
//                 onSelect={handleSelect}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
