const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Coach = require("./models/coach");
const { json } = require("express");

const coaches = [
  {
    id: "1",
    name: "Maximillian Schwarzmuller",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores atque illum deleniti quibusdam, adipisci placeat non numquam quisquam recusandae laudantium repudiandae quam nemo accusamus perspiciatis architecto iste dolores excepturi.",
    badges: ["frontend", "backend", "career"],
    rate: 40,
  },
  {
    id: "2",
    name: "Vilhelm Kyōko",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores atque illum deleniti quibusdam, adipisci placeat non numquam quisquam recusandae laudantium repudiandae quam nemo accusamus perspiciatis architecto iste dolores excepturi.",
    badges: ["career", "backend"],
    rate: 26,
  },
  {
    id: "3",
    name: "Dominique Jena",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores atque illum deleniti quibusdam, adipisci placeat non numquam quisquam recusandae laudantium repudiandae quam nemo accusamus perspiciatis architecto iste dolores excepturi.",
    badges: ["frontend"],
    rate: 20,
  },
  {
    id: "4",
    name: "Eros Tyra",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores atque illum deleniti quibusdam, adipisci placeat non numquam quisquam recusandae laudantium repudiandae quam nemo accusamus perspiciatis architecto iste dolores excepturi.",
    badges: ["backend"],
    rate: 18,
  },
  {
    id: "5",
    name: "Luiz Mahir",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores atque illum deleniti quibusdam, adipisci placeat non numquam quisquam recusandae laudantium repudiandae quam nemo accusamus perspiciatis architecto iste dolores excepturi.",
    badges: ["frontend", "career"],
    rate: 30,
  },
];

const requests = [
  {
    id: "1",
    receiverId: "1",
    senderId: "3",
    message: "Dummy request",
  },
];

//mongoose
//  .connect("mongodb://0.0.0.0:27017/find-the-coach-app")
//  .then(() => {
//    console.log("Connected to the database");
//  })
//  .catch((e) => console.log(e));

app.use(cors());
app.use(json());

app.get("/coaches", async (req, res) => {
  //const coaches = await Coach.find();

  res.header("Content-Type", "Application/JSON");
  res.json(coaches);
});

app.post("/coaches", (req, res) => {
  coaches.push(req.body);
  res.json("Coach added");
});

app.get("/requests", (req, res) => {
  res.header("Content-Type", "Application/JSON");
  res.json(requests);
});

app.listen(3000, () => {
  console.log("server listening");
});
