import axios from 'axios';

export function request(url, options = {}) {
  const config = {
    method: 'GET',
    ...options
  };
  const errors = [];

  if (!url) {
    errors.push('url');
  }

  if (
    !config.payload &&
    (config.method !== 'GET' && config.method !== 'DELETE')
  ) {
    errors.push('payload');
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
  }
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers
  };

  const params = {
    url,
    headers,
    method: config.method
  };

  if (params.method !== 'GET') {
    params.data = JSON.stringify(config.payload);
  }
  return axios(params);
}
