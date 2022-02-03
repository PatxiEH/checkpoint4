const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', (req, res) => {
  User.getall()
    .then((results) => {
      res.json(results[0]);
    })
    .catch((err) => res.sendStatus(404));
});

usersRouter.post('/', User.validateUser, (req, res) => {
  const { email, lastname, firstname, password } = req.body;
  console.log(email, lastname, firstname, password);
  User.create(email, lastname, firstname, password)
    .then((newUser) => res.status(201).json(newUser))

    .catch((err) => res.sendStatus(404));
});

module.exports = { usersRouter };
