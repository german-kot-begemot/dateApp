import express from 'express';
import { Card } from '../models/Card.js';
import { AnswerModel } from '../models/Answer.js';

// создать открытку

const router = express.Router();

//create card
router.post('/', async (req, res) => {
  try {
    const card = await Card.create(req.body);

    res.status(201).json({
      id: card._id,
      link: `/card/${card._id}`,
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

// save recipient's answers for a card
router.post('/:id/answers', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    const { selectedFood, selectedDate, selectedTime, answer } = req.body;

    if (!selectedFood?.length || !selectedDate || !selectedTime || !answer) {
      return res.status(400).json({ message: 'Не все поля заполнены' });
    }

    const savedAnswer = await AnswerModel.create({
      cardId: req.params.id,
      selectedFood,
      selectedDate,
      selectedTime,
      answer,
    });

    res.status(201).json({
      id: savedAnswer._id,
      message: 'Ответы сохранены',
    });
  } catch (error) {
    console.error('ERROR saving answers:', error);
    res.status(500).json({ message: 'Save answers error' });
  }
});

export default router;
