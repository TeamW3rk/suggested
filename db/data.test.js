const data = require('./data.js');

test('length of restaurant array should equal 200', () => {
  expect(data.length).toBe(200);
})

test('length of suggested restaurants array to be 12', () => {
  for (var i = 0; i < data.length; i++) {
    expect(data[i].suggestedRestaurants.length).toBe(12);
  }
})

test('name of restaurants should be a string', () => {
  for (var i = 0; i <data.length; i++) {
    expect(typeof data[i].name).toBe('string');
  }
})