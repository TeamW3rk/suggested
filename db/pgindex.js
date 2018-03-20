const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const cn = 'postgres://localhost:5432/suggested';
const db = pgp(cn);

const search = (id, column = '*') => {
  return db.any(`SELECT ${column} FROM restaurants WHERE restid = $1`, id).then(data => data[0]);
}

module.exports.search = search;

