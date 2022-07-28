import { Card, Divider, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { filmsService } from "../../services/films";
import { peopleService } from "../../services/people";

import { planetsService } from "../../services/planets";

import useStyles from "./style";

const { Meta } = Card;

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
    return <div>Loading...</div>;

  return (
    <div className={classes.planetByIDContainer}>
      <Card className={classes.card} hoverable>
        <Divider orientation="left">Name of palnet: </Divider>
        <Meta title={planetsList.name} />
        <Divider orientation="left">Climate of planet: </Divider>
        <Meta title={planetsList.climate} />
        <Divider orientation="left">Created: </Divider>
        <Meta title={planetsList.created} />
        <Divider orientation="left">Diameter: </Divider>
        <Meta title={planetsList.diameter} />
        <Divider orientation="left">Edited:</Divider>
        <Meta title={planetsList.edited} />
        <Divider orientation="left">Films:</Divider>
        <div>
          {filmsList.map((film) => (
            <Tag color="geekblue">{film.title}</Tag>
          ))}
        </div>
        <Divider orientation="left">Gravity:</Divider>
        <Meta title={planetsList.gravity} />
        <Divider orientation="left">Orbital period:</Divider>
        <Meta title={planetsList.orbital_period} />
        <Divider orientation="left">Population:</Divider>
        <Meta title={planetsList.population} />
        <Divider orientation="left">Rotation period:</Divider>
        <Meta title={planetsList.rotation_period} />
        <Divider orientation="left">Residents:</Divider>
        <div>
          {peopleList.map((people) => (
            <Tag color="geekblue">{people.name}</Tag>
          ))}
        </div>
        <Divider orientation="left">Surface water:</Divider>
        <Meta title={planetsList.surface_water} />
        <Divider orientation="left">Terrain:</Divider>
        <Meta title={planetsList.terrain} />
      </Card>
    </div>
  );
};

export default PlanetByID;
