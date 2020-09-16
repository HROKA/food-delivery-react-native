import Constants from 'expo-constants';

const { manifest } = Constants;

const proxy =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:5000`)
    : `localhost`;

export default `http://${proxy}/api/v1`;
