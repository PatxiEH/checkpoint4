const { vegetablesRouter } = require('./vegetables');
const { fruitsRouter } = require('./fruits');
const { seasonsRouter } = require('./seasons');
const { usersRouter } = require('./users');
const { authRouter } = require('./auth');

const setupRoutes = (app) => {
  app.use('/api/vegetables', vegetablesRouter);
  app.use('/api/fruits', fruitsRouter);
  app.use('/api/seasons', seasonsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/login', authRouter);
};

module.exports = setupRoutes;
