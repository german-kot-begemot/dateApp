import express from 'express';
import { Card } from '../models/Card.js';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/webhook', async (req, res) => {
  console.log('🔥 WEBHOOK CALLED');

  try {
    // const message = req.body.message;
    console.log('📩 Telegram webhook:', JSON.stringify(req.body, null, 2));
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
    console.log('CARD ID:', cardId);
    console.log('CHAT ID:', chatId);
    if (!cardId || !mongoose.Types.ObjectId.isValid(cardId)) {
      return res.sendStatus(200);
    }

    const card = await Card.findById(cardId);
    console.log('FOUND CARD:', card?._id);

    if (!card) {
      return res.sendStatus(200);
    }

    card.telegramChatId = String(chatId);

    await card.save();
    console.log('SAVED TELEGRAM ID:', card.telegramChatId);
    res.sendStatus(200);
  } catch (error) {
    console.error('Telegram webhook error:', error);

    res.sendStatus(500);
  }
});

export default router;
