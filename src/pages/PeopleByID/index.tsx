import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

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
  const [starshipsList, setStarshipsList] = useState<Vehicles[] | null>(null);
  const [vehiclesList, setVehiclesList] = useState<Vehicles[] | null>(null);

  const { t } = useTranslation();

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
  }, [location.pathname]);

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
    return <Spiner />;

  return (
    <div className={classes.peopleByIDContainer}>
      <Card className={classes.card} hoverable>
        <CardRow title={peoplesList.name} lable={t("nameOfPeople")} />
        <CardRow title={peoplesList.birth_year} lable={t("birthDayOfPeople")} />
        <CardRow title={peoplesList.gender} lable={t("gender")} />
        <CardRow title={peoplesList.created} lable={t("created")} />
        <CardRow title={peoplesList.edited} lable={t("edited")} />
        <CardRow title={peoplesList.eye_color} lable={t("eye")} />
        <CardRow title={peoplesList.hair_color} lable={t("hair")} />
        <CardRow title={peoplesList.height} lable={t("height")} />
        <CardRow title={planetsList.name} lable={t("homeworld")} />
        <CardRow title={peoplesList.mass} lable={t("mass")} />
        <CardRow title={peoplesList.skin_color} lable={t("skin")} />
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
