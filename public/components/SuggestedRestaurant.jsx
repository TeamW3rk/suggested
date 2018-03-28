import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const SuggestedRestaurant = (props) => {
  let stars = ['no-stars', 'no-stars', 'no-stars', 'no-stars', 'no-stars'];
  stars.fill('starred', 0, props.restaurant.stars); 

  let dollar = ['no-dollar', 'no-dollar', 'no-dollar', 'no-dollar', 'no-dollar'];
  dollar.fill('dollar', 0, props.restaurant.price);

  return (
  <div id="suggested-restaurant" onClick={function(){props.getId(props.restaurant.restid)}}>
    <div><img src={props.restaurant.image} id="suggested-restaurant-image" /></div> 
    <div id="suggested-restaurant-info">
      <div id="suggested-restaurant-name">{props.restaurant.name}</div>
      <div id="suggested-restaurant-stars">
        {stars.map((starred) => {
          if (starred === 'starred') {
            return <span className="fa fa-star checked"></span>
          } else {
            return <span className="fa fa-star unchecked"></span>
          }
        })}
        <span id="stars-number"> {props.restaurant.stars} </span>
      </div>
      <div id="suggested-restaurant-price">
        {dollar.map((dollar) => {
          if (dollar === 'dollar') {
            return <span className="dollar">&#36;</span>
          } else  {
            return <span className="no-dollar">&#36;</span>
          }
        })}
      </div>
      <div id="type-location">
        <div id="suggested-restaurant-type">{props.restaurant.type} <span id="middot">&middot;</span> </div>
        <div id="suggested-restaurant-location">{props.restaurant.location}</div>   
      </div>       
      <div id="suggested-restaurant-amount-booked">
        <img src={"./images/booked.png"} id="booked-image" />
        Booked {props.restaurant.amountbooked} times today
      </div>
    </div>
  </div> 
  )
}

export default SuggestedRestaurant;

