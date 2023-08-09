const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./config/connectDB");

const userRoute = require("./routes/user");

app.use(express.json());

connectDB();


app.use("/api/user", userRoute);
const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});