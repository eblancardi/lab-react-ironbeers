import React, { Component } from 'react';

import './App.css';
import App from '../App';
import { link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='App-link'>
          <img src='/images/beers.png' alt='beers'></img>
          <Link to='/all-beers/'>All beers</Link>
          Lorem ipsum
        </div>
        <div className='App-link'>
          <img src='/images/random-beer.png' alt='random'></img>
          <Link to='/random-beer/'>Random beer</Link>
          Lorem ipsum.
        </div>
        <div className='App-link'>
          <img src='/images/new-beer.png' alt='new beer'></img>
          <Link to='/new-beer/'>Add a beer</Link>
          Lorem ipsum
        </div>
      </div>
    );
  }
}

export default Home;




