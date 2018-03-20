const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');

let suggestedRestaurantSchema = mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  stars: Number,
  type: String,
  location: String,
  price: Number,
  amountBooked: Number,
})

let restaurantSchema = mongoose.Schema({
  restid: Number,
  name: String,
  suggestedRestaurants: [suggestedRestaurantSchema]
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

let save = (restaurants) => {
  const promises = [];
  for (var i = 0; i < restaurants.length; i++) {
    let restaurant = new Restaurant(restaurants[i]);
    promises.push(restaurant.save());
  }
  Promise.all(promises).then(() => {
    console.log('all saved!');
    mongoose.disconnect();
  });
}

let find = (id, callback) => {
  Restaurant.find({restid: id}, (err, restaurants) => {
    callback(restaurants);
  }).sort({restid: -1})
}

module.exports.Restaurant = Restaurant;
module.exports.find = find;
module.exports.save = save;