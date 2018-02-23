const mongoose = require('mongoose');
const data = require('./data.js');
mongoose.connect('mongodb://localhost/restaurants');

let restaurantSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  suggestedRestaurants: [{
    id: {type: Number, unqiue: true},
    name: String,
    image: String,
    stars: Number,
    amountRated: Number,
    type: String,
    price: Number,
    amountBooked: Number,
    availability: [{day: Number, time: Number, minute: Number}]
  }],
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

let save = (restaurants) => {
  var restaurant;
  var suggestedRestaurants;

  for (var i = 0; i < restaurants.length; i++) {
    // suggestedRestaurants = Restaurant.create(restaurants[i].suggestedRestaurants, (err) => {
    //   // if (err) {console.log(err);}
    //   console.log('succesful insertion of data');
    // })

    restaurant = new Restaurant ({
      id: restaurants[i].id,
      name: restaurants[i].name,
      restaurants: restaurants[i]
    })

    restaurant.save(function(err) {
      // if (err) {console.log(err)};
    })
  }
}

save(data);