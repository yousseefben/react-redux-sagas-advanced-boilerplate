import reducer from '../exampleReducer';
import { EXAMPLE } from '../../../../common/actions/types';

const initialState = {
  data: [
    {
      q: 'react'
    }
  ],
  fetching: false,
  success: false,
  error: null
};

describe('Example', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
  it('should return actual state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
    expect(reducer(initialState, { type: 'TEST' })).toMatchSnapshot();
  });

  it(`should handle ${EXAMPLE.GET}`, () => {
    expect(
      reducer(undefined, {
        type: EXAMPLE.GET,
        payload: { q: 'react' }
      })
    ).toMatchSnapshot();
  });
  it(`should handle ${EXAMPLE.SAVE}`, () => {
    expect(
      reducer(undefined, {
        type: EXAMPLE.SAVE,
        payload: { q: 'react' }
      })
    ).toMatchSnapshot();
  });
});
