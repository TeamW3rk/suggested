import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const SuggestedRestaurant = (props) => (
  <div id="suggested-restaurant">
    {/* <div id="suggested-restaurant-id">{props.restaurant.id}</div> */}
    <div><img src={props.restaurant.image} id="suggested-restaurant-image" /></div> 
    <div id="suggested-restaurant-name">{props.restaurant.name}</div>
    <div id="suggested-restaurant-stars">{props.restaurant.stars}</div>
    <div id="suggested-restaurant-price">{props.restaurant.price}</div>
    <div id="suggested-restaurant-type">{props.restaurant.type}</div>     
    <div id="suggested-restaurant-amount-booked">{props.restaurant.amountBooked}</div>
  </div>
)

export default SuggestedRestaurant;

