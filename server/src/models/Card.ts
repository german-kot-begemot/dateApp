import mongoose from 'mongoose';

export interface FoodOption {
  id: string;
  title: string;
  emoji: string;
  description: string;
}

export interface CardDocument extends mongoose.Document {
  telegramChatId: string | null;
  type: string;
  inviteGif: string;
  inviteTitle: string;
  foodTitle: string;
  foodOptions: FoodOption[];
  dateTitle: string;
  questionTitle: string;
  expiresAt: Date;
}

const cardSchema = new mongoose.Schema(
  {
    telegramChatId: { type: String, default: null },
    type: { type: String, required: true },
    inviteGif: { type: String, required: true },
    inviteTitle: { type: String, required: true },
    foodTitle: { type: String, required: true },
    foodOptions: {
      type: [{ id: String, title: String, emoji: String, description: String }],
      required: true,
      default: [],
    },
    dateTitle: { type: String, required: true },
    questionTitle: { type: String, required: true },
    expiresAt: { type: Date, required: true, index: true },
  },
  { timestamps: true },
);

export const Card = mongoose.model<CardDocument>('Card', cardSchema);
