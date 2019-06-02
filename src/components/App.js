import React from 'react';

const ExampleComponent = React.lazy(() => import('./Example/ExampleComponent'));

const App = () => (
  <div>
    hello
    <React.Suspense fallback={<div>Loading ...</div>}>
      <ExampleComponent />
    </React.Suspense>
  </div>
);
export default App;
