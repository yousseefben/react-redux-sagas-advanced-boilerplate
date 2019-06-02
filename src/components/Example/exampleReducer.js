import { merge } from 'lodash';
import { EXAMPLE } from '../../redux/actions/types';

const initialState = {
  data: [],
  fetching: false,
  success: false,
  error: null
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE.GET:
    case EXAMPLE.GET_ONE:
    case EXAMPLE.SAVE:
    case EXAMPLE.UPDATE:
    case EXAMPLE.DELETE:
    case EXAMPLE.SUCCESS:
    case EXAMPLE.FAILURE:
      return merge({}, state, action.payload);
    default:
      return state;
  }
}
