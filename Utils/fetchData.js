import axios from 'axios';
import api from './apiRequest';

const fetchData = async (url, body, method) => {
  switch (method) {
    case undefined:
      return axios
        .get(api.concat(url))
        .then(({ data }) => data)
        .catch(() => 'Error get data');

    default:
      return axios[method](api.concat(url), body)
        .then(({ data }) => data)
        .catch(() => `Error ${method} data`);
  }
};

export default fetchData;
