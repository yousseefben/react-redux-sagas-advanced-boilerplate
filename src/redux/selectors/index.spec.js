import { errorSelector, fetchingSelector, getDataSelector } from './index';

const stateMocked = {
  data: {
    a: '1'
  },
  fetching: false,
  error: 'bom'
};

describe('selector', () => {
  it('should return data', () => {
    expect(getDataSelector('TEST').resultFunc(stateMocked)).toEqual({ a: '1' });
  });
  it('should return fetchig status', () => {
    expect(fetchingSelector('TEST').resultFunc(stateMocked)).toEqual(false);
  });
  it('should return error', () => {
    expect(errorSelector('TEST').resultFunc(stateMocked)).toEqual('bom');
  });
});
