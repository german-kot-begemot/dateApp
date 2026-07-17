import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';
import { connectDB } from './db.js';
import { setTelegramWebhook } from './services/telegramWebhook.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const clientBuildPath = path.join(__dirname, '../../client/dist');

app.use(express.static(clientBuildPath));
app.get(/^(?!\/api).*/, (_, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

const start = async () => {
  try {
    await Promise.all([connectDB(), setTelegramWebhook()]);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();
