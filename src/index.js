import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import './index.css';
import App from './components/App';
import rootSaga from './redux/sagas';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store/configureStore';
import userManager from './redux/services/authentication/utils/userManager';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <App />
    </OidcProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
