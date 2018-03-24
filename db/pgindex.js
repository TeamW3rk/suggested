const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const cn = 'postgres://localhost:5432/suggested';
const db = pgp(cn);

const search = id => {
  return db.any(`SELECT * FROM restaurants JOIN suggestions ON (suggestions.restid = restaurants.restid) WHERE restid = $1`, id);
}

module.exports.search = search;

