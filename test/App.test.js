import React from 'react';
import App from '../public/components/App.jsx';
import RestaurantList from '../public/components/RestaurantList.jsx';
import SuggestedRestaurant from '../public/components/SuggestedRestaurant.jsx';

describe('App component', () => {
  test('RestaurantList should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RestaurantList).length).toEqual(1);
  });
})

describe('RestaurantList component', () => {
  test('renders RestaurantList component', () => {
    const fakeList = [];
    const fakeFunc1 = jest.fn();
    const fakeFunc2 = jest.fn();
    const wrapper = shallow(<RestaurantList list={fakeList} scroll={fakeFunc1} getId={fakeFunc2}/>);
    expect(wrapper).toMatchSnapshot();
  });
})

describe('SuggestedRestaurant component', () => {
  test('renders SuggestedRestaurant component', () => {
    const fakeRestaurant = {};
    const fakeFunc1 = jest.fn();
    const wrapper = shallow(<SuggestedRestaurant restaurant={fakeRestaurant} getId={fakeFunc1} />);
    expect(wrapper).toMatchSnapshot();
  });
})




