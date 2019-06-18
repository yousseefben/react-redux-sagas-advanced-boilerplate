import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import userManager from './utils/userManager';
import { history } from '../../../utils/history';

const CallbackPage = () => {
  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={() => history.push('/')}
      errorCallback={() => {
        history.push('/');
      }}
    >
      <div>Redirecting...</div>
    </CallbackComponent>
  );
};

export default CallbackPage;
