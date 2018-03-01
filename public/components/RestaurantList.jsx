import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SuggestedRestaurant from './SuggestedRestaurant.jsx';

const RestaurantList = (props) => (
  <div>
    <div id="header">Need to book at 7:00 PM? Other great restaurants with availability.
      <div id="buttons">
        <button id="left-scroll" onClick={function(){props.scroll('#left-scroll')}}></button>
        <button id="right-scroll"onClick={function(){props.scroll('#right-scroll')}}></button>
      </div>
    </div>
    <div id="restaurants">
      {props.list[0] ? props.list[0].suggestedRestaurants.map((restaurant)=> {
        return <SuggestedRestaurant restaurant={restaurant} />
      }) : ""}
    </div>
  </div>
)

export default RestaurantList;
