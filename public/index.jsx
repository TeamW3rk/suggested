import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RestaurantList from './components/RestaurantList.jsx';
import CONFIG from '../config.client.js';

const ENV = window.ENV = 'TEST'; // Define current enironment
const PATH = window.PATH = CONFIG[ENV].HOST + ":" + CONFIG[ENV].PORT;

class Suggestions extends React.Component {
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
      // url: 'http://localhost:3001' + window.location.pathname + 'suggestions',
      success: (data) => {
        console.log('SUCCESS! ', data);
        this.setState({restaurants: data})
      },
      error: (err) => {
        console.log('ERROR', err);
      }
    })
  }

  scroll(button) {
    if (button === '#left-scroll') {
      $('#left-scroll').click(() => {
        var leftPosition = $("#restaurants").scrollLeft();
        console.log('left ', leftPosition)
        $("#restaurants").animate({scrollLeft: leftPosition - 400}, 100);
      })
    } else {
      $('#right-scroll').click(() => {
        var rightPosition = $("#restaurants").scrollLeft();
        console.log('right ', rightPosition);
        $("#restaurants").animate({scrollLeft: rightPosition + 400}, 100);
      })
    }
  }

  getRestaurantId(id) {
    console.log(id);
  }

  render() {
    return (
    <div>
      <RestaurantList list={this.state.restaurants} scroll={this.scroll.bind(this)} 
                      getId={this.getRestaurantId.bind(this)} />
    </div>
    )
  }
}

ReactDOM.render(<Suggestions />, document.getElementById('app'));


