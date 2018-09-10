import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Photo from '../photo/Photo';
import './Photos.css';

const Photos = (props) => {
  if (props.photos.length > 0) {
    return (
      <div className="photos">
        {
          props.photos.map((burgerJoint, index) => {
            return <Photo 
              key={index}
              burgerJoint={{...burgerJoint}} 
            />;
          })
        }
      </div>
    );
  }

  return <div>Loading Photos...</div>;
};

Photos.propTypes = {
  photos: PropTypes.array
};

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(mapStateToProps)(Photos);
