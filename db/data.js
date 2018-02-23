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
  constructor(id, name, suggestedRestaurants) {
    this.id = id,
    this.name = name,
    this.suggestedRestaurants = suggestedRestaurants
  }
};

var randomizeNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createName = function() {
  var name = '';
  var nameLength = randomizeNumber(4, 12); 

  for (var i = 0; i < nameLength; i++) {
    name += String.fromCharCode(randomizeNumber(97, 122));
  }

  return name[0].toUpperCase() + name.slice(1);
}

var createAvailability = function() {
  var availableTimes = [];
  var minute = [0, 15, 30, 45];

  //create times for 30 days / month
  //times open from 11am-11pm
  for (var i = 1; i <= 30; i++) {
    for (var j = 0; j < randomizeNumber(0, 5); j++) {
      availableTimes.push({day: i, hour: randomizeNumber(11, 23), minute: minute[randomizeNumber(0, minute.length - 1)]});
    }
  }
  
  return availableTimes;
};

var createSuggestedRestaurants = function() {
  var suggestedRestaurants = [];
  var type = ['American', 'Thai', 'Asian', 'Japanese', 'Italian', 'Mexican', 'Indian', 'Russian', 'Hawaiian'];
  var images = ['../public/images/1.jpeg', '../public/images/2.jpeg', '../public/images/3.jpeg', '../public/images/4.jpg',
                '../public/images/5.jpg', '../public/images/6.jpg', '../public/images/7.jpeg', '../public/images/8.jpeg',
                '../public/images/9.jpeg', '../public/images/10.jpeg', '../public/images/11.jpeg', '../public/images/12.jpeg',
                '../public/images/13.jpg', '../public/images/14.jpg', '../public/images/15.jpg', '../public/images/16.jpeg',
                '../public/images/17.jpeg', '../public/images/18.jpeg', '../public/images/19.jpeg', '../public/images/20.jpeg']

  for (var i = 1; i <= 12; i++) {
    suggestedRestaurants.push(new SuggestedRestaurant(i, createName(), images[randomizeNumber(0, images.length -1)], randomizeNumber(1, 5), randomizeNumber(0, 10000), type[randomizeNumber(0, type.length - 1)], randomizeNumber(1, 5), randomizeNumber(0, 200), createAvailability()));
  }

  return suggestedRestaurants;
}

var createRestaurants = function() {
  var restaurants = []; 

  for (var i = 1; i <= 200; i++) {
    restaurants.push(new Restaurant(i, createName(), createSuggestedRestaurants()));
  }

  return restaurants;
}

module.exports = createRestaurants();

