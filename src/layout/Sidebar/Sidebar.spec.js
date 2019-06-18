import React from 'react';

import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test_utils';
import SidebarContent from './index';

afterEach(cleanup);

test('should render SidebarContent', async () => {
  const component = renderWithRouter(<SidebarContent />);

  expect(component.baseElement).toMatchSnapshot();
});
