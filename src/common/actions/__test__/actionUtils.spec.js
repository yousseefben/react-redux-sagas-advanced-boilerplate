import { createAction, createActionTypes } from '../actionsUtils';

describe('action utils', () => {
  it('should return action type', () => {
    expect(createActionTypes('TEST', ['GET', 'POST'])).toMatchSnapshot();
  });

  it('should return action type with no actions', () => {
    expect(createActionTypes('TEST')).toMatchSnapshot();
  });
  it('should return action', () => {
    expect(createAction('TEST', { a: '1' })).toMatchSnapshot();
  });

  it('should return action with no data', () => {
    expect(createAction('TEST')).toMatchSnapshot();
  });
});
