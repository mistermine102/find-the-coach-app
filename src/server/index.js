const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Coach = require("./models/coach");

mongoose
  .connect("mongodb://0.0.0.0:27017/find-the-coach-app")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => console.log(e));

app.use(cors());

app.get("/", async (req, res) => {
  const coaches = await Coach.find();

  res.header("Content-Type", "Application/JSON");
  res.json(coaches);
});

app.listen(3000, () => {
  console.log("server listening");
});
