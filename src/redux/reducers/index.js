import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import exampleReducer from '../../components/Example/exampleReducer';

const rootReducer = asyncReducers =>
  combineReducers({
    exampleData: exampleReducer,
    oidc: oidcReducer,
    ...asyncReducers
  });

export default rootReducer;
