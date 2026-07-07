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
  inviteGif: string;
  inviteTitle: string;
};

export type CardType = 'invite' | 'birthday' | 'custom';

//data from Wizard to be stored in localStorage and sent to backend
export type WizardData = {
  id?: string;
  type: CardType | null;
  inviteGif: string;
  inviteTitle: string;
  foodTitle: string;
  foodOptions: string[];
  dateTitle: string;
  questionTitle: string;
  link?: string;
};
