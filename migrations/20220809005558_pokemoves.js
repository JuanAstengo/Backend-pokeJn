/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('pokemoves',(table)=>{
    table.integer('moves_id').references('moves.id')
    table.integer('pokemon_id').references('pokemon.id')
    
  })
 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pokemoves')
 
  
};