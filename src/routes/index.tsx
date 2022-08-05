import React, { useContext } from "react";
import { Route as RouterDOM, Routes } from "react-router-dom";

import { StoreContext } from "../store";
import PrivatRoute from "./PrivatRoute";
import { routes } from "./routes";

const Route = () => {
  const context = useContext(StoreContext);

  return (
    <Routes>
      {routes.map((item) => {
        const { component, privat, path } = item;

        if (privat)
          return (
            <RouterDOM
              key={path}
              path={path}
              element={<PrivatRoute auth={context.auth} children={component} />}
            />
          );

        return <RouterDOM key={path} path={path} element={component} />;
      })}
    </Routes>
  );
};

export default Route;
