import Constants from 'expo-constants';

const { manifest } = Constants;

const proxy =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:5000`)
    : `https://food-app-delivery.herokuapp.com/`;

export default `http://${proxy}/api/v1/`;
