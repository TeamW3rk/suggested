const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const cn = 'postgres://localhost:5432/suggested';
const db = pgp(cn);
const faker = require('faker');
const numRests = 10000000;

var randomizeNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createName = function() {
  var first = faker.lorem.word();
  var name = faker.lorem.word();
  return first[0].toUpperCase() + first.slice(1) + ' ' + name[0].toUpperCase() + name.slice(1);
}

 const makeRestaurant = (num) => {
  var type = ['American', 'Thai', 'Asian', 'Japanese', 'Italian', 'Mexican', 'Indian', 'Russian', 'Hawaiian'];

  var images = ['1.jpeg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
                '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg'];
  
  for (var i = 0; i < images.length; i++) {
    images[i] = '/images/' + images[i];
  }

  return {
    restid: num,
    name: createName(),
    image: images[randomizeNumber(0, images.length - 1)],
    stars: randomizeNumber(1, 5),
    type: type[randomizeNumber(0, type.length - 1)],
    location: faker.address.city().slice(0, 11),
    price: randomizeNumber(1, 5),
    amountbooked: randomizeNumber(0, 200)
  }
 }

 const cs = new pgp.helpers.ColumnSet(
  ['restid', 'name', 'image', 'stars', 'type', 'location', 'price', 'amountbooked'],
  {table: 'restaurants'},
  ); 

 const makeRez = async () => {
   let results = [];
   for (let i = 1; i <= 10000000; i++) {
     results.push(makeRestaurant(i));
     if (i % 10000 === 0) {
       await db.none(pgp.helpers.insert(results, cs));
       results = [];
     }
   }
 }

 const createTable = async () => {
   console.log('START', new Date());
    await db.none(
      `CREATE TABLE restaurants(
        restid INT,
        name TEXT,
        image TEXT,
        stars INT,
        type TEXT,
        location TEXT,
        price INT,
        amountbooked TEXT
      );`);
    await makeRez();
    await db.none(
      `CREATE INDEX indy ON RESTAURANTS (restid);`
    );
    console.log('END', new Date());
 }

 createTable();

 