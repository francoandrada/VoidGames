const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require('../db.js');

// Receive the data collected from the controlled form of the videogame creation path by body.
// Create a video game in the database

router.post('/', async (req, res) => {
  const {
    name,
    description,
    released,
    rating,
    platforms,
    genres,
  } = req.body;

  let platformString = platforms.join(', ')

  let gameCreated = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms: platformString,
  })

  genres.forEach(async (G) => {
    let genresGame = await Genre.findOne({ where: { name: G } })
    gameCreated.addGenre(genresGame)
  })
  res.send('Videogame created successfully!'
  )
});


module.exports = router;