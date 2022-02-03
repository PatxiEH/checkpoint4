const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', (req, res) => {
  User.getall()
    .then((results) => {
      res.json(results[0]);
    })
    .catch((err) => res.sendStatus(404));
});

usersRouter.post('/', (req, res) => {
  const { email } = req.body;
  User.getByEmail(email)
    .then((user) => {
      user ? res.json(user) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(404));
});

usersRouter.post('/', User.validateUser, (req, res) => {
  const { email, name, firstname, password } = req.body;

  User.create(email, name, firstname, password)
    .then((newUser) => res.status(201).json(newUser))

    .catch((err) => res.sendStatus(404));
});

module.exports = { usersRouter };
