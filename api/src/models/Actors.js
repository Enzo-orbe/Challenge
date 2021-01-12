const mongoose = require("mongoose");

const Actors = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  birthdate: {
    type: String,
  },
  nationality: {
    type: String,
  },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movies",
    },
  ],
  tvShow: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TvShow",
    },
  ],
});

module.exports = mongoose.model("Actors", Actors);
