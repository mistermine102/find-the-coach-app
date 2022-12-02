const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Coach = require("./models/coach");

const coaches = [
  { id: '1', name: "Maximillian Schwarzmuller", badges: ["frontend", "backend", "career"], rate: 40 },
  { id: '2', name: "Vilhelm Kyōko", badges: ["career", "backend"], rate: 26 },
  { id: '3', name: "Dominique Jena", badges: ["frontend"], rate: 20 },
  { id: '4', name: "Eros Tyra", badges: ["backend"], rate: 18 },
  { id: '5', name: "Luiz Mahir", badges: ["frontend", "career"], rate: 30 },
]
mongoose
  .connect("mongodb://0.0.0.0:27017/find-the-coach-app")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => console.log(e));

app.use(cors());

app.get("/", async (req, res) => {
  //const coaches = await Coach.find();

  res.header("Content-Type", "Application/JSON");
  res.json(coaches);
});

app.listen(3000, () => {
  console.log("server listening");
});
