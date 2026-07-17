import express from 'express';
import { Card } from '../models/Card.js';

// создать открытку

const router = express.Router();

//create card
router.post('/', async (req, res) => {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 60);
  try {
    const card = await Card.create({
      ...req.body,
      expiresAt,
    });

    res.status(201).json({
      id: card._id,
      link: `${process.env.SERVER_URL}/card/${card._id}`,
    });
  } catch (error) {
    console.error('ERROR:', error);

    res.status(500).json({
      message: 'Create card error',
    });
  }
});

//send card by id
router.get('/:id', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.json(card);
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).json({ message: 'Get card error' });
  }
});

// PATCH  /api/cards/:id/telegram
router.patch('/:id/telegram', async (req, res) => {
  try {
    const { telegramChatId } = req.body;

    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    card.telegramChatId = telegramChatId;
    await card.save();

    res.json({ message: 'Telegram chat ID updated' });
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).json({ message: 'Update telegram chat ID error' });
  }
});

export default router;
