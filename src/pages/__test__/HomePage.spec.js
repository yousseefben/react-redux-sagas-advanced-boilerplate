import React from 'react';

import { fireEvent, cleanup } from '@testing-library/react';
import HomePage from '../HomePage';
import { renderWithRedux } from '../../utils/test_utils';
import userManager from '../../redux/services/authentication/utils/userManager';

afterEach(cleanup);

test('should render HomePage', async () => {
  const component = renderWithRedux(<HomePage />);

  expect(component.baseElement).toMatchSnapshot();
});

test('should call signinRedirect', async () => {
  const { getByTestId } = renderWithRedux(<HomePage />);

  jest.spyOn(userManager, 'signinRedirect');

  fireEvent.click(getByTestId('btn-login'));
  expect(userManager.signinRedirect).toHaveBeenCalledTimes(1);
});
