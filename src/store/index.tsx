// import React, { createContext, FC, ReactNode, useState } from "react";
// // import { configureStore } from "@reduxjs/toolkit";

// import { localStoreService } from "../utils";

// export const StoreContext = createContext<--->(null);

// interface IProps {
//   children: ReactNode;
// }

// const StoreContextProvider: FC<IProps> = ({ children }: ---) => {
//   const [auth, setAuth] = useState(localStoreService.get("user"));
//   const [user, setUser] = useState(localStoreService.get("userData", "[]"));

//   return (
//     <StoreContext.Provider value={{ auth, setAuth, user, setUser }}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './user/reducer';
import userData from './userData/reducer';
import films from './films/reducer';
import people from './people/reducer';
import planets from './planets/reducer';
import specy from './specy/reducer';
import starships from './starships/reducer';
import vehicles from './vehicles/reducer';
import page from './pageAntd/reducer';
import stateForScroll from './infiniteScroll/reducer';
import isDarkMode from './darkMode/reducer';

const rootReducer = combineReducers({
  user,
  userData,
  films,
  people,
  planets,
  specy,
  starships,
  vehicles,
  page,
  stateForScroll,
  isDarkMode,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
