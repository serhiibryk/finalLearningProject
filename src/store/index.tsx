import React, { createContext, FC, ReactNode, useState } from "react";
import { localServiceGet } from "../utils";

export const StoreContext = createContext<any>(null);

interface IProps {
  children: ReactNode;
}

const StoreContextProvider: FC<IProps> = ({ children }: any) => {
  const [auth, setAuth] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData") || "")
  );

  return (
    <StoreContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
