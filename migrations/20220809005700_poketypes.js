/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('poketypes',(table)=>{
    table.integer('types_id').references('types.id')
    table.integer('pokemon_id').references('pokemon.id')
    
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('poketypes')

  
};