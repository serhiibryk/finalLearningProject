import React from "react";
import { Route as RouterDOM, Routes } from "react-router-dom";

import PrivatRoute from "./PrivatRoute";
import { routes } from "./routes";

const Route = () => {
  return (
    <Routes>
      {routes.map((item) => {
        const { component, privat, path } = item;

        if (privat)
          return (
            <RouterDOM
              key={path}
              path={path}
              element={<PrivatRoute auth={false} children={component} />}
            />
          );

        return <RouterDOM key={path} path={path} element={component} />;
      })}
    </Routes>
  );
};

export default Route;
