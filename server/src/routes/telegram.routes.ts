import express from 'express';
import { Card } from '../models/Card.js';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/webhook', async (req, res) => {
  console.log('TELEGRAM UPDATE:', JSON.stringify(req.body, null, 2));
  try {
    const message = req.body.message;

    if (!message) {
      return res.sendStatus(200);
    }

    const chatId = message.chat.id;
    const text = message.text;

    if (!text?.startsWith('/start')) {
      return res.sendStatus(200);
    }

    const [, cardId] = text.split(' ');

    if (!cardId || !mongoose.Types.ObjectId.isValid(cardId)) {
      return res.sendStatus(200);
    }

    const card = await Card.findById(cardId);
    console.log('CARD FROM WEBHOOK:', card?._id);

    if (!card) {
      return res.sendStatus(200);
    }

    card.telegramChatId = String(chatId);

    await card.save();
    res.sendStatus(200);
  } catch (error) {
    console.error('Telegram webhook error:', error);

    res.sendStatus(500);
  }
});

export default router;
