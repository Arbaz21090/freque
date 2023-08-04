/** @format */

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useunifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb is connected at ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
