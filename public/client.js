import Suggestions from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('suggested');
const initState = JSON.parse(element.getAttribute('data-suggested'))

ReactDOM.hydrate(<Suggestions {...initState}/>, element);