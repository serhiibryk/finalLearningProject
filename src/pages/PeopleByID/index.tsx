import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "antd";

import CardRow from "../../components/CardRow";
import Spiner from "../../components/Spiner";
import MapFieldsByID from "../../components/MapOfFieldsByID";
import { filmsService } from "../../services/films";
import { peopleService } from "../../services/people";
import { planetsService } from "../../services/planets";
import { speciesService } from "../../services/species";
import { starshipsService } from "../../services/starships";
import { vehiclesService } from "../../services/vehicles";

import useStyles from "./style";

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
    peopleService.getPeopleByID(id).then((data) => {
      setPeopleList(data);
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
              await filmsService.getFilmByID(Number(id)).then((data) => data)
          )
        );

        setFilmsList(films);

        const idsPlanets = peoplesList.homeworld.split("/")[5];
        const planets = await planetsService
          .getPlanetByID(Number(idsPlanets))
          .then((data) => data);

        setPlanetsList(planets);

        const idsSpecies = peoplesList.species.map(
          (speccy) => speccy.split("/")[5]
        );
        const species = await Promise.all(
          idsSpecies.map(
            async (id) =>
              await speciesService
                .getSpeccyByID(Number(id))
                .then((data) => data)
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
                .then((data) => data)
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
                .then((data) => data)
          )
        );

        setVehiclesList(vehicles);
      })();
    }
  }, [peoplesList]);

  if (
    !peoplesList ||
    !filmsList ||
    !planetsList ||
    !speciesList ||
    !starshipsList ||
    !vehiclesList
  )
    return <Spiner classes={classes.spiner} />;

  return (
    <div className={classes.peopleByIDContainer}>
      <Card className={classes.card} hoverable>
        <CardRow title={peoplesList.name} lable="Name of people:" />
        <CardRow title={peoplesList.birth_year} lable="Birth-year of people:" />
        <CardRow title={peoplesList.gender} lable="Gender:" />
        <CardRow title={peoplesList.created} lable="Created:" />
        <CardRow title={peoplesList.edited} lable="Edited:" />
        <CardRow title={peoplesList.eye_color} lable="Eye color:" />
        <CardRow title={peoplesList.hair_color} lable="Hair_color:" />
        <CardRow title={peoplesList.height} lable="Height:" />
        <CardRow title={planetsList.name} lable="Homeworld:" />
        <CardRow title={peoplesList.mass} lable="Mass:" />
        <CardRow title={peoplesList.skin_color} lable="Skin_color:" />
        <MapFieldsByID list={filmsList} title={"title"} lable={"Films"} />
        <MapFieldsByID list={speciesList} title={"name"} lable={"Species"} />
        <MapFieldsByID
          list={starshipsList}
          title={"name"}
          lable={"Starships"}
        />
        <MapFieldsByID list={vehiclesList} title={"name"} lable={"Vehicles"} />
      </Card>
    </div>
  );
};

export default PeopleByID;
