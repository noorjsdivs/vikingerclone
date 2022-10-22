const express = require("express");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

// Middleware application
app.use(cors());
app.use(express.json());
dotenv.config();

// Database
mongoose.connect(process.env.MONGODB_CONNECTION_URL, () => {
  console.log("DB is connected");
});

// Routes
const port = process.env.PORT || 8000;
console.log(readdirSync("./routes"));

readdirSync("./routes").map((fileName) =>
  app.use("/", require("./routes/" + fileName))
);

// Port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
