// Importar todos los routers
const fetch = require('node-fetch');
const { Router } = require('express');
const router = Router();
const { Genre } = require('../db.js');
const APIKEY = '9d5be115ecb6458db68b5cc2a529dc8d';


// Get all possible types of videogame genres. In the first instance it brings them from RAWG
// and save them in the DB and then use them from there

router.get('/', function (req, res) {

    let gen = [];
    fetch(`https://api.rawg.io/api/genres?key=${APIKEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            data && data.results.forEach(b => {
                Genre.findOrCreate({
                    where: {
                        name: b.name
                    }
                })
            })
        })
        .then(async () => {
            let generos = await Genre.findAll();
            res.json(generos);
        })
        .catch(err => console.error(err));

});

module.exports = router;