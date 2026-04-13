const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tripcraft';
  if (!uri) {
    console.error('❌ MongoDB Error: MONGO_URI is not set in .env or fallback');
    return;
  }

  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
      });
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return;
    } catch (error) {
      attempts += 1;
      console.error(`❌ MongoDB Error (attempt ${attempts}/${maxAttempts}): ${error.message}`);
      if (attempts >= maxAttempts) {
        console.error('❌ MongoDB: max attempts reached. Check Atlas whitelist and URI config.');
        process.exit(1);
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
};

module.exports = connectDB;
