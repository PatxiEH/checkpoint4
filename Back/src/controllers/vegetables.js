const vegetablesRouter = require('express').Router();
const Vegetable = require('../models/vegetable');

vegetablesRouter.get('/', (req, res) => {
  Vegetable.getall()
    .then((results) => res.json(results[0]))
    .catch((err) => res.sendStatus(404));
});

vegetablesRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  Vegetable.getById(id)
    .then((vegetable) => {
      vegetable ? res.json(vegetable) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(404));
});

vegetablesRouter.post('/', (req, res) => {
  const { name, season_id } = req.body;
  Vegetable.create(name, season_id)
    .then((newVegetable) => res.status(201).json(newVegetable))
    .catch((err) => res.sendStatus(404));
});

vegetablesRouter.put('/:id', (req, res) => {
  const { name, season_id } = req.body;
  const id = req.params.id;
  Vegetable.update(id, name, season_id)
    .then((vegetableUpdated) =>
      vegetableUpdated ? res.sendStatus(204) : res.sendStatus(404)
    )
    .catch((err) => res.sendStatus(404));
});

vegetablesRouter.delete('/:id', (req, res) => {
  Vegetable.deleteVegetable(req.params.id)
    .then((vegetableDeleted) =>
      vegetableDeleted ? res.sendStatus(204) : res.sendStatus(404)
    )
    .catch((err) => res.sendStatus(404));
});

vegetablesRouter.get('/seasons/:id', (req, res) => {
  const { id } = req.params;
  Vegetable.getVegetablesBySeason(id)
    .then((vegetables) => {
      vegetables ? res.json(vegetables) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(404));
});

module.exports = { vegetablesRouter };
