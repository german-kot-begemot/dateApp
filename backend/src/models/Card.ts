import mongoose from 'mongoose';

export interface CardDocument extends mongoose.Document {
  type: string;
  inviteGif: string;
  inviteTitle: string;
  foodTitle: string;
  foodOptions: string[];
  dateTitle: string;
  questionTitle: string;
}

const cardSchema = new mongoose.Schema(
  {
    type: {type: String,required: true,},
    inviteGif: {type: String,required: true,},
    inviteTitle: {type: String,required: true,},
    foodTitle: {type: String,required: true,},
    foodOptions: {type: [String],required: true,default: [],},
    dateTitle: {type: String,required: true,},
    questionTitle: {type: String,required: true,},
  },
  {timestamps: true,},
);

export const Card = mongoose.model<CardDocument>('Card', cardSchema);