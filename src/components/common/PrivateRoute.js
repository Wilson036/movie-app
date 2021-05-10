import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: 'singIn',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
