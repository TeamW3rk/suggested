const mongoose = require('mongoose');
const { Restaurant } = require('./index.js');
// mongoose.connect('mongodb://localhost/restaurants');

const dropDB = () => {
  Restaurant.remove({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Collection removed');
      process.exit();
    }
  });
};
dropDB();

exports.dropDB = dropDB;