const mongoose = require('mongoose');
const faker = require('faker');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

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

class Rez {
  constructor(id, name, suggestedRestaurants) {
    this.restid = id,
    this.name = name,
    this.suggestedRestaurants = suggestedRestaurants
  }
};

var randomizeNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createName = function() {
  var first = faker.lorem.word();
  var name = faker.lorem.word();
  return first[0].toUpperCase() + first.slice(1) + ' ' + name[0].toUpperCase() + name.slice(1);
}

var createSuggestedRestaurants = function() {
  var suggestedRestaurants = [];
  var type = ['American', 'Thai', 'Asian', 'Japanese', 'Italian', 'Mexican', 'Indian', 'Russian', 'Hawaiian'];
  var location = ['Downtown', 'Haight', 'Dogpatch', 'Noe Valley', 'Castro', 'Richmond District', 'Hayes Valley', 'SOMA'];
  //var locationPick = location[randomizeNumber(0, location.length - 1)];
  var images = ['1.jpeg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
                '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg'];
  
  for (var i = 0; i < images.length; i++) {
    images[i] = '/images/' + images[i];
  }

  for (var i = 1; i <= 6; i++) {
    suggestedRestaurants.push(new SuggestedRestaurant(randomizeNumber(0, 200), createName(), images[randomizeNumber(0, images.length -1)], randomizeNumber(1, 5), type[randomizeNumber(0, type.length - 1)], faker.address.city().slice(0, 11), randomizeNumber(1, 5), randomizeNumber(0, 200)));
  }

  return suggestedRestaurants;
}

var createRestaurants = async function() {
  const client = await MongoClient.connect(url);
  const db = client.db('restaurants');
  const collection = db.collection('restaurants');
  const id = cluster.worker.id - 1;
  var restaurants = []; 
  var start = new Date();
  console.log(start);
  for (var i = id * (10000000/numCPUs) + 1; i <= (id + 1) * (10000000/numCPUs); i++) {
    restaurants.push(new Rez(i, createName(), createSuggestedRestaurants()));
    if (i % 1000 === 0) {
      await collection.insertMany(restaurants);
      restaurants = [];
    }
    if (i % 1000000 === 0) {
      console.log('Million in', (new Date() - start) / 60000, i);
    }
  } 
  console.log((new Date() - start) / 60000);
  process.exit();
}

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  let finishedWorkers = 0;

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', async (worker, code, signal) => {
    finishedWorkers++;
    if (finishedWorkers === numCPUs) {
      const client = await MongoClient.connect(url);
      const db = client.db('restaurants');
      const collection = db.collection('restaurants');
      console.log('indexing begins');
      await collection.createIndex({restid: 1});
      process.exit();
    }
    console.log(`worker ${worker.process.pid} finished`);
  });
} else {
  createRestaurants();
  console.log(`Worker ${process.pid} started`);
}


