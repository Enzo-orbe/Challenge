const express = require("express");
const router = express();
const TvShow = require("../models/TvShow");

//create tvShow
router.post("/", async (req, res) => {
  const {
    name,
    channel,
    director,
    actors,
    episodes,
    televisionHost,
  } = req.body;
  try {
    const tvshow = await TvShow.create({
      name,
      channel,
      director,
      actors,
      episodes,
      televisionHost,
    });
    if (!name) {
      return res.status(400).send("Missing required fields");
    }
    res.json(tvshow);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

//get all tvShow
router.get("/", async (req, res) => {
  try {
    const tvShows = await TvShow.find();
    if (!tvShows) {
      res.send("There is no Tv Shows in the database");
    } else {
      res.json({ tvShows });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

//get a tvSHow by his id and information of the Director
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tvshow = await TvShow.findById(id).populate({
      path: "director",
      select: "name lastName",
    });
    if (!tvshow) {
      res.send("There is no tv show in the database");
    } else {
      res.json({ tvshow });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

module.exports = router;
