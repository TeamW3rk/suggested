const mongoose = require('mongoose');
const data = require('./data.js');
const { Restaurant } = require('./index.js');
const helper = require('./index.js');

// const seedDB = (restaurants, callback) => {
//   // var restaurant;
//   for (var i = 0; i < restaurants.length; i++) {
//     let restaurant = new Restaurant ({
//       id: restaurants[i].id,
//       name: restaurants[i].name,
//       suggestedRestaurants: restaurants[i].suggestedRestaurants
//     })
//     restaurant.save().then(res => mongoose.disconnect());
//   }
// };
helper.save(data);

// exports.seedDB = seedDB;