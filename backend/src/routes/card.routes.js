import express from 'express';
import { Card } from '../models/Card.js';

const router = express.Router();

// создать открытку
router.post('/', async (req, res) => {
  const card = await Card.create(req.body);

  res.json({
    id: card._id,
    link: `http://localhost:5173/card/${card._id}`,
  });
});

// получить открытку
router.get('/:id', async (req, res) => {
  const card = await Card.findById(req.params.id);
  res.json(card);
});

// обновить ответы
router.put('/:id', async (req, res) => {
  const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(card);
});

export default router;
