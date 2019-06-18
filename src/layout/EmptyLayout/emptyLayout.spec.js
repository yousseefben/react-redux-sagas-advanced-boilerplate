import React from 'react';

import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../utils/test_utils';
import EmptyLayout from './index';

afterEach(cleanup);

test('should render EmptyLayout', async () => {
  const component = renderWithRedux(<EmptyLayout />);

  expect(component.baseElement).toMatchSnapshot();
});
