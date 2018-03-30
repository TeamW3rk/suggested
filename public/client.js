import Suggestions from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('suggested');
const initState = JSON.parse(element.getAttribute('data-suggested'))

if (initState) {
  ReactDOM.hydrate(<Suggestions {...initState}/>, element);
} else {
  ReactDOM.render(<Suggestions />, element);
}
