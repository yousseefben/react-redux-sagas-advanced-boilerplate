import { createActionTypes } from './actionsUtils';

export const EXAMPLE = createActionTypes('EXAMPLE', [
  'GET',
  'GET_ONE',
  'SAVE',
  'PUT',
  'PATCH',
  'DELETE',
  'SUCCESS',
  'FAILURE'
]);

// export default EXAMPLE;
