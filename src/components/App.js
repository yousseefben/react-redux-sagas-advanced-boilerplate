import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from '../utils/history';
import HomePage from '../pages/HomePage';
import CallbackPage from '../redux/services/authentication/callback';
import LayoutRoute from '../layout/Route/LayoutRoute';
import MainLayout from '../layout/Main';
import PrivateLayoutRoute from '../layout/Route/PrivateLayoutRoute';
import EmptyLayout from '../layout/EmptyLayout';
import ExampleComponent from './Example/ExampleComponent';

const App = () => {
  return (
    <Router history={history}>
      <LayoutRoute path="/" layout={MainLayout} component={HomePage} />
      <PrivateLayoutRoute
        path="/private"
        layout={EmptyLayout}
        component={ExampleComponent}
      />
      <Route path="/callback" component={CallbackPage} />
    </Router>
  );
};
export default App;
