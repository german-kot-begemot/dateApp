import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';
import { connectDB } from './db.js';
import { setTelegramWebhook } from './services/telegramWebhook.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
setTelegramWebhook();

app.use('/api', apiRoutes);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
