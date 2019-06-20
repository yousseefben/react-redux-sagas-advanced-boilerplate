import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from '../utils/history';
import CallbackPage from '../redux/services/authentication/callback';
import LayoutRoute from '../layout/Route/LayoutRoute';
import MainLayout from '../layout/Main';
import PrivateLayoutRoute from '../layout/Route/PrivateLayoutRoute';
import EmptyLayout from '../layout/EmptyLayout';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const ExampleComponent = React.lazy(() => import('./Example/ExampleComponent'));
const App = () => {
  return (
    <Router history={history}>
      <React.Suspense fallback={<div>Loading home...</div>}>
        <LayoutRoute path="/" layout={MainLayout} component={HomePage} />
        <PrivateLayoutRoute
          path="/private"
          layout={EmptyLayout}
          component={ExampleComponent}
        />
        <Route path="/callback" component={CallbackPage} />
      </React.Suspense>
    </Router>
  );
};
export default App;
