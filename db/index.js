const mongoose = require('mongoose');
const data = require('./data.js');
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
  id: {type: Number, unique: true},
  name: String,
  suggestedRestaurants: [suggestedRestaurantSchema]
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

let save = (restaurants) => {
  // var restaurant;

  for (var i = 0; i < restaurants.length; i++) {
    let restaurant = new Restaurant ({
      id: restaurants[i].id,
      name: restaurants[i].name,
      suggestedRestaurants: restaurants[i].suggestedRestaurants
    })
    restaurant.save().then(res => mongoose.disconnect());
  }
}

let find = (id, callback) => {
  Restaurant.find({id: id}, (err, restaurants) => {
    callback(restaurants);
  }).sort({id: -1})
}

// mongoose.disconnect();

// save(data);

module.exports.Restaurant = Restaurant;
module.exports.find = find;
module.exports.save = save;