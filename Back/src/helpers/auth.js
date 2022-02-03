const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'KEY_FOR_TOKEN';

const calculateToken = (email = '', id = 0) => {
  return jwt.sign({ email: email, id: id }, PRIVATE_KEY);
};

module.exports = { calculateToken };
