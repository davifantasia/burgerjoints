import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBurgerJoints } from './action-creators/burgerJoints';
import { setBurgerJointsWithEmptyPhotos } from './action-creators/photos';
import Map from './components/Map';
import Photos from './components/photos/Photos';
import './App.css';

import { findBurgerJoints } from './utils/api';

class App extends Component {
  componentDidMount() {
    findBurgerJoints().then((response) => {
      this.onBurgerJoints(response.venues);
    }).catch((reason) => {
      alert(reason);
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app--map">
          <Map />
        </div>
        
        <div className="app--photos">
          <Photos />
        </div>
      </div>
    );
  }

  onBurgerJoints = (venues) => {
    this.props.setBurgerJoints(venues);
    this.props.setBurgerJointsWithEmptyPhotos(venues);
  };
}

App.propTypes = {
  setBurgerJoints: PropTypes.func,
  setBurgerJointsWithEmptyPhotos: PropTypes.func
};

export default connect(
  undefined, 
  { setBurgerJoints, setBurgerJointsWithEmptyPhotos }
)(App);
