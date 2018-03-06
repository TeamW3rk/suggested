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

  test('renders header content', () => {
    const fakeList = [];
    const fakeFunc1 = jest.fn();
    const fakeFunc2 = jest.fn();
    const wrapper = shallow(<RestaurantList list={fakeList} scroll={fakeFunc1} getId={fakeFunc2}/>);
    expect(wrapper.find('#header').text()).toEqual('Need to book at 7:00 PM? Other great restaurants with availability.');
  });

  test('renders buttons', () => {
    const fakeList = [];
    const fakeFunc1 = jest.fn();
    const fakeFunc2 = jest.fn();
    const wrapper = shallow(<RestaurantList list={fakeList} scroll={fakeFunc1} getId={fakeFunc2}/>);
    expect(wrapper.find('#left-scroll').length).toEqual(1);
    expect(wrapper.find('#right-scroll').length).toEqual(1);
  });
})

describe('SuggestedRestaurant component', () => {
  test('renders SuggestedRestaurant component', () => {
    const fakeRestaurant = {};
    const fakeFunc1 = jest.fn();
    const wrapper = shallow(<SuggestedRestaurant restaurant={fakeRestaurant} getId={fakeFunc1} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render 1 suggestedRestaurant', () => {
    const fakeRestaurant = {};
    const fakeFunc1 = jest.fn();
    const wrapper = shallow(<SuggestedRestaurant restaurant={fakeRestaurant} getId={fakeFunc1} />);
    expect(wrapper.find('#suggested-restaurant').length).toEqual(1);
  });

  test('render 5 stars', () => {
    const fakeRestaurant = {};
    const fakeFunc1 = jest.fn();
    const wrapper = shallow(<SuggestedRestaurant restaurant={fakeRestaurant} getId={fakeFunc1} />);
    expect(wrapper.find('.fa-star').length).toEqual(5);
  });

  test('render 1 restaurant image', () => {
    const fakeRestaurant = {};
    const fakeFunc1 = jest.fn();
    const wrapper = shallow(<SuggestedRestaurant restaurant={fakeRestaurant} getId={fakeFunc1} />);
    expect(wrapper.find('#suggested-restaurant-image').length).toEqual(1);
  });
})




