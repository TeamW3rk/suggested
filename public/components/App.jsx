import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RestaurantList from './RestaurantList.jsx';
import CONFIG from '../config.client.js';

const ENV = window.ENV = 'TEST'; // Define current enironment
const PATH = window.PATH = CONFIG[ENV].HOST + ":" + CONFIG[ENV].PORT;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentWillMount() {
    this.fetch(window.location.pathname);
  }

  fetch(path) {
    $.ajax({
      method: 'GET',
      url: `${PATH}${path}suggestions`,
      // url: 'http://localhost:3000' + path + 'suggestions',
      success: (data) => {
        console.log('SUCCESS! ', data);
        this.setState({restaurants: data})
      },
      error: (err) => {
        console.log('ERROR', err)
      }
    })
  }

  handleScroll(button) {
    if (button === '#left-scroll') {
      $(button).click(() => {
        var leftPosition = $("#restaurants").scrollLeft();
        console.log('left ', leftPosition)
        $("#restaurants").animate({scrollLeft: leftPosition - 400}, 100);
      })
    } else {
      $(button).click(() => {
        var rightPosition = $("#restaurants").scrollLeft();
        console.log('right ', rightPosition);
        $("#restaurants").animate({scrollLeft: rightPosition + 400}, 100);
      })
    }
  }

  getRestaurantId(id) {
    console.log(id);
    this.fetch('/r/' + id + '/');
  }

  render() {
    return (
    <div>
      <RestaurantList list={this.state.restaurants} scroll={this.handleScroll.bind(this)} 
                      getId={this.getRestaurantId.bind(this)} />
    </div>
    )
  }
}

export default App;
