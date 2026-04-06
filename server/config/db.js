import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`DB Error: ${error.message}`);
    // DO NOT process.exit so we don't crash loop if DB isn't up locally
    console.warn("Continuing without DB connection for now.");
  }
};

export default connectDB;
