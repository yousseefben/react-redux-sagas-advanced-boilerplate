export const mockSuccesfulResponse = (
  status = 200,
  method,
  returnBody,
  contentType
) => {
  global.fetch = jest.fn().mockImplementationOnce(
    () =>
      new Promise(resolve => {
        resolve({
          headers: {
            get: () => {
              return contentType || 'application/json';
            }
          },
          ok: true,
          status,
          json: () => returnBody || {},
          text: () => returnBody
        });
      })
  );
};

export const mockFailedResponse = error => {
  global.fetch = jest.fn().mockImplementationOnce(
    () =>
      new Promise(() => {
        throw new Error(error);
      })
  );
};
