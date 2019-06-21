const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

export const mock = new MockAdapter(axios);
