import React from 'react';
import userManager from '../redux/services/authentication/utils/userManager';

const ExampleComponent = React.lazy(() =>
  import('../components/Example/ExampleComponent')
);

const HomePage = () => (
  <div>
    hello
    <React.Suspense fallback={<div>Loading ...</div>}>
      <ExampleComponent />
      <button
        onClick={() => {
          userManager.signinRedirect();
        }}
      >
        Log In
      </button>
    </React.Suspense>
  </div>
);
export default HomePage;
