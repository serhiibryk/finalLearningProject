import React, { ReactNode } from 'react';
import FilmByID from '../pages/FilmByID';
import TeamsFilms from '../pages/Films';
import Login from '../pages/Login';
import Main from '../pages/Main';
import PeopleByID from '../pages/PeopleByID';
import TeamsPeoples from '../pages/People';
import PlanetByID from '../pages/PlanetByID';
import TeamsPlanets from '../pages/Planets';
import Registration from '../pages/Registration';
import SpeccyByID from '../pages/SpeccyByID';
import TeamsSpecies from '../pages/Species';
import StarshipByID from '../pages/StarshipByID';
import TeamsStarships from '../pages/Starships';
import VehicleByID from '../pages/VehicleByID';
import TeamsVehicles from '../pages/Vehicles';
import Profile from '../pages/Profile';
import Hexagon from '../pages/Hexagon';

export interface IRoutes {
  path: string;
  component: ReactNode;
  privat: boolean;
}

export const routes: IRoutes[] = [
  { path: '/login', component: <Login />, privat: false },
  { path: '/registration', component: <Registration />, privat: false },
  { path: '/', component: <Main />, privat: true },
  { path: '/people', component: <TeamsPeoples />, privat: true },
  { path: '/people/:id', component: <PeopleByID />, privat: true },
  { path: '/films', component: <TeamsFilms />, privat: true },
  { path: '/film/:id', component: <FilmByID />, privat: true },
  { path: '/planets', component: <TeamsPlanets />, privat: true },
  { path: '/planets/:id', component: <PlanetByID />, privat: true },
  { path: '/species', component: <TeamsSpecies />, privat: true },
  { path: '/species/:id', component: <SpeccyByID />, privat: true },
  { path: '/starships', component: <TeamsStarships />, privat: true },
  { path: '/starships/:id', component: <StarshipByID />, privat: true },
  { path: '/vehicles', component: <TeamsVehicles />, privat: true },
  { path: '/vehicles/:id', component: <VehicleByID />, privat: true },
  { path: '/profile', component: <Profile />, privat: true },
  { path: '/hexagon', component: <Hexagon />, privat: true },
];
