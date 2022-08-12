const express = require('express');
const router = express.Router();
const movieController= require("../controller/movieController")

router.get("/movie", movieController.displayMovies)
router.get("/movieData/:movieId", movieController.fetchMovies)
router.delete("/movie/:movieId",movieController.deleteMovies)


module.exports = router;