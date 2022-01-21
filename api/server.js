const express = require('express');
const helmet = require('helmet');
const Recipes = require('./model')

const server = express();

// server.use(helmet());
server.use(express.json());
// server.use('/api', );

server.get('/api/recipes/:id', async (req, res, next) => {
    Recipes.getRecipeById(req.params.id)
      .then(recipe => {
        res.status(200).json(recipe)
      })
      .catch(err => {
        next(err)
      })
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
