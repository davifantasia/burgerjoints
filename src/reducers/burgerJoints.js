export default (state = [], action) => {
  switch (action.type) {
  case 'SET_BURGER_JOINTS':
    return action.burgerJoints;
  case 'TOGGLE_SHOW_MARKER_INFO':
    return state.map(burgerJoint => {
      if (burgerJoint.id !== action.id) {
        return burgerJoint;
      }

      return {
        ...burgerJoint,
        showMarkerInfo: burgerJoint.showMarkerInfo ? !burgerJoint.showMarkerInfo : true
      };
    });
  default:
    return state;
  }
};
