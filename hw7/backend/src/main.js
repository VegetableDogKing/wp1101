import mongoose from 'mongoose';
import express from 'express'; 
import dotenv from "dotenv-defaults";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((res) => console.log("mongo db connection created"));
  
