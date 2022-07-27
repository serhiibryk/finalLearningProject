import React from "react";
import { Routes, Route as RouterDOM } from "react-router-dom";
import { IRoutes, routes } from "./routes";

const Route = () => {
  return (
    <div>
      <Routes>
        {routes.map((item: IRoutes) => (
          <RouterDOM
            path={item.path}
            element={item.component}
            key={item.path}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Route;
