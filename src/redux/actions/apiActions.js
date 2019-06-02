import { createAction } from './actionsUtils';

const apiActions = entity => ({
  get: () =>
    createAction(entity.GET, { fetching: true, success: false, error: null }),
  getOne: id =>
    createAction(entity.GET_ONE, {
      id,
      fetching: true,
      success: false,
      error: null
    }),
  save: data =>
    createAction(entity.SAVE, {
      ...data,
      fetching: true,
      success: false,
      error: null
    }),
  put: (id, data) =>
    createAction(entity.PUT, {
      id,
      ...data,
      fetching: true,
      success: false,
      error: null
    }),
  patch: (id, data) =>
    createAction(entity.PATCH, {
      id,
      ...data,
      fetching: true,
      success: false,
      error: null
    }),
  delete: id =>
    createAction(entity.DELETE, {
      id,
      fetching: true,
      success: false,
      error: null
    }),
  success: data =>
    createAction(entity.SUCCESS, {
      ...data,
      fetching: false,
      success: true,
      error: null
    }),
  failure: error =>
    createAction(entity.FAILURE, { ...error, fetching: false, success: false })
});

export default apiActions;
