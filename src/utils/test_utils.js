import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { history } from './history';
import rootReducer from '../redux/reducers';

export function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer(), initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
export function renderWithRouter(ui, hist = history) {
  return {
    ...render(<Router history={hist}>{ui}</Router>)
  };
}
