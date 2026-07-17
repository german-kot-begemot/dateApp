import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error('MONGO_URL is not defined');
    }
    await mongoose.connect(mongoUrl);
  } catch (err) {
    console.error('DB error', err);
    process.exit(1);
  }
};
