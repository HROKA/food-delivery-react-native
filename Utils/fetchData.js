import axios from 'axios';
import api from './apiRequest';

const fetchData = async (route, body, method) => {
  switch (method) {
    case undefined:
      /*
      we concat the route with
      develop api: http://${proxy}/api/v1/
      or
      product api: https://food-app-delivery.herokuapp.com/api/v1/
      */
      return axios.get(api.concat(route));

    default:
      return axios[method](api.concat(route), body);
  }
};

export default fetchData;
