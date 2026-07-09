import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import cardRoutes from './routes/card.routes.js';
// import answerRoutes from './routes/answer.routes.js';
import { connectDB } from './db.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/cards', cardRoutes);
// app.use('/api/answers', answerRoutes);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
