import { all, fork } from 'redux-saga/effects';
import watchExampleSagas from '../../containers/Example/redux/exampleSagas';

export default function* rootSaga() {
  yield all([fork(watchExampleSagas)]);
}
