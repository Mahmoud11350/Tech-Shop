import mongoose from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (global.mongoose && global.mongoose.conn) {
    console.log(`connected from previous`);
    return global.mongoose.conn;
  } else {
    const promise = mongoose.connect(process.env.MONGO_URL);
    global.mongoose = {
      conn: await promise,
      promise,
    };
    console.log(`newly connected`);
  }
}

// require("dotenv").config();
// const { connect } = require("mongoose");

// const connectDB = async () => await connect(process.env.MONGO_URL);

// module.exports = connectDB;
