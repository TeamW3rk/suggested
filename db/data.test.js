const data = require('./data.js');

test('length of restaurant array should equal 200', () => {
  expect(data.length).toBe(200);
})

test('length of suggested restaurants array to be 12', () => {
  for (var i = 0; i < data.length; i++) {
    expect(data[i].suggestedRestaurants.length).toBe(12);
  }
})

test('values of restaurant properties should be of the correct type', () => {
  for (var i = 0; i < data.length; i++) {
    expect(typeof data[i].id).toBe('number');
    expect(typeof data[i].name).toBe('string');
    expect(Array.isArray(data[i].suggestedRestaurants)).toBe(true);
  }
})

test('values of suggeted restaurant properties should be of the correct type', () => {
  for (var i = 0; i < data.length; i++) {
    var suggestedRestaurants = data[i].suggestedRestaurants;
    for (var j = 0; j < suggestedRestaurants.length; j++) {
      expect(typeof suggestedRestaurants[j].id).toBe('number');
      expect(typeof suggestedRestaurants[j].name).toBe('string');
      expect(typeof suggestedRestaurants[j].image).toBe('string');
      expect(typeof suggestedRestaurants[j].stars).toBe('number');
      expect(typeof suggestedRestaurants[j].amountRated).toBe('number');
      expect(typeof suggestedRestaurants[j].type).toBe('string');
      expect(typeof suggestedRestaurants[j].price).toBe('number');
      expect(typeof suggestedRestaurants[j].amountBooked).toBe('number');
      expect(Array.isArray(suggestedRestaurants[j].availability)).toBe(true);
    }
  }
})

test('restaruant objects should have correct properties', () => {
  for (var i = 0; i < data.length; i++) {
      expect(data[i]).toHaveProperty('id');
      expect(data[i]).toHaveProperty('name');
      expect(data[i]).toHaveProperty('suggestedRestaurants');
  }
})

test('suggestedRestaurant objects should have correct properties', () => {
  for (var i = 0; i < data.length; i++) {
    var suggestedRestaurants = data[i].suggestedRestaurants;
    for (var j = 0; j < suggestedRestaurants.length; j++) {
      expect(suggestedRestaurants[j]).toHaveProperty('id');
      expect(suggestedRestaurants[j]).toHaveProperty('name');
      expect(suggestedRestaurants[j]).toHaveProperty('image');
      expect(suggestedRestaurants[j]).toHaveProperty('stars');
      expect(suggestedRestaurants[j]).toHaveProperty('amountRated');
      expect(suggestedRestaurants[j]).toHaveProperty('type');
      expect(suggestedRestaurants[j]).toHaveProperty('price');
      expect(suggestedRestaurants[j]).toHaveProperty('amountBooked');
      expect(suggestedRestaurants[j]).toHaveProperty('availability');
    }
  }
})