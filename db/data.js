
const randomImage = require('random-puppy');

class SuggestedRestaurant {
  constructor(id, name, image, stars, amountRated, type, price, amountBooked, availability) {
    this.id = id,
    this.name = name,
    this.image = image,
    this.stars = stars,
    this.amountRated = amountRated,
    this.type = type,
    this.price = price,
    this.amountBooked = amountBooked
    this.availability = availability
  }
 };

class Restaurant {
  constructor(id, name, restaurants) {
    this.id = id,
    this.name = name,
    this.restaurants = restaurants
  }
};

var randomizeNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var createName = function() {
  var name = '';
  var nameLength = randomizeNumber(4, 12); 

  for (var i = 0; i < nameLength; i++) {
    name += String.fromCharCode(randomizeNumber(97, 122));
  }

  return name[0].toUpperCase() + name.slice(1);
}

availability: [{day: Number, time: Number}];

var createAvailability = function() {
  var availableTimes = [];

  //create times for 30 days / month
  //times open from 11am-11pm
  for (var i = 1; i <= 30; i++) {
    for (var j = 0; j < randomizeNumber(0, 5); j++) {
      availableTimes.push({day: i, time: randomizeNumber(11, 23)});
    }
  }
  
  return availableTimes;
};

var createSuggestedRestaurants = function() {
  var restaurants = [];
  var image = randomImage().then(url => {console.log(url);});
  var type = ['American', 'Thai', 'Asian', 'Japanese', 'Italian', 'Mexican', 'Indian', 'Russian', 'Hawaiian'];

  for (var i = 0; i < 200; i++) {
    restaurants.push(new SuggestedRestaurant(i, createName(), image, randomizeNumber(1, 5), randomizeNumber(0, 10000), type[randomizeNumber(0, type.length - 1)], randomizeNumber(1, 5), randomizeNumber(0, 200)), createAvailability());
  }

  console.log(restaurants);
  return restaurants;
}

var createRestaurant = new Restaurant(randomizeNumber(0, 200), createName(), createSuggestedRestaurants());

module.exports = createRestaurant;

