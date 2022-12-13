const express = require("express");
const cors = require("cors");
const app = express();
// const mongoose = require("mongoose");
// const Coach = require("./models/coach");

const coaches = [
  { id: '1', name: "Maximillian Schwarzmuller", badges: ["frontend", "backend", "career"], rate: 40 },
  { id: '2', name: "Vilhelm Kyōko", badges: ["career", "backend"], rate: 26 },
  { id: '3', name: "Dominique Jena", badges: ["frontend"], rate: 20 },
  { id: '4', name: "Eros Tyra", badges: ["backend"], rate: 18 },
  { id: '5', name: "Luiz Mahir", badges: ["frontend", "career"], rate: 30 },
]

app.use(cors());

app.get("/", async (req, res) => {
  //const coaches = await Coach.find();
  console.log("RECEIVED GET REQUEST")
  res.header("Content-Type", "Application/JSON");
  res.json(coaches);
});

app.listen(3000, () => {
  console.log("server listening");
});
