import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateLayoutRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.accessToken && Date.now() / 1000 <= localStorage.exp ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateLayoutRoute;
