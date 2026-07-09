import { Router } from 'express';
import answerRoutes from './answer.routes.js';
import cardRoutes from './card.routes.js';
import telegramRoutes from './telegram.routes.js';

const router = Router();
router.use('/cards', cardRoutes);
router.use('/answers', answerRoutes);
router.use('/telegram', telegramRoutes);

export default router;
