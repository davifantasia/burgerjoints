import { FOURSQAURE_PARAMS_DEFAULT } from './constants';

export const findBurgerJoints = () => {
  const params = { ...FOURSQAURE_PARAMS_DEFAULT, near: 'Tartu, Eesti', query: 'burger' };
  const url = new URL('https://api.foursquare.com/v2/venues/search');
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return makeApiCall(url);
};

export const getBurgerJointPhoto = (burgerJointId) => {
  const params = { ...FOURSQAURE_PARAMS_DEFAULT, group: 'venue', limit: 1 };
  const url = new URL(`https://api.foursquare.com/v2/venues/${burgerJointId}/photos`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return makeApiCall(url);
};

const makeApiCall = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then(result => {
      if (result.ok) {
        return result.json();
      }

      doOnError(new Error('NoStack'), 'Network response was not ok.', reject);
    })
      .then(result => resolve(result.response))
      .catch(error => doOnError(error, 'There has been a problem fetching from server.', reject));
  });
};

const doOnError = (error, message, reject) => {
  // Can implement logging later
  reject(new Error(message));
};
