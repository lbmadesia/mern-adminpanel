const mongoose = require('mongoose');
const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
         dbName: process.env.DATABASE_NAME,
         useUnifiedTopology: true,
         useNewUrlParser: true
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   }
   catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
   }
}

module.exports = connectDB;