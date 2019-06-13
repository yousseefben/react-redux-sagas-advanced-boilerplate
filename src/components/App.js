import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from '../redux/services/history';
import HomePage from '../pages/HomePage';
import CallbackPage from '../redux/services/authentication/callback';
import LayoutRoute from '../layout/Route/LayoutRoute';
import MainLayout from '../layout/Main';

const App = () => {
  return (
    <Router history={history}>
      <LayoutRoute path="/" layout={MainLayout} component={HomePage} />
      <Route path="/callback" component={CallbackPage} />
    </Router>
  );
};
export default App;
