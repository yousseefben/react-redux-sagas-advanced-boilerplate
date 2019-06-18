import React from 'react';

import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test_utils';
import MainLayout from './index';

afterEach(cleanup);

test('should render MainLayout', async () => {
  const component = renderWithRouter(<MainLayout />);

  expect(component.baseElement).toMatchSnapshot();
});
