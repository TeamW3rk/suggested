import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RestaurantList from './components/RestaurantList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: dummyData
    }
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/r/10/suggestions',
      success: (data) => {
        console.log('SUCCESS! ', data);
        this.setState({restaurants: data})
      },
      error: (err) => {
        console.log('ERROR', err)
      }
    })
  }

  render() {
    return (
    <div>
      <RestaurantList list={this.state.restaurants} />
    </div>
    )

  }
}

var dummyData = [{
	"id" : 25,
	"name" : "Bybipp",
	"suggestedRestaurants" : [
		{
			"id" : 1,
			"name" : "Ybwhvhkc",
			"image" : "../public/images/1.jpeg",
			"stars" : 1,
			"amountRated" : 1209,
			"type" : "Russian",
			"price" : 2,
			"amountBooked" : 91,
			"availability" : [
				{
					"day" : 1,
					"hour" : 12,
					"minute" : 15
				},
				{
					"day" : 1,
					"hour" : 14,
					"minute" : 0
				},
				{
					"day" : 2,
					"hour" : 17,
					"minute" : 15
				},
				{
					"day" : 3,
					"hour" : 23,
					"minute" : 45,
				}
			]
    }
  ]
}]

ReactDOM.render(<App />, document.getElementById('app'));

