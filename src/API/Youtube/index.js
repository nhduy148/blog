require('dotenv').config({path: __dirname+'../.env'});
const APIKEY = process.env.YOUTUBE_APIKEY;
const axios = require('axios');

module.exports = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: 'snippet',
      key: APIKEY
    }
  })