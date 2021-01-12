const mongoose = require("mongoose");

const Director = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movies",
    },
  ],
  tvShow: {
    type: String,
    ref: "TvShow",
  },
});

module.exports = mongoose.model("Director", Director);
