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

import useStyles from "./style";

const SpeccyByID = () => {
  const [speciesList, setSpeciesList] = useState<Species | null>(null);
  const [filmsList, setFilmsList] = useState<Films[] | null>(null);
  const [planetsList, setPlanetsList] = useState<Planets | null>(null);
  const [peopleList, setPeopleList] = useState<People[] | null>(null);

  const location = useLocation();
  const classes = useStyles();

  const fetchSpeccyByID = async (id: number) => {
    speciesService.getSpeccyByID(id).then((resByID) => {
      setSpeciesList(resByID.data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];

    fetchSpeccyByID(Number(id));
  }, []);

  useEffect(() => {
    if (speciesList) {
      (async () => {
        const idsFilms = speciesList.films.map(
          (speccy) => speccy.split("/")[5]
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

        const idsPlanets = speciesList.homeworld?.split("/")[5];
        if (idsPlanets) {
          const planets = await planetsService
            .getPlanetByID(Number(idsPlanets))
            .then((resByID) => resByID.data);

          setPlanetsList(planets);
        }

        const idsPeople = speciesList.people.map(
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
  }, [speciesList]);

  if (speciesList === null || filmsList === null || peopleList === null)
    return <Spiner classes={classes.spiner} />;

  return (
    <div className={classes.speccyByIDContainer}>
      <Card className={classes.card} hoverable>
        <CardRow title={speciesList.name} lable="Name:" />
        <CardRow title={speciesList.classification} lable="Classification:" />
        <CardRow title={speciesList.average_height} lable="Average height:" />
        <CardRow
          title={speciesList.average_lifespan}
          lable="Average lifespan:"
        />
        <CardRow title={speciesList.classification} lable="Classification:" />
        <CardRow title={speciesList.created} lable="Created:" />
        <CardRow title={speciesList.designation} lable="Designation:" />
        <CardRow title={speciesList.edited} lable="Edited:" />
        <CardRow title={speciesList.eye_colors} lable="Eye colors:" />
        <CardRow title={speciesList.hair_colors} lable="Hair colors:" />
        <CardRow title={speciesList.language} lable="Language:" />
        {planetsList?.name && (
          <>
            <CardRow title={planetsList.name} lable="Homeworld:" />
          </>
        )}
        <MapFieldsByID list={filmsList} title={"title"} lable={"Films"} />
        <MapFieldsByID list={peopleList} title={"name"} lable={"People"} />
      </Card>
    </div>
  );
};

export default SpeccyByID;
