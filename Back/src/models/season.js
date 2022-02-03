const connection = require('../../db-config');

const getall = () => {
  return connection.promise().query('select * from seasons');
};

const getById = (id) => {
  return connection
    .promise()
    .query(`select * from seasons where id_season="${id}"`)
    .then(([result]) => result[0]);
};

module.exports = {
  getall,
  getById,
};
