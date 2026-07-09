// import { Router } from 'express';
// import { AnswerModel } from '../models/Answer.js';

// const router = Router();

// router.post('/:cardId/answers', async (req, res) => {
//   try {
//     const response = await AnswerModel.create({
//       ...req.body,
//     });

//     res.status(201).json(response);
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Cannot save response',
//     });
//   }
// });

// export default router;
