import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  // componentWillMount() {
  //   $.ajax({
  //     method: 'GET',
  //     url: 'localhost:3000',
  //     data: data,
  //     contentType: 'application/json',
  //     success: function(data) {
  //       console.log('SUCCESS! ', data);
  //     },
  //     error: function(err) {
  //       console.log('ERROR', err)
  //     }
  //   })
  // }
  render() {
    return (<div> sup!</div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));