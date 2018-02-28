import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const SuggestedRestaurant = (props) => (
  <div id="suggested-restaurant">
  {props.restaurant.id} 
  {props.restaurant.name} 
  {props.restaurant.image} 
  {props.restaurant.stars} 
  {props.restaurant.amountRated} 
  {props.restaurant.type} 
  {props.restaurant.price} 
  {props.restaurant.amountBooked} 
  </div>
)

export default SuggestedRestaurant;

