export type Answers = {
  food: string;
  date: Date | null;
  outfit: string;
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

export type OutfitProps = {
  onNext: () => void;
  onSelect: (outfit: string) => void;
};

export type QuestionProps = {
  onNext: () => void;
  onSelect: (answer: string) => void;
};

// export type FinalProps = {
//   answers: Answers;
// };
