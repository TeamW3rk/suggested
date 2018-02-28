import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RestaurantList from './components/RestaurantList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
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

ReactDOM.render(<App />, document.getElementById('app'));

