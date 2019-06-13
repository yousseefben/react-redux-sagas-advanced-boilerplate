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
    headers,
    method: config.method
  };

  if (params.method !== 'GET') {
    params.body = JSON.stringify(config.payload);
  }

  return fetch(url, params).then(async response => {
    const contentType = response.headers.get('content-type');

    if (response.status > 299) {
      const error = {};
      error.status = response.status;

      if (contentType && contentType.includes('application/json')) {
        error.response = await response.json();
      } else {
        error.response = await response.text();
      }

      throw error;
    } else {
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      }

      return response.text();
    }
  });
}
