const express = require("express");
const router = express.Router();
const pokeQueries = require("../controllers/pokemon");

router.get("/", async (req, resp) => {
  const pokemon = await pokeQueries.getAll();
  console.log("pokemon:", pokemon);
  resp.json(pokemon);
});

router.get("/:id", async (req, resp) => {
  const id = req.params.id;
  const poke = await pokeQueries.getPokemonById(id);
  resp.json(poke);
});

router.post("/crear", async (req, resp) => {
  const body = req.body;
  const newPoke = await pokeQueries.createPokemon(body);
  resp.json(newPoke);
});

module.exports = router;
