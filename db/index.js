const mongoose = require('mongoose');
const suggestedRestaurants = require('./data.js');
mongoose.connect('mongodb://localhost/fetcher');

let suggestedRestaurantSchema = moongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  resturants: [{
    id: Number,
    name: String,
    image: String,
    stars: Number,
    amountRated: Number,
    type: String,
    price: Number,
    amountBooked: Number,
    availability: [{day: Number, time: Number}]
  }]
});

let Restaurant = mongoose.model('Restaurant', suggestedRestaurantSchema);

let save = (restaurants) => {
  var restaurant;

  restaurants.forEach(function(establishment) {
    restaurant = new Restaurant ({
      id: establishment.id,
      name: establishment.name,
      image: establishment.image,
      stars: establishment.stars,
      amountRated: establishment.amountRated,
      type: establishment.type,
      price: establishment.price,
      amountBooked: establishment.amountBooked,
      availability: establishment.availability
      });

    resturant.save(function(err) {
      if (err) return handleError(err);
    })
  })
}