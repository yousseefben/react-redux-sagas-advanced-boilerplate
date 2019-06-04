import { createStore, applyMiddleware, compose } from 'redux';
import { loadUser } from 'redux-oidc';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import userManager from '../services/authentication/utils/userManager';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer(), enhancer);

  loadUser(store, userManager);
  store.runSaga = sagaMiddleware.run;
  return store;
}
