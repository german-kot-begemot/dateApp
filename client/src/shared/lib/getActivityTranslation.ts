import type { TFunction } from 'i18next';
import type { ActivityOption } from '../types';

export const getActivityTranslation = (
  activity: ActivityOption,
  t: TFunction,
) => ({
  ...activity,
  title: t(`activity.${activity.id}`),
  description: t(`activity.${activity.id}Description`),
});
