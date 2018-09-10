import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBurgerJointPhoto } from '../../utils/api';
import { setPhotosOfBurgerJoint } from '../../action-creators/photos';

import './Photo.css';

class Photo extends Component {
  componentDidMount() {
    getBurgerJointPhoto(this.props.burgerJoint.id).then((response) => {
      if (response.photos.items.length > 0) {
        this.onGetBurgerJointPhoto(response.photos.items[0]);
      }
    }).catch(() => {
      alert(`There was a problem getting ${this.props.burgerJoint.name}'s photo.'`);
    });
  }

  onGetBurgerJointPhoto = (photo) => {
    this.props.setPhotosOfBurgerJoint(this.props.burgerJoint.id, photo);
  };

  render() {
    return (
      <div className="photo">
        {
          this.props.burgerJoint.photoSrc
            ? <img className="photo--image" src={this.props.burgerJoint.photoSrc} alt={this.props.burgerJoint.name} />
            : <div className="photo--div"><p className="photo--div--p">Photo for {this.props.burgerJoint.name}</p></div>
        }
      </div>
    );
  }
}

Photo.propTypes = {
  burgerJoint: PropTypes.object,
  setPhotosOfBurgerJoint: PropTypes.func
};

export default connect(
  undefined,
  { setPhotosOfBurgerJoint: setPhotosOfBurgerJoint }
)(Photo);
