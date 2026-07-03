export type Answers = {
  food: string;
  date: Date;
  question: string;
};

export type InviteProps = {
  onNext: () => void;
};

export type FoodProps = {
  onNext: () => void;
  onSelect: (food: string) => void;
};

export type DateProps = {
  onNext: () => void;
  onSelect: (date: Date | null) => void;
};

export type QuestionProps = {
  onNext: () => void;
  onSelect: (answer: string) => void;
};

export type FoodCardProps = {
  food: FoodOption;
  selected: boolean;
  onSelect: (food: FoodOption) => void;
};

export type FinalProps = {
  answers: Answers;
};

export type FoodOption = {
  id: number;
  title: string;
  emoji: string;
  description: string;
};
