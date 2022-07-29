import React, { useEffect, useState } from "react";
import { Card, Divider, Space, Spin, Tag } from "antd";
import { useLocation } from "react-router-dom";

import { starshipsService } from "../../services/starships";
import { filmsService } from "../../services/films";
import { peopleService } from "../../services/people";

import useStyles from "./style";

const { Meta } = Card;

const StarshipByID = () => {
  const [starshipsList, setStarshipsList] = useState<Starships | null>(null);
  const [filmsList, setFilmsList] = useState<Films[] | null>(null);
  const [peopleList, setPeopleList] = useState<People[] | null>(null);

  const classes = useStyles();
  const location = useLocation();

  const fetchStarshipByID = async (id: number) => {
    starshipsService.getStarshipByID(id).then((resByID) => {
      setStarshipsList(resByID.data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    fetchStarshipByID(Number(id));
  }, []);

  useEffect(() => {
    if (starshipsList) {
      (async () => {
        const idsFilms = starshipsList.films.map(
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

        const idsPeople = starshipsList.pilots.map(
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
  }, [starshipsList]);

  if (starshipsList === null || filmsList === null || peopleList === null)
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );

  return (
    <div className={classes.starshipByIDContainer}>
      <Card className={classes.card} hoverable>
        <Divider orientation="left">Name of starship:</Divider>
        <Meta title={starshipsList.name} />
        <Divider orientation="left">MGLT:</Divider>
        <Meta title={starshipsList.MGLT} />
        <Divider orientation="left">Cargo_capacity:</Divider>
        <Meta title={starshipsList.cargo_capacity} />
        <Divider orientation="left">Consumables:</Divider>
        <Meta title={starshipsList.consumables} />
        <Divider orientation="left">Cost in credits: </Divider>
        <Meta title={starshipsList.cost_in_credits} />
        <Divider orientation="left">Created:</Divider>
        <Meta title={starshipsList.created} />
        <Divider orientation="left">Crew:</Divider>
        <Meta title={starshipsList.crew} />
        <Divider orientation="left">Edited:</Divider>
        <Meta title={starshipsList.edited} />
        <Divider orientation="left">Films:</Divider>
        <div>
          {filmsList.map((film) => (
            <Tag color="geekblue">{film.title}</Tag>
          ))}
        </div>
        <Divider orientation="left">Hyperdrive rating:</Divider>
        <Meta title={starshipsList.hyperdrive_rating} />
        <Divider orientation="left">Length:</Divider>
        <Meta title={starshipsList.length} />
        <Divider orientation="left">Manufacturer:</Divider>
        <Meta title={starshipsList.manufacturer} />
        <Divider orientation="left">Max atmosphering speed:</Divider>
        <Meta title={starshipsList.max_atmosphering_speed} />
        <Divider orientation="left">Model:</Divider>
        <Meta title={starshipsList.model} />
        <Divider orientation="left">Passengers:</Divider>
        <Meta title={starshipsList.passengers} />
        <Divider orientation="left">Pilots:</Divider>
        <div>
          {peopleList.map((people) => (
            <Tag color="geekblue">{people.name}</Tag>
          ))}
        </div>
        <Divider orientation="left">Starship class:</Divider>
        <Meta title={starshipsList.starship_class} />
      </Card>
    </div>
  );
};

export default StarshipByID;
