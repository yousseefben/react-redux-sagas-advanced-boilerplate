import React from 'react';

import { cleanup } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from '../../utils/test_utils';

afterEach(cleanup);

test('should render App', async () => {
  const component = renderWithRedux(<App />);

  expect(component.baseElement).toMatchSnapshot();
});
