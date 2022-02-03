const connection = require('../../db-config');

const getall = () => {
  return connection.promise().query('select * from fruits');
};

const getById = (id) => {
  return connection
    .promise()
    .query(`select * from fruits where id_fruit="${id}"`)
    .then(([result]) => result[0]);
};

const create = (name, season_id) => {
  return connection
    .promise()
    .query('INSERT INTO fruits (name, season_id) VALUES(?,?)', [
      name,
      season_id,
    ])
    .then(([result]) => {
      const id = result.insertId;
      return { id, name, season_id };
    });
};

const update = (id, name, season_id) => {
  let sql = 'UPDATE fruits SET';
  const sqlValues = [];
  let oneValue = false;

  if (name) {
    sql += ' name = ? ';
    sqlValues.push(name);
    oneValue = true;
  }

  if (season_id) {
    sql += oneValue ? ', season_id = ? ' : ' season_id = ? ';
    sqlValues.push(season_id);
    oneValue = true;
  }

  sql += ' WHERE id_fruit = ?';
  sqlValues.push(id);

  return connection
    .promise()
    .query(sql, sqlValues)
    .then(([results]) => results.affectedRows === 1);
};

const deleteFruit = (id) => {
  return connection
    .promise()
    .query('DELETE FROM fruits WHERE id_fruit = ?', [id])
    .then(([results]) => results.affectedRows === 1);
};

const getFruitsBySeason = (id) => {
  return connection
    .promise()
    .query(`select * from fruits where season_id="${id}"`)
    .then(([result]) => result);
};

module.exports = {
  getall,
  getById,
  create,
  update,
  deleteFruit,
  getFruitsBySeason,
};
