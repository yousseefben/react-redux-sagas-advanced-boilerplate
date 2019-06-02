import { all, fork } from 'redux-saga/effects';
import watchExampleSagas from '../../components/Example/exampleSagas';

export default function* rootSaga() {
  yield all([fork(watchExampleSagas)]);
}
