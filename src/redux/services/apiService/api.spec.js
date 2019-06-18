import { request } from './api';
import {
  mockFailedResponse,
  mockSuccesfulResponse
} from '../../../utils/mockApi';

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
    //
    it('should execute a GET successfully', done => {
      mockSuccesfulResponse(200, 'GET', { hello: 'world' });

      request('http://example.com/token').then(data => {
        expect(data).toMatchSnapshot();
        done();
      });
    });
    it('should execute a GET successfully and return response text', done => {
      mockSuccesfulResponse(200, 'GET', 'hello', 'machin');

      request('http://example.com/token').then(data => {
        expect(data).toMatchSnapshot();
        done();
      });
    });

    it('should execute a POST successfully', done => {
      mockSuccesfulResponse(201, 'POST', { a: 1 });
      request('http://example.com/token', {
        method: 'POST',
        payload: { a: 1 }
      }).then(data => {
        expect(data).toMatchSnapshot();
        done();
      });
    });

    it('should reject for a  bad request', done => {
      mockSuccesfulResponse(400, 'GET', { error: 'Something went wrong' });

      request('http://example.com/token').catch(error => {
        expect(error.response).toEqual({ error: 'Something went wrong' });
        expect(error.status).toBe(400);
        done();
      });
    });

    it('should reject for a server error with JSON response', done => {
      mockFailedResponse('Failed');
      request('http://example.com/token').catch(error => {
        expect(error).toMatchSnapshot();
        done();
      });
    });

    it('should reject for a not found error', done => {
      mockSuccesfulResponse(404, 'GET', { error: 'FAILED' });

      request('http://example.com/token').catch(error => {
        expect(error.response).toMatchSnapshot();
        done();
      });
    });
    it('should reject with response text', done => {
      mockSuccesfulResponse(400, 'GET', 'FAILED', 'machin');

      request('http://example.com/token').catch(error => {
        expect(error.response).toEqual('FAILED');
        expect(error).toMatchSnapshot();
        done();
      });
    });
  });
});
