//type for the answers to the questions,which user will answer in the app
export type CardConfig = {
  id: string;
  type: 'date' | 'birthday' | 'custom';
  theme: 'pink' | 'purple' | 'cute';
  foodOptions: {
    id: string;
    title: string;
    emoji: string;
  }[];
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
  description: string;
};
