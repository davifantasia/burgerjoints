import React from 'react';
import { GOOGLE_MAP_API_KEY, FOURSQUARE_CREDS } from '../config';

export const REACT_GOOGLE_MAPS_DEFAULTS = {
  reactGoogleMapsProps: {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />
  },
  key: GOOGLE_MAP_API_KEY,
  mapDefaults: {
    zoom: 13,
    center: { lat: 58.378157, lng: 26.728086 }
  },
  busStationDefaults: {
    center: { lat: 58.3751547, lng: 26.6625059 },
    radius: 1000,
    options: {
      strokeColor: '#FF0000', strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    }
  }
};

export const FOURSQAURE_PARAMS_DEFAULT = {
  client_id: FOURSQUARE_CREDS.clientId,
  client_secret: FOURSQUARE_CREDS.clientSecret,
  v: '20180323'
};
