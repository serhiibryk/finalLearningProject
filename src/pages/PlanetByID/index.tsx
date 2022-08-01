import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Divider, Tag } from "antd";

import CardRow from "../../components/cardRow";
import Spiner from "../../components/spiner";
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
    planetsService.getPlanetByID(id).then((resByID) => {
      setPlanetsList(resByID.data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];

    fetchPlanetByID(Number(id));
  }, []);

  useEffect(() => {
    if (planetsList) {
      (async () => {
        const idsFilms = planetsList.films.map(
          (planet) => planet.split("/")[5]
        );
        const films = await Promise.all(
          idsFilms.map(
            async (id) =>
              await filmsService
                .getFilmByID(Number(id))
                .then((resByID) => resByID.data)
          )
        );

        setFilmsList(films);

        const idsPeople = planetsList.residents.map(
          (people) => people.split("/")[5]
        );
        const people = await Promise.all(
          idsPeople.map(
            async (id) =>
              await peopleService
                .getPeopleByID(Number(id))
                .then((resByID) => resByID.data)
          )
        );

        setPeopleList(people);
      })();
    }
  }, [planetsList]);

  if (planetsList === null || filmsList === null || peopleList === null)
    return <Spiner classes={classes.spiner} />;

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
        <Divider orientation="left">Films:</Divider>
        <div>
          {filmsList.map((film) => (
            <Tag color="geekblue">{film.title}</Tag>
          ))}
        </div>
        <Divider orientation="left">Residents:</Divider>
        <div>
          {peopleList.map((people) => (
            <Tag color="geekblue">{people.name}</Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PlanetByID;
