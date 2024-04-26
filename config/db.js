const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Connected on" + connection.connection.host);
  } catch (e) {
    console.log("Mongo Connected on" + e);
  }
};

module.exports = { dbConnect };
