const express = require("express");
const router = express();
const Movies = require("../models/Movies");

//get all  movies and sort
router.get("/", async (req, res) => {
  try {
    let movies = await Movies.find().sort("title");
    if (!movies) {
      return res.send({ msg: "There is no movie in the database" });
    } else {
      res.json({ movies: movies });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

//get movie by Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let movie = await Movies.findById({ _id: id });
    if (!movie) {
      return res.send({ msg: "This movie does not exist in the database" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

//create movie
router.post("/", async (req, res) => {
  const { title, genre, premiere, actors, director } = req.body;
  try {
    let movie = await Movies.create({
      title: title,
      genre: genre,
      premiere: premiere,
      actors: actors,
      director: director,
    });
    if (!title) return res.send("The title is required");
    res.json({ msg: "Movie Created" });
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

module.exports = router;
