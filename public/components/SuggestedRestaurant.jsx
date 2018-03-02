import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const SuggestedRestaurant = (props) => {
  let checked = [];
  for (var i = 0; i < props.restaurant.stars; i++) {
    checked.push('checked');
  }

  let unchecked = [];
  for (var i = 0; i < 5 - checked.length; i++) {
    unchecked.push('');
  }

  let dollar = [];
  for (var i = 0; i < props.restaurant.price; i++) {
    dollar.push('');
  }

  let noDollar = [];
  for (var i = 0; i < 5 - dollar.length; i++) {
    noDollar.push('');
  }

  return (
  <div id="suggested-restaurant" onClick={function(){props.getId(props.restaurant.id)}}>
    <div><img src={props.restaurant.image} id="suggested-restaurant-image" /></div> 
    <div id="suggested-restaurant-info">
      <div id="suggested-restaurant-name">{props.restaurant.name}</div>
      <div id="suggested-restaurant-stars">
        {checked.map((star) => {
          return <span className="fa fa-star checked"></span>
        })}
        {unchecked.map((noStar) => {
          return <span className="fa fa-star unchecked"></span>
        })}
        <span id="stars-number"> {props.restaurant.stars} </span>
      </div>
      <div id="suggested-restaurant-price">
        {dollar.map((dollar) => {
          return <span className="dollar">&#36;</span>
        })}
        {noDollar.map((noDollar) => {
          return <span className="no-dollar">&#36;</span>
        })}
      </div>
      <div id="type-location">
        <div id="suggested-restaurant-type">{props.restaurant.type} <span id="middot">&middot;</span> </div>
        <div id="suggested-restaurant-location">{props.restaurant.location}</div>   
      </div>       
      <div id="suggested-restaurant-amount-booked">
        <img src={"./images/booked.png"} id="booked-image" />
        Booked {props.restaurant.amountBooked} times today
      </div>
    </div>
  </div> 
  )
}


export default SuggestedRestaurant;

