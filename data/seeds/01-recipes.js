exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        {recipe_name: 'PB & J'}, 
        {recipe_name: 'Apples'}
    ]);
};