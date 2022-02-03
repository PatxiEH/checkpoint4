const connection = require('../../db-config');
const Joi = require('joi');
const argon2 = require('argon2');

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (password) => {
  return argon2.hash(password, hashingOptions);
};

const verifyPassword = (password, hashedPassword) => {
  return argon2.verify(hashedPassword, password, hashingOptions);
};

const getall = () => {
  return connection.promise().query('select * from users');
};

const getByEmail = (email) => {
  return connection
    .promise()
    .query(`select * from users where email="${email}"`)
    .then(([result]) => result[0]);
};

const validateUser = (req, res, next) => {
  const errors = Joi.object({
    email: Joi.string().email().max(255).presence('required'),
    lastname: Joi.string().max(255).presence('optional'),
    firstname: Joi.string().max(100).presence('required'),
    password: Joi.string().min(5).max(10).presence('required'),
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    next(errors.message);
  } else {
    next();
  }
};

const create = async (email, lastname, firstname, password) => {
  const hashedPassword = await hashPassword(password);
  return connection
    .promise()
    .query(
      'INSERT INTO users (email, lastname, firstname, password) VALUES(?,?,?,?)',
      [email, lastname, firstname, hashedPassword]
    )
    .then(([result]) => {
      const id = result.insertId;
      return { id, email, lastname, firstname, hashedPassword };
    });
};

module.exports = {
  getByEmail,
  create,
  getall,
  hashPassword,
  validateUser,
  verifyPassword,
};
