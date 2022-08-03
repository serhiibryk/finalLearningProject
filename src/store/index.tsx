import React, { createContext, FC, ReactNode, useState } from "react";

export const StoreContext = createContext<any>(null);

interface IProps {
  children: ReactNode;
}

const StoreContextProvider: FC<IProps> = ({ children, path }: any) => {
  const [auth, setAuth] = useState(false);
  return (
    <StoreContext.Provider value={{ auth, setAuth }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
