import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { REACT_GOOGLE_MAPS_DEFAULTS } from '../utils/constants';
import getDistance from '../utils/getDistance';

import MyMarker from './MyMarker';

class Map extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={REACT_GOOGLE_MAPS_DEFAULTS.mapDefaults.zoom}
        defaultCenter={{ ...REACT_GOOGLE_MAPS_DEFAULTS.mapDefaults.center }}
      >
        {this.renderBusStationRadius()}
        {this.renderMarkers(this.props.burgerJoints)}
      </GoogleMap>
    );
  }

  renderBusStationRadius = () => {
    return <Circle
      defaultCenter={{ ...REACT_GOOGLE_MAPS_DEFAULTS.busStationDefaults.center }}
      defaultRadius={REACT_GOOGLE_MAPS_DEFAULTS.busStationDefaults.radius}
      defaultOptions={{ ...REACT_GOOGLE_MAPS_DEFAULTS.busStationDefaults.options }}
    />;
  };

  renderMarkers = (joints) => {
    return joints.map((joint, index) => {
      if (getDistance(
        {lat: joint.location.lat, lng: joint.location.lng },
        { ...REACT_GOOGLE_MAPS_DEFAULTS.busStationDefaults.center }
      ) > REACT_GOOGLE_MAPS_DEFAULTS.busStationDefaults.radius) {
        return <MyMarker key={index} joint={joint} />;
      }

      return undefined;
    });
  };

}

Map.propTypes = {
  burgerJoints: PropTypes.array
};

const mapStateToProps = state => ({
  burgerJoints: state.burgerJoints
});

export default connect(mapStateToProps)(compose(
  withProps({
    googleMapURL: REACT_GOOGLE_MAPS_DEFAULTS.reactGoogleMapsProps.googleMapURL,
    loadingElement: REACT_GOOGLE_MAPS_DEFAULTS.reactGoogleMapsProps.loadingElement,
    containerElement: REACT_GOOGLE_MAPS_DEFAULTS.reactGoogleMapsProps.containerElement,
    mapElement: REACT_GOOGLE_MAPS_DEFAULTS.reactGoogleMapsProps.mapElement
  }),
  withScriptjs,
  withGoogleMap
)(Map));
