import React, { createContext, FC, ReactNode, useState } from "react";

import { localStoreService } from "../utils";

export const StoreContext = createContext<any>(null);

interface IProps {
  children: ReactNode;
}

const StoreContextProvider: FC<IProps> = ({ children }: any) => {
  const [auth, setAuth] = useState(!!localStoreService.get("isLogged"));
  const [user, setUser] = useState(localStoreService.get("userData", "[]"));

  return (
    <StoreContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
