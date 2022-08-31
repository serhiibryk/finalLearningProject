import React from 'react';
import { Route as RouterDOM, Routes } from 'react-router-dom';

import { useAppSelector } from '../store/hooks/redux';
import PrivatRoute from './PrivatRoute';
import { routes } from './routes';

const Route = () => {
  const { token } = useAppSelector((state: any) => state.user);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 75px' }}>
      <Routes>
        {routes.map((item) => {
          const { component, privat, path } = item;

          return (
            <RouterDOM
              key={path}
              path={path}
              element={privat ? <PrivatRoute auth={token} children={component} /> : component}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Route;
