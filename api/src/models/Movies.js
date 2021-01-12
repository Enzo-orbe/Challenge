const mongoose = require("mongoose");

const Movies = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
  },
  premiere: {
    type: Number,
  },
  actors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actors",
    },
  ],
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movies",
  },
});

module.exports = mongoose.model("Movies", Movies);
