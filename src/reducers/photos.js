export default (state = [], action) => {
  switch (action.type) {
  case 'SET_BURGER_JOINTS_WITH_EMPTY_PHOTOS': 
    return action.burgerJoints.map(burgerJoint => {
      const { id, name } = burgerJoint;
      return { id, name };
    });
  case 'SET_PHOTOS_OF_BURGER_JOINT':
    return state.map(burgerJoint => {
      if (burgerJoint.id !== action.id) {
        return burgerJoint;
      }

      return {
        ...burgerJoint,
        photoSrc: `${action.photo.prefix}${action.photo.width}x${action.photo.height}${action.photo.suffix}`
      };
    });
  default:
    return state;
  }
};