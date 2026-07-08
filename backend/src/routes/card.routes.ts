import express from 'express';
import { Card } from '../models/Card.js';

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

export default router;
