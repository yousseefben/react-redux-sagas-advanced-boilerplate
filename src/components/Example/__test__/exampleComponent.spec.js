import React from 'react';

import { fireEvent, cleanup, waitForElement } from '@testing-library/react';
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

test('can dipsatch action and show loading', async () => {
  const { getByText } = renderWithRedux(<ExampleComponent />);

  jest.spyOn(example, 'get');

  fireEvent.click(getByText('Click here!'));
  expect(example.get).toHaveBeenCalledTimes(1);
  await waitForElement(() => expect(getByText('Loading data ...')));
});

test('can render component', async () => {
  const { getByTestId } = renderWithRedux(<ExampleComponent />);

  expect(getByTestId('div')).toMatchSnapshot();
});
