const mongoose = require("mongoose");

const coachSchema = mongoose.Schema({
  name: String,
  badges: Array,
  rate: Number,
});

module.exports =  mongoose.model("Coach", coachSchema)
