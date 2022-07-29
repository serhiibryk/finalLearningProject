import { Card, Divider, Space, Spin, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { filmsService } from "../../services/films";
import { peopleService } from "../../services/people";
import { planetsService } from "../../services/planets";

import { speciesService } from "../../services/species";

import useStyles from "./style";

const { Meta } = Card;

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

  console.log("filmList", filmsList);
  console.log("planetList", planetsList);
  console.log("planetList", speciesList);

  if (speciesList === null || filmsList === null || peopleList === null)
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );

  return (
    <div className={classes.speccyByIDContainer}>
      <Card className={classes.card} hoverable>
        <Divider orientation="left">Name:</Divider>
        <Meta title={speciesList.name} />
        <Divider orientation="left">Classification: </Divider>
        <Meta title={speciesList.classification} />
        <Divider orientation="left">Average height:</Divider>
        <Meta title={speciesList.average_height} />
        <Divider orientation="left">Average lifespan:</Divider>
        <Meta title={speciesList.average_lifespan} />
        <Divider orientation="left">Classification:</Divider>
        <Meta title={speciesList.classification} />
        <Divider orientation="left">Created:</Divider>
        <Meta title={speciesList.created} />
        <Divider orientation="left">Designation:</Divider>
        <Meta title={speciesList.designation} />
        <Divider orientation="left">Edited:</Divider>
        <Meta title={speciesList.edited} />
        <Divider orientation="left">Eye colors:</Divider>
        <Meta title={speciesList.eye_colors} />
        <Divider orientation="left">Films:</Divider>
        <div>
          {filmsList.map((film) => (
            <Tag color="geekblue">{film.title}</Tag>
          ))}
        </div>
        <Divider orientation="left">Hair colors:</Divider>
        <Meta title={speciesList.hair_colors} />
        {planetsList?.name && (
          <>
            <Divider orientation="left">Homeworld:</Divider>
            <Meta title={planetsList.name} />
          </>
        )}
        <Divider orientation="left">Language:</Divider>
        <Meta title={speciesList.language} />
        <Divider orientation="left">People:</Divider>
        <div>
          {peopleList.map((people) => (
            <Tag color="geekblue">{people.name}</Tag>
          ))}
        </div>
        <Divider orientation="left">Skin colors:</Divider>
        <Meta title={speciesList.skin_colors} />
      </Card>
    </div>
  );
};

export default SpeccyByID;
