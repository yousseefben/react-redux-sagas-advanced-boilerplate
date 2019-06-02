import { combineReducers } from 'redux';
import exampleReducer from '../../components/Example/exampleReducer';

const rootReducer = asyncReducers =>
  combineReducers({
    exampleData: exampleReducer,
    ...asyncReducers
  });

export default rootReducer;
