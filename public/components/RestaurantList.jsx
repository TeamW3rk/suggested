import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SuggestedRestaurant from './SuggestedRestaurant.jsx';

const RestaurantList = (props) => (
  <div id="restaurants">
    <div id="header">Need to book at 7:00 PM? Other great restaurants with availability.
    <button></button>
    <button></button>
    </div>
    {props.list[0] ? props.list[0].suggestedRestaurants.map((restaurant)=> {
      return <SuggestedRestaurant restaurant={restaurant} />
    }) : ""}
  </div>
)

export default RestaurantList;
