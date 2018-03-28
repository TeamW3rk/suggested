const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const cn = 'postgres://localhost:5432/suggested';
const db = pgp(cn);

const search = id => {
  return db.any(`SELECT * FROM suggestions JOIN restaurants ON (suggestions.suggested = restaurants.restid) WHERE suggestions.restid = $1`, id);
}

module.exports.search = search;

