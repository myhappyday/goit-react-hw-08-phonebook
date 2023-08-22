import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from 'redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectIsLogged);

  return authenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
