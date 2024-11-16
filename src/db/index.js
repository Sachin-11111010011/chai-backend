import mongoose, { connect } from "mongoose";

import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`\n MongoDB connected !! DB HOST : $')
      {connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGO DB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
