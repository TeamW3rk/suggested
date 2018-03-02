class SuggestedRestaurant {
  constructor(id, name, image, stars, type, location, price, amountBooked) {
    this.id = id,
    this.name = name,
    this.image = image,
    this.stars = stars,
    this.type = type,
    this.location = location
    this.price = price,
    this.amountBooked = amountBooked
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

var createSuggestedRestaurants = function() {
  var suggestedRestaurants = [];
  var id = randomizeNumber(0, 200);
  var type = ['American', 'Thai', 'Asian', 'Japanese', 'Italian', 'Mexican', 'Indian', 'Russian', 'Hawaiian'];
  var location = ['Downtown', 'Haight', 'Dogpatch', 'Noe Valley', 'Castro', 'Richmond District', 'Hayes Valley', 'SOMA'];
  var locationPick = location[randomizeNumber(0, location.length - 1)]
  var images = ['1.jpeg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
                '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg'];
  
  for (var i = 0; i < images.length; i++) {
    images[i] = '/images/' + images[i];
  }

  for (var i = 1; i <= 12; i++) {
    suggestedRestaurants.push(new SuggestedRestaurant(id + i, createName(), images[randomizeNumber(0, images.length -1)], randomizeNumber(1, 5), type[randomizeNumber(0, type.length - 1)], locationPick, randomizeNumber(1, 5), randomizeNumber(0, 200)));
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

// var createAvailability = function() {
//   var availableTimes = [];
//   var minute = [0, 15, 30, 45];

//   //create times for 30 days / month
//   //times open from 11am-11pm
//   for (var i = 1; i <= 30; i++) {
//     for (var j = 0; j < randomizeNumber(0, 5); j++) {
//       availableTimes.push({day: i, hour: randomizeNumber(11, 23), minute: minute[randomizeNumber(0, minute.length - 1)]});
//     }
//   }
  
//   return availableTimes;
// };

module.exports = createRestaurants();

