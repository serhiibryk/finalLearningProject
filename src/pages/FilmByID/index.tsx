import { Card, Divider, Space, Spin, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { filmsService } from "../../services/films";
import { planetsService } from "../../services/planets";
import { speciesService } from "../../services/species";
import { starshipsService } from "../../services/starships";
import { vehiclesService } from "../../services/vehicles";

import useStyles from "./style";

const { Meta } = Card;

const FilmByID = () => {
  const [filmsList, setFilmsList] = useState<Films | null>(null);
  const [planetsList, setPlanetsList] = useState<Planets[] | null>(null);
  const [speciesList, setSpeciesList] = useState<Species[] | null>(null);
  const [starshipsList, setStarshipsList] = useState<Starships[] | null>(null);
  const [vehiclesList, setVehiclesList] = useState<Vehicles[] | null>(null);

  const location = useLocation();
  const classes = useStyles();

  const fetchFilmsByID = async (id: number) => {
    filmsService.getFilmByID(id).then((resByID) => {
      setFilmsList(resByID.data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];

    fetchFilmsByID(Number(id));
  }, []);

  const getPlanetByID = async (id: number) => {
    planetsService.getPlanetByID(id).then((resByID) => {
      setPlanetsList(resByID.data);
    });
  };

  useEffect(() => {
    if (filmsList) {
      (async () => {
        const idsFilms = filmsList.planets.map(
          (planet) => planet.split("/")[5]
        );
        const planets = await Promise.all(
          idsFilms.map(
            async (id) =>
              await planetsService
                .getPlanetByID(Number(id))
                .then((resByID) => resByID.data)
          )
        );

        setPlanetsList(planets);

        const idsVehicles = filmsList.vehicles.map(
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

        const idsSpecies = filmsList.species.map(
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

        const idsStarships = filmsList.starships.map(
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
      })();
    }
  }, [filmsList]);

  if (
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
    <div className={classes.filmByIDContainer}>
      <Card className={classes.card} hoverable>
        <Divider orientation="left">Title of the film:</Divider>
        <Meta title={filmsList.title} />
        <Divider orientation="left">Director:</Divider>
        <Meta title={filmsList.director} />
        <Divider orientation="left">Producer:</Divider>
        <Meta title={filmsList.producer} />
        <Divider orientation="left">Edited:</Divider>
        <Meta title={filmsList.edited} />
        <Divider orientation="left">Episode_id:</Divider>
        <Meta title={filmsList.episode_id} />
        <Divider orientation="left">Opening_crawl:</Divider>
        <p className={classes.textP}>{filmsList.opening_crawl}</p>
        <Divider orientation="left">Planets:</Divider>
        <div>
          {planetsList.map((planet) => (
            <Tag color="geekblue">{planet.name}</Tag>
          ))}
        </div>
        <Divider orientation="left">Release_date:</Divider>
        <Meta title={filmsList.release_date} />
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
        <Divider orientation="left">Vehicles: </Divider>
        <div>
          {vehiclesList.map((vehicle) => (
            <Tag color="geekblue">{vehicle.name}</Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FilmByID;
