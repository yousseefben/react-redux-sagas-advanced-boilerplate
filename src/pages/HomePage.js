import React from 'react';
import { Button } from 'antd';
import userManager from '../common/services/authentication/utils/userManager';

const ExampleComponent = React.lazy(() =>
  import('../containers/Example/ExampleComponent')
);

const HomePage = () => (
  <div data-testid="home">
    <Button
      data-testid="btn-login"
      onClick={() => {
        userManager.signinRedirect();
      }}
    >
      Log In
    </Button>
    <React.Suspense fallback={<div>Loading Example...</div>}>
      <ExampleComponent />
    </React.Suspense>
  </div>
);
export default HomePage;
