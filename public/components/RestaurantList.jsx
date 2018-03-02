import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SuggestedRestaurant from './SuggestedRestaurant.jsx';

const RestaurantList = (props) => (
  <div>
    <div id="header">Need to book at 7:00 PM? Other great restaurants with availability.
      <div id="buttons">
        <button id="left-scroll" onClick={function(){props.scroll('#left-scroll')}}>
          <img src="./images/left-arrow.png" id="left-arrow" />
        </button>
        <button id="right-scroll"onClick={function(){props.scroll('#right-scroll')}}>
          <img src="./images/right-arrow.png" id="right-arrow" />
        </button>
      </div>
    </div>
    <div id="restaurants">
      {props.list[0] ? props.list[0].suggestedRestaurants.map((restaurant)=> {
        return <SuggestedRestaurant restaurant={restaurant} getId={props.getId} />
      }) : ""}
    </div>
  </div>
)

export default RestaurantList;
