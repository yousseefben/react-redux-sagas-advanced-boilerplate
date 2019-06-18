import { put, call, takeLatest, all } from 'redux-saga/effects';
import { request } from '../../../redux/services/apiService/api';

import { EXAMPLE } from '../../../redux/actions/types';

import example from './exampleActions';

export function* getExamples() {
  try {
    const data = yield call(
      request,
      'https://jsonplaceholder.typicode.com/posts/'
    );
    yield put(example.success({ data }));
  } catch (e) {
    yield put(example.failure({ error: e.message }));
  }
}

export function* getExampleById(action) {
  try {
    const { id } = action.payload;
    const data = yield call(
      request,
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    yield put(example.success({ data }));
  } catch (e) {
    yield put(example.failure({ error: e.message }));
  }
}

// function* handlePost(action) {
//     try {
//         const { saveData } = action.payload
//         const { data } = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts/', { saveData })
//         yield put(example.success({ data }))
//     } catch (e) {
//         yield put(example.failure({ error: { ...e } }))
//     }
// }
//
// function* handlePut(action) {
//     try {
//         const { id, updateData } = action.payload
//         const { data } = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${id}`, { updateData })
//         yield put(example.success({ data }))
//     } catch (e) {
//         yield put(example.failure({ error: { ...e } }))
//     }
// }
//
// function* handlePatch(action) {
//     try {
//         const { id, updateData } = action.payload
//         const { data } = yield call(axios.patch, `https://jsonplaceholder.typicode.com/posts/${id}`, { updateData })
//         yield put(example.success({ data }))
//     } catch (e) {
//         yield put(example.failure({ error: { ...e } }))
//     }
// }
//
// function* handleDelete(action) {
//     try {
//         const { id } = action.payload
//         const { data } = yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${id}`)
//         yield put(example.success({ data }))
//     } catch (e) {
//         yield put(example.failure({ error: { ...e } }))
//     }
// }

function* watchExampleSagas() {
  yield all([
    takeLatest(EXAMPLE.GET, getExamples),
    takeLatest(EXAMPLE.GET_ONE, getExampleById)
    // takeLatest(example.SAVE, handlePost),
    // takeLatest(example.PUT, handlePut),
    // takeLatest(example.PATCH, handlePatch),
    // takeLatest(example.DELETE, handleDelete),
  ]);
}

export default watchExampleSagas;
