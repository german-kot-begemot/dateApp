import type { FoodOption } from '../types';
import type { TFunction } from 'i18next';

export const getFoodTranslation = (food: FoodOption, t: TFunction) => ({
  ...food,
  title: t(`food.${food.id}`),
  description: t(`food.${food.id}Description`),
});
