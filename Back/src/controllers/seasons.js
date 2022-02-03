const seasonsRouter = require('express').Router();
const Season = require('../models/season');

seasonsRouter.get('/', (req, res) => {
  Season.getall()
    .then((results) => {
      res.json(results[0]);
    })
    .catch((err) => res.sendStatus(404));
});

seasonsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  Season.getById(id)
    .then((season) => {
      season ? res.json(season) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(404));
});

module.exports = { seasonsRouter };
