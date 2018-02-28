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
  var images = ['../images/1.jpeg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg',
                '../images/5.jpg', '../images/6.jpg', '../images/7.jpg', '../images/8.jpg',
                '../images/9.jpg', '../images/10.jpg', '../images/11.jpg', '../images/12.jpg',
                '../images/13.jpg', '../images/14.jpg', '../images/15.jpg', '../images/16.jpeg',
                '../images/17.jpeg', '../images/18.jpeg', '../images/19.jpeg', '../images/20.jpeg']

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

