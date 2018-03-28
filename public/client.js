import Suggestions from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

let id = window.location.pathname.split('/')[2];

ReactDOM.render(<Suggestions id={id} />, document.getElementById('app'));