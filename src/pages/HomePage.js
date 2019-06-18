import React from 'react';
import { Button } from 'antd';
import userManager from '../redux/services/authentication/utils/userManager';

const ExampleComponent = React.lazy(() =>
  import('../components/Example/ExampleComponent')
);

const HomePage = () => (
  <div data-testid="home">
    hello
    <React.Suspense fallback={<div>Loading ...</div>}>
      <ExampleComponent />
      <Button
        data-testid="btn-login"
        onClick={() => {
          userManager.signinRedirect();
        }}
      >
        Log In
      </Button>
    </React.Suspense>
  </div>
);
export default HomePage;
