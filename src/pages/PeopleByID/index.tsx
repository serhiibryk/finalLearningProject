import { Card, Divider, Space, Spin, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { filmsService } from "../../services/films";

import { peopleService } from "../../services/people";
import { planetsService } from "../../services/planets";
import { speciesService } from "../../services/species";
import { starshipsService } from "../../services/starships";
import { vehiclesService } from "../../services/vehicles";

import useStyles from "./style";

const { Meta } = Card;

const PeopleByID = () => {
  const [peoplesList, setPeopleList] = useState<People | null>(null);
  const [filmsList, setFilmsList] = useState<Films[] | null>(null);
  const [planetsList, setPlanetsList] = useState<Planets | null>(null);
  const [speciesList, setSpeciesList] = useState<Species[] | null>(null);
  const [starshipsList, setStarshipsList] = useState<Starships[] | null>(null);
  const [vehiclesList, setVehiclesList] = useState<Vehicles[] | null>(null);

  const location = useLocation();

  const classes = useStyles();

  const fetchPeopleByID = async (id: number) => {
    peopleService.getPeopleByID(id).then((resByID) => {
      setPeopleList(resByID.data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];

    fetchPeopleByID(Number(id));
  }, []);

  useEffect(() => {
    if (peoplesList) {
      (async () => {
        const idsFilms = peoplesList.films.map((film) => film.split("/")[5]);
        const films = await Promise.all(
          idsFilms.map(
            async (id) =>
              await filmsService
                .getFilmByID(Number(id))
                .then((resByID) => resByID.data)
          )
        );

        setFilmsList(films);

        const idsPlanets = peoplesList.homeworld.split("/")[5];
        const planets = await planetsService
          .getPlanetByID(Number(idsPlanets))
          .then((resByID) => resByID.data);

        setPlanetsList(planets);

        const idsSpecies = peoplesList.species.map(
          (speccy) => speccy.split("/")[5]
        );
        const species = await Promise.all(
          idsSpecies.map(
            async (id) =>
              await speciesService
                .getSpeccyByID(Number(id))
                .then((resByID) => resByID.data)
          )
        );

        setSpeciesList(species);

        const idsStarships = peoplesList.starships.map(
          (starship) => starship.split("/")[5]
        );
        const starships = await Promise.all(
          idsStarships.map(
            async (id) =>
              await starshipsService
                .getStarshipByID(Number(id))
                .then((resByID) => resByID.data)
          )
        );

        setStarshipsList(starships);

        const idsVehicles = peoplesList.vehicles.map(
          (vehicle) => vehicle.split("/")[5]
        );
        const vehicles = await Promise.all(
          idsVehicles.map(
            async (id) =>
              await vehiclesService
                .getVehicleByID(Number(id))
                .then((resByID) => resByID.data)
          )
        );

        setVehiclesList(vehicles);
      })();
    }
  }, [peoplesList]);

  if (
    peoplesList === null ||
    filmsList === null ||
    planetsList === null ||
    speciesList === null ||
    starshipsList === null ||
    vehiclesList === null
  )
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );

  return (
    <div className={classes.peopleByIDContainer}>
      <Card className={classes.card} hoverable>
        <Divider orientation="left">Name of people:</Divider>
        <Meta title={peoplesList.name} />
        <Divider orientation="left">Birth-year of people:</Divider>
        <Meta title={peoplesList.birth_year} />
        <Divider orientation="left">Gender:</Divider>
        <Meta title={peoplesList.gender} />
        <Divider orientation="left">Films:</Divider>
        <div>
          {filmsList.map((film) => (
            <Tag color="geekblue">{film.title}</Tag>
          ))}
        </div>
        <Divider orientation="left">Created:</Divider>
        <Meta title={peoplesList.created} />
        <Divider orientation="left">Edited:</Divider>
        <Meta title={peoplesList.edited} />
        <Divider orientation="left">Eye color:</Divider>
        <Meta title={peoplesList.eye_color} />
        <Divider orientation="left">Hair_color:</Divider>
        <Meta title={peoplesList.hair_color} />
        <Divider orientation="left">Height:</Divider>
        <Meta title={peoplesList.height} />
        <Divider orientation="left">Homeworld:</Divider>
        <Meta title={planetsList.name} />
        <Divider orientation="left">Mass:</Divider>
        <Meta title={peoplesList.mass} />
        <Divider orientation="left">Skin_color:</Divider>
        <Meta title={peoplesList.skin_color} />
        <Divider orientation="left">Species:</Divider>
        <div>
          {speciesList.map((speccy) => (
            <Tag color="geekblue">{speccy.name}</Tag>
          ))}
        </div>
        <Divider orientation="left">Starships:</Divider>
        <div>
          {starshipsList.map((starship) => (
            <Tag color="geekblue">{starship.name}</Tag>
          ))}
        </div>
        <Divider orientation="left">Vehicles:</Divider>
        <div>
          {vehiclesList.map((vehicle) => (
            <Tag color="geekblue">{vehicle.name}</Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PeopleByID;
