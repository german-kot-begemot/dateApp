import express from 'express';
import { Card } from '../models/Card.js';

// router.post('/', async (req, res) => {
//   const card = await Card.create(req.body);

//   res.json({
//     id: card._id,
//     link: `http://localhost:5173/card/${card._id}`,
//   });
// });

// // получить открытку
// router.get('/:id', async (req, res) => {
//   const card = await Card.findById(req.params.id);
//   res.json(card);
// });

// // обновить ответы
// router.put('/:id', async (req, res) => {
//   const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.json(card);
// });

// создать открытку
// router.post('/', async (req, res) => {
//   try {
//     const card = await Card.create(req.body);
//     res.status(201).json({
//       id: card._id,
//       link: `http://localhost:5173/card/${card._id}`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Create card error',
//     });
//     throw error;
//   }
// });

// export default router;
const router = express.Router();
router.post('/', async (req, res) => {
  console.log('BODY:', req.body);

  try {
    const card = await Card.create(req.body);

    console.log('CREATED:', card);

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

export default router;
