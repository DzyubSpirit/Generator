'use strict';

// Run `helpers/server.js` for this example to work.

const getJSON = require('./helpers/get-json');
const doMonad = require('./helpers/do-notation');

const baseUrl = 'http://localhost:3000/';
doMonad(function* () {
  const api = yield getJSON(baseUrl);
  let resource, data;
  for (resource of api.resources) {
    data = yield getJSON(baseUrl + resource);
    console.log(data);
  }
}).catch(e => {
  console.log(e);
});
