import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootSaga from './redux/sagas';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store/configureStore';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
