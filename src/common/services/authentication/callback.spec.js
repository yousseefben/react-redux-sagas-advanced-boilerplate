import React from 'react';

import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '../../../utils/test_utils';
import CallbackPage from './callback';

afterEach(cleanup);

test('should render callback page', async () => {
  const component = renderWithRouter(<CallbackPage />);

  expect(component.baseElement).toMatchSnapshot();
});
