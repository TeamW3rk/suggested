import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/r/10/suggestions',
      success: (data) => {
        console.log('SUCCESS! ', data);
      },
      error: (err) => {
        console.log('ERROR', err)
      }
    })
  }
  render() {
    return (<div> sup!</div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));