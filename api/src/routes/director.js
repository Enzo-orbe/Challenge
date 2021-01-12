const express = require("express");
const router = express();
const Director = require("../models/Director");

//create the director, the name and lastName are required, add movies or television show is not required
router.post("/", async (req, res) => {
  const { name, lastName, movies, tvShow } = req.body;
  try {
    const director = await Director.create({
      name,
      lastName,
      movies,
      tvShow,
    });
    if (!name || !lastName) {
      return res.status(400).send("Missing required fields");
    }
    res.json(director);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

//get all directors
router.get("/", async (req, res) => {
  try {
    const directors = await Director.find();
    if (!directors) {
      res.send("There is no directors in the database");
    } else {
      res.json({ directors });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

//get a director by his id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const director = await Director.findById(id);
    if (!director) {
      res.send("There is no director in the database");
    } else {
      res.json({ director });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

module.exports = router;
