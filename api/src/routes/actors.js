const express = require("express");
const router = express();
const Actors = require("../models/Actors");
const Movies = require("../models/Movies");

//Create an actor and add it to a movie
router.post("/:_id", async (req, res) => {
  const { _id } = req.params;
  const { name, lastName, age, birthdate, movies, tvShow } = req.body;
  try {
    const movie = await Movies.findById(_id);
    if (!name || !lastName) {
      return res.status(400).send("Missing required fields");
    } else {
      const actor = await Actors.create({
        name,
        lastName,
        age,
        birthdate,
        movies,
        tvShow,
      });
      const result = movie.actors.push(actor);
      await movie.save();
      res.json(actor);
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
