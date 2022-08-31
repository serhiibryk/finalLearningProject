import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';

import Spiner from '../../components/Spiner';
import CardRow from '../../components/CardRow';
import MapFieldsByID from '../../components/MapOfFieldsByID';
import { starshipsService } from '../../services/starships';
import { filmsService } from '../../services/films';
import { peopleService } from '../../services/people';

import useStyles from './style';

const StarshipByID = () => {
  const [starshipsList, setStarshipsList] = useState<Vehicles | null>(null);
  const [filmsList, setFilmsList] = useState<Films[] | null>(null);
  const [peopleList, setPeopleList] = useState<People[] | null>(null);

  const classes = useStyles();
  const location = useLocation();

  const fetchStarshipByID = async (id: number) => {
    starshipsService.getStarshipByID(id).then((data) => {
      setStarshipsList(data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split('/')[2];
    fetchStarshipByID(Number(id));
  }, [location.pathname]);

  useEffect(() => {
    if (starshipsList) {
      (async () => {
        const idsFilms = starshipsList.films.map((speccy) => speccy.split('/')[5]);
        const films = await Promise.all(
          idsFilms.map(async (id) => await filmsService.getFilmByID(Number(id)).then((data) => data))
        );

        setFilmsList(films);

        const idsPeople = starshipsList.pilots.map((people) => people.split('/')[5]);
        const people = await Promise.all(
          idsPeople.map(async (id) => await peopleService.getPeopleByID(Number(id)).then((data) => data))
        );

        setPeopleList(people);
      })();
    }
  }, [starshipsList]);

  if (starshipsList === null || filmsList === null || peopleList === null) return <Spiner />;

  return (
    <div className={classes.starshipByIDContainer}>
      <Card className={classes.card} hoverable>
        <CardRow title={starshipsList.name} lable="Name of starship:" />
        <CardRow title={starshipsList.MGLT} lable="MGLT:" />
        <CardRow title={starshipsList.cargo_capacity} lable="Cargo_capacity:" />
        <CardRow title={starshipsList.consumables} lable="Consumables:" />
        <CardRow title={starshipsList.cost_in_credits} lable="Cost in credits:" />
        <CardRow title={starshipsList.created} lable="Created:" />
        <CardRow title={starshipsList.crew} lable="Crew:" />
        <CardRow title={starshipsList.edited} lable="Edited:" />
        <CardRow title={starshipsList.hyperdrive_rating} lable="Hyperdrive rating:" />
        <CardRow title={starshipsList.length} lable="Length:" />
        <CardRow title={starshipsList.manufacturer} lable="Manufacturer:" />
        <CardRow title={starshipsList.max_atmosphering_speed} lable="Max atmosphering speed:" />
        <CardRow title={starshipsList.model} lable="Model:" />
        <CardRow title={starshipsList.passengers} lable="Passengers:" />
        <CardRow title={starshipsList.starship_class} lable="Starship class:" />
        <MapFieldsByID list={filmsList} title={'title'} lable={'Films'} />
        <MapFieldsByID list={peopleList} title={'name'} lable={'Pilots'} />
      </Card>
    </div>
  );
};

export default StarshipByID;
