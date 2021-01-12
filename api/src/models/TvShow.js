const mongoose = require("mongoose");

const TvShow = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Director",
  },
  // actors: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Actors",
  //   },
  // ],
  actors: {
    type: String,
  },
  episodes: {
    type: Number,
  },
  televisionHost: {
    type: String,
  },
});

module.exports = mongoose.model("TvShow", TvShow);
