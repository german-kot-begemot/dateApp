import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema(
  {
    type: String,
    inviteGif: String,
    title: String,
    food: String,
    date: String,
    question: String,
    link: String,
  },
  { timestamps: true },
);

export const Card = mongoose.model('Card', cardSchema);
