const mongoose = require('mongoose');
const data = require('./data.js');
mongoose.connect('mongodb://localhost/restaurants');

let availabilitySchema = mongoose.Schema({
  day: Number,
  hour: Number,
  minute: Number
})

let suggestedRestaurantSchema = mongoose.Schema({
  id: {type: Number, unqiue: true},
  name: String,
  image: String,
  stars: Number,
  amountRated: Number,
  type: String,
  price: Number,
  amountBooked: Number,
  availability: [availabilitySchema]
})

let restaurantSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  suggestedRestaurants: [suggestedRestaurantSchema]
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

let save = (restaurants) => {
  var restaurant;

  for (var i = 0; i < restaurants.length; i++) {
    restaurant = new Restaurant ({
      id: restaurants[i].id,
      name: restaurants[i].name,
      suggestedRestaurants: restaurants[i].suggestedRestaurants
    })
    restaurant.save(function(err) {
      // if (err) {console.log(err)};
    })
  }
}

let find = (id, callback) => {
  Restaurant.find({id: id}, (err, restaurants) => {
    // console.log('bye', restaurant);
    callback(restaurants);
  })
}

save(data);

module.exports.find = find;