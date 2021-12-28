import mongoose from "mongoose";
import { dataInit } from "./upload.js";

import "dotenv-defaults/config.js";

async function connect() {
  // TODO 1.1 Connect your MongoDB

const port = process.env.PORT || 5000

mongoose.connect(
  process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(()=> console.log("mongo db connection created"));

 dataInit() ;

}

export default { connect };