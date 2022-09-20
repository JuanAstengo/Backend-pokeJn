/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pokemoves").del();
  await knex("poketypes").del();
  await knex("pokemon").del();
  await knex("moves").del();
  await knex("types").del();

  await knex("types").insert([
    { id: 1, nombre: "fire" }, //Chimchar.
    { id: 2, nombre: "ice" }, //Snover.
    { id: 3, nombre: "grass" }, //Turtwig, Torterra.
    { id: 4, nombre: "water" }, //Piplup, Empoleon.
    { id: 5, nombre: "rock" }, //Shieldon, Bastiodon.
    { id: 6, nombre: "ground" }, //Hippopotas, Hippowdon.
    { id: 7, nombre: "steel" }, //Bronzor, Bronzong.
    { id: 8, nombre: "fight" }, //Riolu, Lucario.
    { id: 9, nombre: "ghost" }, //Driflon, Drifblim
    { id: 10, nombre: "psychic" }, //Uxie, Mesprit.
    { id: 11, nombre: "poison" }, //Croagunk, Toxicroak.
    { id: 12, nombre: "dark" }, //Darkrai, weavile.
    { id: 13, nombre: "flying" }, //Starly, Staraptor.
    { id: 14, nombre: "dragon" }, //Gible, Garchomp.
    { id: 15, nombre: "bug" }, //Kricketot, Kricketune.
    { id: 16, nombre: "electric" }, //Shinx, Luxray.
    { id: 17, nombre: "normal" }, //Bidof, Bibarel.
  ]);

  await knex("moves").insert([
    { id: 1, nombre: "Fogonazo" },
    { id: 2, nombre: "Ascuas" },
    { id: 3, nombre: "Hielofuria" },
    { id: 4, nombre: "Ventisca" },
    { id: 5, nombre: "Hoja magica" },
    { id: 6, nombre: "Esporas" },
    { id: 7, nombre: "Placaje" },
    { id: 8, nombre: "Surf" },
    { id: 9, nombre: "Escaldar" },
    { id: 10, nombre: "Golpe roca" },
    { id: 11, nombre: "Antiaereo" },
    { id: 12, nombre: "Terremoto" },
    { id: 13, nombre: "Espinas" },
    { id: 14, nombre: "Garra metal" },
    { id: 15, nombre: "Bomba magnetica" },
    { id: 16, nombre: "Puntapie" },
    { id: 17, nombre: "Ultrapuño" },
    { id: 18, nombre: "Fuerza fantasmal" },
    { id: 19, nombre: "Pesadilla" },
    { id: 20, nombre: "Mordisco" },
    { id: 21, nombre: "Psiquico" },
    { id: 22, nombre: "Volar" },
    { id: 23, nombre: "Tajo aereo" },
    { id: 24, nombre: "Aliento de dragon" },
    { id: 25, nombre: "Cola de dragon" },
    { id: 26, nombre: "Drenadoras" },
    { id: 27, nombre: "Pin misil" },
    { id: 28, nombre: "Carga" },
    { id: 29, nombre: "Rayo" },
    { id: 30, nombre: "Corte" },
    { id: 31, nombre: "Placaje" },
    { id: 32, nombre: "Skate" },
    { id: 33, nombre: "Develop" },
  ]);

  await knex("pokemon").insert([
    {
      id: 1,
      nombre: "Charmander",
      peso: "5",
      altura: "1.05",
      descripcion: "Desc de charmander",
      img: "https://static.wikia.nocookie.net/espokemon/images/5/56/Charmander.png",
      hp: "1",
      atk: "1",
      def: "1",
      satk: "1",
      sdef: "1",
      spd: "1",
    },
    {
      id: 2,
      nombre: "Staraptor",
      peso: "10",
      altura: "1.50",
      descripcion: "Desc de Staraptor",
      img: "https://static.wikia.nocookie.net/espokemon/images/1/1f/Staraptor.png",
      hp: "2",
      atk: "2",
      def: "2",
      satk: "2",
      sdef: "2",
      spd: "2",
    },
    {
      id: 3,
      nombre: "Infernape",
      peso: "15",
      altura: "2",
      descripcion: "Desc del mejor pokimon de la historia",
      img: "https://static.wikia.nocookie.net/espokemon/images/1/17/Infernape.png",
      hp: "3",
      atk: "3",
      def: "3",
      satk: "3",
      sdef: "3",
      spd: "3",
    },
   
  ]);

  await knex("pokemoves").insert([
    { moves_id: 1, pokemon_id: 1 },
    { moves_id: 2, pokemon_id: 1 },
    { moves_id: 3, pokemon_id: 2 },
    { moves_id: 4, pokemon_id: 2 },
    { moves_id: 5, pokemon_id: 3 },
    { moves_id: 6, pokemon_id: 3 },

  ]);

  await knex("poketypes").insert([
    { types_id: 1, pokemon_id: 1 },
    { types_id: 4, pokemon_id: 1 },
    { types_id: 3, pokemon_id: 2 },
    { types_id: 4, pokemon_id: 2 },
    { types_id: 5, pokemon_id: 3 },
    { types_id: 6, pokemon_id: 3 },
 
  ]);
};
