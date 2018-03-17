const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const cn = 'postgres://localhost:5432/suggested';
const db = pgp(cn);
const faker = require('faker');
const numRests = 10000000;


db.connect()
  .then(function(obj) {
    console.log('im in');
    obj.done();
  })
  .catch(function(error) {
    console.log('ERROR:', error.message);
  })


var randomizeNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createName = function() {
  var first = faker.lorem.word();
  var name = faker.lorem.word();
  return first[0].toUpperCase() + first.slice(1) + ' ' + name[0].toUpperCase() + name.slice(1);
}

const createSuggestions = () => {
  const results = [];
  for (let i = 0; i < 6; i++) {
    results.push(randomizeNumber(1, numRests));
  }
  return results;
}

 const makeRestaurant = (num) => {
  var type = ['American', 'Thai', 'Asian', 'Japanese', 'Italian', 'Mexican', 'Indian', 'Russian', 'Hawaiian'];

  var images = ['1.jpeg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
                '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg'];
  
  for (var i = 0; i < images.length; i++) {
    images[i] = '/images/' + images[i];
  }

  return {
    name: createName(),
    image: images[randomizeNumber(0, images.length - 1)],
    stars: randomizeNumber(1, 5),
    type: type[randomizeNumber(0, type.length - 1)],
    location: faker.address.city().slice(0, 11),
    price: randomizeNumber(1, 5),
    amountbooked: randomizeNumber(0, 200),
    suggestedrestaurants: createSuggestions()
  }
 }

 const cs = new pgp.helpers.ColumnSet(
  ['name', 'image', 'stars', 'type', 'location', 'price', 'amountbooked', 'suggestedrestaurants'],
  {table: 'restaurants'},
  ); 

 const makeRez = () => {
   const results = [];
   for (let i = 0; i < 10000; i++) {
     results.push(makeRestaurant(i));
   }
   return results;
 }

 const insertData = async (data, cs) => {
  await db.none(pgp.helpers.insert(data, cs))
    .then(console.log('10k in'));
 };

 const createTable = async () => {
   await db.none(
      `CREATE TABLE restaurants(
        id SERIAL PRIMARY KEY,
        name TEXT,
        image TEXT,
        stars INT,
        type TEXT,
        location TEXT,
        price INT,
        amountbooked TEXT,
        suggestedrestaurants INT []
      );`
   ).then(async () => {
      for (let i = 0; i < 1000; i++) {
        await insertData(makeRez(), cs);
      }
   })
 }

 createTable();

 