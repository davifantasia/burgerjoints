# Burger Joints

A web application that displays all burger joints in Tartu, Estonia, on a map. Latest photo of each burger joint is also displayed.

The venues are fetched using [Foursquare API](https://developer.foursquare.com/), the map is generated using [Google Map API](https://developers.google.com/maps/documentation/).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The application state is managed using [Redux](https://redux.js.org/).

## Features include:

-	All burger joints are shown on the map except the ones in a 1km radius from the Tartu bus station.
-	Clicking on a venue will show the name of the burger joint.
-	A 1km radius circle is drawn around the Tartu bus station where venues are not displayed.
-	The latest photo of each burger joint is shown.

## Note:
To use the Foursquare API, you must obtain a client id and client secret from [Foursquare](https://developer.foursquare.com/).

To use the Google Map API, you must obtain an API key from [Google Map Platform](https://developers.google.com/maps/documentation/javascript/get-api-key).

In order to run this application as is you must create the config file in 'src/config.js' location and update the variables with your Google Map API key, Fouraquare cliend id and secret.
```
// src/config.js

export const GOOGLE_MAP_API_KEY = '<YOUR_KEY>';

export const FOURSQUARE_CREDS = {
  clientId: '<YOUR_CLIENT_ID>',
  clientSecret: '<YOUR_CLIENT_SECRET>'
};
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
