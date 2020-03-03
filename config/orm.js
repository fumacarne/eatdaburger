const db = require('./connection.js');

async function selectAll(table) {
  const [rows] = await db
    .promise()
    .query('SELECT * FROM ??;', [table]);
  return rows || [];
}

async function createAll(table, data) {
  const res = await db
    .promise()
    .query('INSERT INTO ?? SET ?', [table, data]);
  return res;
}

async function updateAll(table, data, id) {
  const res = await db
    .promise()
    .query('UPDATE ?? SET ? WHERE id = ?;', [table, data, id]);
  return res;
}

module.exports = { selectAll, createAll, updateAll }
