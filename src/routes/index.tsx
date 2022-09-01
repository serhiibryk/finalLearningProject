import React from 'react';
import { Route as RouterDOM, Routes } from 'react-router-dom';

import { useAppSelector } from '../store/hooks/redux';
import PrivatRoute from './PrivatRoute';
import { routes } from './routes';
import useStyles from './style';

const Route = () => {
  const { token } = useAppSelector((state: any) => state.user);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        {routes.map((item) => {
          const { component, privat, path } = item;

          return (
            <RouterDOM
              key={path}
              path={path}
              element={privat ? <PrivatRoute auth={token}>{component}</PrivatRoute> : component}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Route;
