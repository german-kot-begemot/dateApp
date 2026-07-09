import mongoose from 'mongoose';
import { FoodOption } from './Card.js';

export interface Answer extends mongoose.Document {
  cardId: mongoose.Types.ObjectId;
  selectedFood: FoodOption[];
  selectedDate: string;
  selectedTime: string;
  answer: string;
}

const answerSchema = new mongoose.Schema({
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
    required: true,
  },
  selectedFood: [
    {
      id: String,
      title: String,
      emoji: String,
      description: String,
    },
  ],
  selectedDate: {
    type: String,
    required: true,
  },
  selectedTime: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const AnswerModel = mongoose.model<Answer>('Answer', answerSchema);
