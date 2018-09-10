import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShowMarkerInfo } from '../action-creators/burgerJoints';
import { Marker, InfoWindow } from 'react-google-maps';

class MyMarker extends Component {
  render() {
    const { joint } = this.props;
    return (
      <Marker
        position={
          {
            lat: joint.location.lat,
            lng: joint.location.lng
          }
        }
        onClick={this.onClick}
      >
        {
          joint.showMarkerInfo
          &&
          <InfoWindow onCloseClick={this.onClick}>
            <p>{joint.name}</p>
          </InfoWindow>
        }
      </Marker>
    );
  }

  onClick = () => {
    this.props.onToggleShowMarkerInfo(this.props.joint.id);
  };
}

MyMarker.propTypes = {
  joint: PropTypes.object,
  onToggleShowMarkerInfo: PropTypes.func
};

export default connect(
  undefined, 
  { onToggleShowMarkerInfo: toggleShowMarkerInfo }
)(MyMarker);
