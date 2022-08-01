import { ReactNode } from "react";
import FilmByID from "../pages/FilmByID";
import TeamsFilms from "../pages/Films";
import Login from "../pages/Login";
import Main from "../pages/Main";
import PeopleByID from "../pages/PeopleByID";
import TeamsPeoples from "../pages/People";
import PlanetByID from "../pages/PlanetByID";
import TeamsPlanets from "../pages/Planets";
import Registration from "../pages/Registration";
import SpeccyByID from "../pages/SpeccyByID";
import TeamsSpecies from "../pages/Species";
import StarshipByID from "../pages/StarshipByID";
import TeamsStarships from "../pages/Starships";
import VehicleByID from "../pages/VehicleByID";
import TeamsVehicles from "../pages/Vehicles";

export interface IRoutes {
  path: string;
  component: ReactNode;
}

export const routes: IRoutes[] = [
  { path: "/login", component: <Login /> },
  { path: "/registration", component: <Registration /> },
  { path: "/", component: <Main /> },
  { path: "/people", component: <TeamsPeoples /> },
  { path: "/people/:id", component: <PeopleByID /> },
  { path: "/films", component: <TeamsFilms /> },
  { path: "/film/:id", component: <FilmByID /> },
  { path: "/planets", component: <TeamsPlanets /> },
  { path: "/planets/:id", component: <PlanetByID /> },
  { path: "/species", component: <TeamsSpecies /> },
  { path: "/species/:id", component: <SpeccyByID /> },
  { path: "/starships", component: <TeamsStarships /> },
  { path: "/starships/:id", component: <StarshipByID /> },
  { path: "/vehicles", component: <TeamsVehicles /> },
  { path: "/vehicles/:id", component: <VehicleByID /> },
];
