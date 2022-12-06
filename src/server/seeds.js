const mongoose = require("mongoose");
const Coach = require("./models/coach");

mongoose
  .connect("mongodb://0.0.0.0:27017/find-the-coach-app")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => console.log(e));

const coaches = [
  { name: "Szymon Jarosz", badges: ["frontend", "backend"], rate: 12 },
  { name: "Maximillian Schwarzmuller", badges: ["frontend", "backend", "career"], rate: 40 },
  { name: "Vilhelm Kyōko", badges: ["career", "backend"], rate: 26 },
  { name: "Dominique Jena", badges: ["frontend"], rate: 20 },
  { name: "Eros Tyra", badges: ["backend"], rate: 18 },
  { name: "Luiz Mahir", badges: ["frontend", "career"], rate: 30 },
];

Coach.insertMany(coaches).then((res) => console.log(res));

Coach.find()
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
