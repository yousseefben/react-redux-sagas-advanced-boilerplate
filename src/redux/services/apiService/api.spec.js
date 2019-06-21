import { request } from './api';
import { mock } from '../../../utils/mockApi';

beforeEach(() => {
  mock.resetHandlers();
});

describe('api', () => {
  describe('request', () => {
    it('should fail without param', () => {
      expect(() => request()).toThrow('Error! You must pass `url`');
    });

    it('should fail to a POST without payload', () => {
      expect(() =>
        request('http://example.com/token', { method: 'POST' })
      ).toThrow('Error! You must pass `payload`');
    });

    it('should execute a GET successfully', done => {
      mock.onAny().reply(200, { hello: 'world' });

      request('http://example.com/token').then(response => {
        expect(response.data).toMatchSnapshot();
        done();
      });
    });
    it('should execute a GET successfully and return response text', done => {
      mock.onAny().reply(200, 'hello');

      request('http://example.com/token').then(response => {
        expect(response.data).toMatchSnapshot();
        done();
      });
    });

    it('should execute a POST successfully', done => {
      mock.onAny().reply(200, { a: 1 });

      request('http://example.com/token', {
        method: 'POST',
        payload: { a: 1 }
      }).then(response => {
        expect(response.data).toMatchSnapshot();
        done();
      });
    });

    it('should reject for a  bad request', done => {
      mock.onAny().reply(400);

      request('http://example.com/token').catch(error => {
        expect(error).toMatchSnapshot();
        done();
      });
    });

    it('should reject for a server error with JSON response', done => {
      mock.onAny().reply(500);
      request('http://example.com/token').catch(error => {
        expect(error).toMatchSnapshot();
        done();
      });
    });
  });
});
