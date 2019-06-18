import React from 'react';

import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../utils/test_utils';
import HeaderContent from './index';

afterEach(cleanup);

test('should render HeaderContent', async () => {
  const component = renderWithRedux(<HeaderContent />);

  expect(component.baseElement).toMatchSnapshot();
});
