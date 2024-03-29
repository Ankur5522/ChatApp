import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to mongoDb", error.message);
  }
}

export default connectToMongoDB;