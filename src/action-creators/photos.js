export const setBurgerJointsWithEmptyPhotos = (burgerJoints) => dispatch => {
  dispatch({
    type: 'SET_BURGER_JOINTS_WITH_EMPTY_PHOTOS',
    burgerJoints
  });
};

export const setPhotosOfBurgerJoint = (id, photo) => dispatch => {
  dispatch({
    type: 'SET_PHOTOS_OF_BURGER_JOINT',
    id,
    photo
  });
};
