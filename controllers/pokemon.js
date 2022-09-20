const configDB = require("../knexfile");
const knex = require("knex")(configDB.development);

// const nombre = async (parametros) => {
//  await etc
// }

const getAll = async () => {
  let listadoFinal = [];
  const arrayPokemon = await knex("pokemon")
    .select("nombre", "id", "img")
    .then((res) => {
      return res;
    });
  listadoFinal = await Promise.all(
    // array.map((iteracion) => {

    // })

    arrayPokemon.map(async (pokemon) => ({
      ...pokemon,
      types: await knex
        .select("types.nombre")
        .from("types")
        .innerJoin("poketypes", "types.id", "poketypes.types_id")
        .innerJoin("pokemon", "poketypes.pokemon_id", "pokemon.id")
        .where("pokemon.id", pokemon.id)
        .then((res) => {
          return res;
        }),
    }))
  );
  return listadoFinal;
};

const getPokemonById = async (id) => {
  let pokemonFinal = {
    datos_pokemon: {},
    movimientos: [],
    tipos: [],
    stats: [],
  };
  await knex("pokemon")
    .where("pokemon.id", id)
    .select(
      "nombre",
      "pokemon.id",
      "peso",
      "altura",
      "descripcion",
      "img",
      "hp",
      "atk",
      "def",
      "satk",
      "sdef",
      "spd"
    )
    .then((pokemon_array) => {
      return (pokemonFinal["datos_pokemon"] = pokemon_array[0]);
    });
  await knex
    .select("moves.nombre")
    .from("moves")
    .innerJoin("pokemoves", "moves.id", "pokemoves.moves_id")
    .innerJoin("pokemon", "pokemoves.pokemon_id", "pokemon.id")
    .where("pokemon.id", pokemonFinal.datos_pokemon.id)
    .then((movesOfPokemos) => {
      movesOfPokemos.map((movimiento) => {
        pokemonFinal.movimientos.push(movimiento);
      });
      return pokemonFinal;
    });
  await knex
    .select("types.nombre")
    .from("types")
    .innerJoin("poketypes", "types.id", "poketypes.types_id")
    .innerJoin("pokemon", "poketypes.pokemon_id", "pokemon.id")
    .where("pokemon.id", pokemonFinal.datos_pokemon.id)
    .then((movesOfPokemos) => {
      movesOfPokemos.map((tipo) => {
        pokemonFinal.tipos.push(tipo);
      });
      return pokemonFinal;
    });
  await knex("pokemon")
    .select("hp", "atk", "def", "satk", "sdef", "spd")
    .where("pokemon.id", pokemonFinal.datos_pokemon.id)
    .then((stat) => {
      console.log(stat);
      const keyNames = Object.keys(stat[0]);
      pokemonFinal.stats.push({
        nombre: keyNames[0],
        value: stat[0].hp,
      });
      pokemonFinal.stats.push({
        nombre: keyNames[1],
        value: stat[0].atk,
      });
      pokemonFinal.stats.push({
        nombre: keyNames[2],
        value: stat[0].def,
      });
      pokemonFinal.stats.push({
        nombre: keyNames[3],
        value: stat[0].satk,
      });
      pokemonFinal.stats.push({
        nombre: keyNames[4],
        value: stat[0].sdef,
      });
      pokemonFinal.stats.push({
        nombre: keyNames[5],
        value: stat[0].spd,
      });

      return pokemonFinal;
    });
  console.log(pokemonFinal);
  return pokemonFinal;
};

const createPokemon = (body) => {
  return knex("pokemon").insert(body);
};

const getUserByMail = (mail) => {
  return knex("user").where("mail", mail).select("mail");
};

const deleteUser = (mail) => {
  return knex("user").where("mail", mail).del(body);
};

module.exports = {
  getAll,
  getPokemonById,
  getUserByMail,
  createPokemon,
  deleteUser,
};
