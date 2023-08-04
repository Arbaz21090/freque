/** @format */

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 5000;

const connectDatabase = require("./config/database.js");
dotenv.config({ path: "config/config.env" });
app.use(express.json());
connectDatabase();

app.use("/api/v1/user", require("./routes/userRoutes"));

app.listen(process.env.PORT, () => {
  console.log(` server is running on port ${process.env.PORT}`);
});
