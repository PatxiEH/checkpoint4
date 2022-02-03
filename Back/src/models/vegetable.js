const connection = require('../../db-config');

const getall = () => {
  return connection.promise().query('select * from vegetables');
};

const getById = (id) => {
  return connection
    .promise()
    .query(`select * from vegetables where id_vegetable="${id}"`)
    .then(([result]) => result[0]);
};

const create = (name, season_id) => {
  return connection
    .promise()
    .query('INSERT INTO vegetables (name, season_id) VALUES(?,?)', [
      name,
      season_id,
    ])
    .then(([result]) => {
      const id = result.insertId;
      return { id, name, season_id };
    });
};

const update = (id, name, season_id) => {
  let sql = 'UPDATE vegetables SET';
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

const deleteVegetables = (id) => {
  return connection
    .promise()
    .query('DELETE FROM vegetables WHERE id_vegetable = ?', [id])
    .then(([results]) => results.affectedRows === 1);
};

const getVegetablesBySeason = (id) => {
  return connection
    .promise()
    .query(`select * from vegetables where season_id="${id}"`)
    .then(([result]) => result);
};

module.exports = {
  getall,
  getById,
  create,
  update,
  deleteVegetables,
  getVegetablesBySeason,
};
