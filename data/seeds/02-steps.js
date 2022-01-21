exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        { 
            step_number: 1, 
            step_instructions: 'Grab pb',
            recipe_id: 1
        },
        {
            step_number: 2, 
            step_instructions: 'grab bread slices',
            recipe_id: 1  
        },
        {
            step_number: 3, 
            step_instructions: 'put together',
            recipe_id: 1  
        },
        {
            step_number: 2, 
            step_instructions: 'Grab Apple',
            recipe_id: 2  
        },
        {
            step_number: 2, 
            step_instructions: 'mmmmmm applee',
            recipe_id: 2 
        }
    ]);
};