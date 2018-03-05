import React from 'react';
import App from '../public/components/App.jsx';
import RestaurantList from '../public/components/RestaurantList.jsx';
import SuggestedRestaurant from '../public/components/SuggestedRestaurant.jsx';

test('renders RestauraltList component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(RestaurantList).length).toEqual(1);
});

test('renders SuggestedRestaurant component', () => {
  const wrapper = shallow(<RestaurantList />);
  expect(wrapper.find(SuggestedRestaurant).length).toEqual(1);
})