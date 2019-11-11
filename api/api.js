const axios = require('axios');

const request = axios.create({
  baseURL: 'https://warm-dawn-92320.herokuapp.com/'
})

export default request;