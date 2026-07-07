export type CardConfig = {
  id: string;
  type: 'date' | 'birthday' | 'custom';
  theme?: 'pink' | 'purple' | 'cute';
  foodOptions: FoodOption[];
  inviteScreen: ScreenInvite;
  question: string;
  allowDate: boolean;
  allowTime: boolean;
};

export type Answers = {
  food: string;
  date: Date;
  question: string;
};

export type FoodOption = {
  id: number;
  title: string;
  emoji: string;
  description?: string;
};

export type ScreenInvite = {
  gif: string;
  title: string;
};
