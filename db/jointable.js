const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const cn = 'postgres://localhost:5432/suggested';
const db = pgp(cn);

const randomizeNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cs = new pgp.helpers.ColumnSet(
  ['restid', 'suggested'],
  {table: 'suggestions'},
  ); 

const saveJoin = async () => {
  let results = [];
  let counter = 0;
  for (let i = 1; i <= 60000000; i++) {
    if ((i - 1) % 6 === 0) {
      counter++;
    }
    results.push({restid: counter, suggested: randomizeNumber(1, 10000000)});
    if (i % 10000 === 0) {
      await db.none(pgp.helpers.insert(results, cs));
      results = [];
    }
  }
}

const createJoin = async () => {
  console.log('START', new Date());
   await db.none(
     `CREATE TABLE suggestions(
       restid INT,
       suggested INT
     );`);
   await saveJoin();
   await db.none(
     `CREATE INDEX sugg ON SUGGESTIONS (restid);`
   );
   await db.none(
    `CREATE INDEX sugg1 ON SUGGESTIONS (suggested);`
  );
   console.log('END', new Date());
}

createJoin();