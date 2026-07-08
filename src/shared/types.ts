export type FoodOption = {
  id: string;
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
  foodOptions: FoodOption[];
  dateTitle: string;
  questionTitle: string;
  link?: string;
};

//type for the card object received from backend by ID (recipient side)
export type Card = {
  _id: string;
  type: string;
  inviteGif: string;
  inviteTitle: string;
  foodTitle: string;
  foodOptions: FoodOption[];
  dateTitle: string;
  questionTitle: string;
};

//type for the recipient's response to be sent to backend
export type RecipientAnswers = {
  selectedFood: FoodOption[];
  selectedDate: Date | null;
  selectedTime: Date | null;
  answer: string;
};
