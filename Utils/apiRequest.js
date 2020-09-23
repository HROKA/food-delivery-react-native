import Constants from 'expo-constants';

const { manifest } = Constants;

const proxy = manifest.debuggerHost.split(`:`).shift().concat(`:5000`);
/*
   manifest.debuggerHost  is (packager.2v-w3z.notbrent.internal.exp.direct:80) as expo docs
   and thats meaning your ip address (192.168.---.---)
    and we change the 80 to 5000 to use local server in development
   */

// we will check if div or product to use the api we want
const api = manifest.packagerOpts.dev ? `http://${proxy}/api/v1/` : `https://food-app-delivery.herokuapp.com/api/v1/`;

export default api;
