const res = require('express/lib/response');
const db = require('../data/db-config');

async function getRecipeById(recipe_id) {
    const rows = await db('recipes as re')
        .select('re.*', 'st.step_id', 'step_number', 'step_instructions', 'sten.ingredient_id', 'ingredient_name', 'quantity')
        .leftJoin('steps as st', 'st.recipe_id', 're.recipe_id')
        .leftJoin('step_ingredients as sten', 'sten.step_id', 'st.step_id')
        .leftJoin('ingredients as ing', 'ing.ingredient_id', 'sten.ingredient_id')
        .where('re.recipe_id', recipe_id)
        .groupBy('st.step_id') 
       

    const currentTime = new Date();
    const result = {
        recipe_id: recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: currentTime,
        steps: []
    }
    
    rows.forEach(async (row) => {
       
        
        result.steps.push({
            step_id: row.step_id,
            step_number: row.step_number,
            step_instructions: row.step_instructions,
            ingredients: [{
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity
            }]
        })
        

    })
    
    
  
        return result
}

module.exports = {
    getRecipeById,
}
