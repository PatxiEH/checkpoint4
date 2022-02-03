const fruitsRouter = require('express').Router();
const Fruit = require('../models/fruit');

fruitsRouter.get('/', (req, res) => {
  Fruit.getall()
    .then((results) => {
      res.json(results[0]);
    })
    .catch((err) => res.sendStatus(404));
});

fruitsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  Fruit.getById(id)
    .then((fruit) => {
      fruit ? res.json(fruit) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(404));
});

fruitsRouter.post('/', (req, res) => {
  const { name, season_id } = req.body;
  Fruit.create(name, season_id)
    .then((newFruit) => res.status(201).json(newFruit))
    .catch((err) => res.sendStatus(404));
});

fruitsRouter.put('/:id', (req, res) => {
  const { name, season_id } = req.body;
  const id = req.params.id;
  Fruit.update(id, name, season_id)
    .then((fruitUpdated) =>
      fruitUpdated ? res.sendStatus(204) : res.sendStatus(404)
    )
    .catch((err) => res.sendStatus(404));
});

fruitsRouter.delete('/:id', (req, res) => {
  Fruit.deleteFruit(req.params.id)
    .then((fruitUpdated) =>
      fruitUpdated ? res.sendStatus(204) : res.sendStatus(404)
    )
    .catch((err) => res.sendStatus(404));
});

fruitsRouter.get('/seasons/:id', (req, res) => {
  const { id } = req.params;
  Fruit.getFruitsBySeason(id)
    .then((fruits) => {
      fruits ? res.json(fruits) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(404));
});

module.exports = { fruitsRouter };
