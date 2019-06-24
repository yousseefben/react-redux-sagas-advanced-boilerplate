import { createSelector } from 'reselect';

const getDataSelector = entity =>
  createSelector(
    state => state[entity],
    state => state.data
  );

const fetchingSelector = entity =>
  createSelector(
    state => state[entity],
    state => state.fetching
  );

const errorSelector = entity =>
  createSelector(
    state => state[entity],
    state => state.error
  );

export { getDataSelector, fetchingSelector, errorSelector };
