import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Swith, Route } from 'react-router-dom';

import Home from './components/Home';
import axios from 'axios'

class App extends Component {
  render() {
    return (
      < Home />
    )};
}

export default App;
