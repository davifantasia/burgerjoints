export const setBurgerJoints = (burgerJoints) => dispatch => {
  dispatch({
    type: 'SET_BURGER_JOINTS',
    burgerJoints
  });
};

export const toggleShowMarkerInfo = (id) => dispatch => {
  dispatch({
    type: 'TOGGLE_SHOW_MARKER_INFO',
    id
  });
};
