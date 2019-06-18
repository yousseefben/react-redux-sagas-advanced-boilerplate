import { expectSaga, testSaga } from 'redux-saga-test-plan';
import examplSaga, { getExampleById, getExamples } from './redux/exampleSagas';
import example from './redux/exampleActions';
import { request } from '../../redux/services/apiService/api';

describe('example sagas', () => {
  it('should getExamples dipsatch success', () => {
    testSaga(getExamples)
      .next()
      .call(request, 'https://jsonplaceholder.typicode.com/posts/')
      .next('data')
      .put(example.success({ data: 'data' }))
      .next()
      .isDone();
  });

  it('should getExamples dipsatch failure', () => {
    testSaga(getExamples)
      .next()
      .call(request, 'https://jsonplaceholder.typicode.com/posts/')
      .throw(new Error('error'))
      .put(example.failure({ error: 'error' }))
      .next()
      .isDone();
  });

  it('getExampleById', () => {
    testSaga(getExampleById, { payload: { id: 1 } })
      .next()
      .call(request, 'https://jsonplaceholder.typicode.com/posts/1')
      .next('data')
      .put(example.success({ data: 'data' }))
      .next()
      .isDone();
  });

  it('should getExampleById dipsatch failure', () => {
    testSaga(getExampleById, { payload: { id: 1 } })
      .next()
      .call(request, 'https://jsonplaceholder.typicode.com/posts/1')
      .throw(new Error('error'))
      .put(example.failure({ error: 'error' }))
      .next()
      .isDone();
  });

  it('should have the expected watchers', done =>
    expectSaga(examplSaga)
      .run({ silenceTimeout: true })
      .then(saga => {
        expect(saga).toMatchSnapshot();
        done();
      }));
});
