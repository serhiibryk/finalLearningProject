import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "antd";

import CardRow from "../../components/CardRow";
import Spiner from "../../components/Spiner";
import MapFieldsByID from "../../components/MapOfFieldsByID";
import { filmsService } from "../../services/films";
import { peopleService } from "../../services/people";
import { planetsService } from "../../services/planets";

import useStyles from "./style";

const PlanetByID = () => {
  const [planetsList, setPlanetsList] = useState<Planets | null>(null);
  const [filmsList, setFilmsList] = useState<Films[] | null>(null);
  const [peopleList, setPeopleList] = useState<People[] | null>(null);

  const location = useLocation();
  const classes = useStyles();

  const fetchPlanetByID = async (id: number) => {
    planetsService.getPlanetByID(id).then((data) => {
      setPlanetsList(data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];

    fetchPlanetByID(Number(id));
  }, [location.pathname]);

  useEffect(() => {
    if (planetsList) {
      (async () => {
        const idsFilms = planetsList.films.map(
          (planet) => planet.split("/")[5]
        );
        const films = await Promise.all(
          idsFilms.map(
            async (id) =>
              await filmsService.getFilmByID(Number(id)).then((data) => data)
          )
        );

        setFilmsList(films);

        const idsPeople = planetsList.residents.map(
          (people) => people.split("/")[5]
        );
        const people = await Promise.all(
          idsPeople.map(
            async (id) =>
              await peopleService.getPeopleByID(Number(id)).then((data) => data)
          )
        );

        setPeopleList(people);
      })();
    }
  }, [planetsList]);

  if (planetsList === null || filmsList === null || peopleList === null)
    return <Spiner />;

  return (
    <div className={classes.planetByIDContainer}>
      <Card className={classes.card} hoverable>
        <CardRow title={planetsList.name} lable="Name of palnet:" />
        <CardRow title={planetsList.climate} lable="Climate of planet:" />
        <CardRow title={planetsList.created} lable="Created:" />
        <CardRow title={planetsList.diameter} lable="Diameter:" />
        <CardRow title={planetsList.edited} lable="Edited:" />
        <CardRow title={planetsList.gravity} lable="Gravity:" />
        <CardRow title={planetsList.orbital_period} lable="Orbital period:" />
        <CardRow title={planetsList.population} lable="Population:" />
        <CardRow title={planetsList.rotation_period} lable="Rotation period:" />
        <CardRow title={planetsList.surface_water} lable="Surface water:" />
        <CardRow title={planetsList.terrain} lable="Terrain:" />
        <MapFieldsByID list={filmsList} title={"title"} lable={"Films"} />
        <MapFieldsByID list={peopleList} title={"name"} lable={"Residents"} />
      </Card>
    </div>
  );
};

export default PlanetByID;
