import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: React.ReactNode;
  auth: boolean;
}

const PrivatRoute: FC<IPrivateRoute> = ({ children, auth }) => {
  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children as ReactElement<any>;
};

export default PrivatRoute;
