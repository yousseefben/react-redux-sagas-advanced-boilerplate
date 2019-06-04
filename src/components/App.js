import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from '../redux/services/history';
import HomePage from '../pages/HomePage';
import CallbackPage from '../redux/services/authentication/callback';

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage} />
      <Route path="/callback" component={CallbackPage} />
    </Router>
  );
};
export default App;
