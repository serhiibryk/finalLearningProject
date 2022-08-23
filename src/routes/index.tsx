import React from "react";
import { Route as RouterDOM, Routes } from "react-router-dom";

import { useAppSelector } from "../store/hooks/redux";
import PrivatRoute from "./PrivatRoute";
import { routes } from "./routes";

const Route = () => {
  const { token } = useAppSelector((state: any) => state.user);

  return (
    <Routes>
      {routes.map((item) => {
        const { component, privat, path } = item;

        // if (privat)
        //   return (
        //     <RouterDOM
        //       key={path}
        //       path={path}
        //       element={<PrivatRoute auth={token} children={component} />}
        //     />
        //   );

        return (
          <RouterDOM
            key={path}
            path={path}
            element={
              privat ? (
                <PrivatRoute auth={token} children={component} />
              ) : (
                component
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default Route;
