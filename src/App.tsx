import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import TeamsPeoples from "./pages/Peoples";
import TeamsFilms from "./pages/Films";
import TeamsPlanets from "./pages/Planets";
import TeamsSpecies from "./pages/Species";
import TeamsStarships from "./pages/Starships";
import TeamsVehicles from "./pages/Vehicles";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

import "./App.css";
import FilmByID from "./pages/FilmByID";
import PeopleByID from "./pages/PeopleByID";
import PlanetByID from "./pages/PlanetByID";
import SpeccyByID from "./pages/SpeccyByID";
import StarshipsByID from "./pages/StarshipByID";
import StarshipByID from "./pages/StarshipByID";
import VehicleByID from "./pages/VehicleByID";

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <BrowserRouter>
        <Header />
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Main />} />
            <Route path="/peoples" element={<TeamsPeoples />} />
            <Route path="/people/:id" element={<PeopleByID />} />
            <Route path="/films" element={<TeamsFilms />} />
            <Route path="/film/:id" element={<FilmByID />} />
            <Route path="/planets" element={<TeamsPlanets />} />
            <Route path="/planets/:id" element={<PlanetByID />} />
            <Route path="/species" element={<TeamsSpecies />} />
            <Route path="/species/:id" element={<SpeccyByID />} />
            <Route path="/starships" element={<TeamsStarships />} />
            <Route path="/starships/:id" element={<StarshipByID />} />
            <Route path="/vehicles" element={<TeamsVehicles />} />
            <Route path="/vehicles/:id" element={<VehicleByID />} />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
