import invite1 from '../assets/gif/invite1.gif';
import invite2 from '../assets/gif/invite2.gif';
import invite3 from '../assets/gif/invite3.gif';
import invite4 from '../assets/gif/invite4.gif';
import invite5 from '../assets/gif/invite5.gif';

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

export const inviteGifs = [
  {
    id: '1',
    src: invite1,
    title: 'Милый котик',
  },
  {
    id: '2',
    src: invite2,
    title: 'Сердечки',
  },
  {
    id: '3',
    src: invite3,
    title: 'Романтика',
  },
  {
    id: '4',
    src: invite4,
    title: 'Цветы',
  },
  {
    id: '5',
    src: invite5,
    title: 'Подарок',
  },
];
