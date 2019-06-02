import { createAction, createActionTypes } from './actionsUtils';

describe('action utils', () => {
  describe('action type creator', () => {
    it('should return action type', () => {
      expect(createActionTypes('TEST', ['GET', 'POST'])).toMatchSnapshot();
    });
  });
  describe('action creator', () => {
    it('should return action', () => {
      expect(createAction('TEST', { a: '1' })).toMatchSnapshot(1);
    });
  });
});
