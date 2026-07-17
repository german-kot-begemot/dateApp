import { AnswerModel } from '../models/Answer.js';
import { Card } from '../models/Card.js';
import { sendTelegramNotification } from '../services/telegram.js';
import express from 'express';

const router = express.Router();

// save recipient's answers in the database
router.post('/', async (req, res) => {
  const { cardId, selectedFood, selectedDate, selectedTime, answer } =
    req.body;

  try {
    const card = await Card.findById(cardId);

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    if (!selectedFood?.length || !selectedDate || !selectedTime || !answer) {
      return res.status(400).json({ message: 'Не все поля заполнены' });
    }

    const savedAnswer = await AnswerModel.create({
      cardId,
      selectedFood,
      selectedDate,
      selectedTime,
      answer,
    });

    // отправляем уведомление владельцу открытки
    const targetChatId = card.telegramChatId;

    if (targetChatId) {
      await sendTelegramNotification(
        targetChatId,
        savedAnswer,
      );
    }

    res.status(201).json({
      id: savedAnswer._id,
      message: 'Ответы сохранены',
    });

  } catch (error) {
    console.error('ERROR saving answers:', error);

    res.status(500).json({
      message: 'Save answers error',
    });
  }
});

export default router;