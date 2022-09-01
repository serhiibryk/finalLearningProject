import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface IPrivateRoute {
  children: React.ReactNode;
  auth: boolean;
}

const PrivatRoute: FC<IPrivateRoute> = ({ children, auth }) => {
  if (!auth) {
    return <Navigate to={'/login'} />;
  }
  return children as JSX.Element;
};

export default PrivatRoute;
