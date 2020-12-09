import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Employees } from './Employee'


ReactDOM.render(
  
    <App employees={Employees}/>,
  
  document.getElementById('root')
);


