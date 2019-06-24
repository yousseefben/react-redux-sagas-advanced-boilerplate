import React from 'react';

import { fireEvent, cleanup } from '@testing-library/react';
import ExampleComponent from '../ExampleComponent';
import example from '../redux/exampleActions';
import { renderWithRedux } from '../../../utils/test_utils';

afterEach(cleanup);

const init = {
  initialState: {
    exampleData: {
      data: [
        {
          id: 1,
          title: 'title'
        }
      ],
      fetching: false
    }
  }
};

test('should dipsatch action and show loading', async () => {
  const { getByText } = renderWithRedux(<ExampleComponent />);

  jest.spyOn(example, 'get');

  fireEvent.click(getByText('Click here!'));
  expect(example.get).toHaveBeenCalledTimes(1);
});

test('should render example component', async () => {
  const { getByTestId } = renderWithRedux(<ExampleComponent />, init);

  expect(getByTestId('div')).toMatchSnapshot();
});
