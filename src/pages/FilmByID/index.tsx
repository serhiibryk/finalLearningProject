import React, { useEffect, useState } from 'react';
import { Card, Divider } from 'antd';
import { useLocation } from 'react-router-dom';

import CardRow from '../../components/CardRow';
import Spiner from '../../components/Spiner';
import { filmsService } from '../../services/films';
import { planetsService } from '../../services/planets';
import { speciesService } from '../../services/species';
import { starshipsService } from '../../services/starships';
import { vehiclesService } from '../../services/vehicles';
import MapFieldsByID from '../../components/MapOfFieldsByID';
import { useAppSelector } from '../../store/hooks/redux';

import useStyles from './style';

const FilmByID = () => {
  const [filmsList, setFilmsList] = useState<Films | null>(null);
  const [planetsList, setPlanetsList] = useState<Planets[] | null>(null);
  const [speciesList, setSpeciesList] = useState<Species[] | null>(null);
  const [starshipsList, setStarshipsList] = useState<Vehicles[] | null>(null);
  const [vehiclesList, setVehiclesList] = useState<Vehicles[] | null>(null);

  const location = useLocation();

  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);

  const fetchFilmsByID = async (id: number) => {
    filmsService.getFilmByID(id).then((data) => {
      setFilmsList(data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split('/')[2];
    fetchFilmsByID(Number(id));
  }, [location.pathname]);

  useEffect(() => {
    if (filmsList) {
      (async () => {
        const idsFilms = filmsList.planets.map((planet) => planet.split('/')[5]);
        const planets = await Promise.all(
          idsFilms.map(async (id) => await planetsService.getPlanetByID(Number(id)).then((data) => data))
        );

        setPlanetsList(planets);

        const idsVehicles = filmsList.vehicles.map((vehicle) => vehicle.split('/')[5]);
        const vehicles = await Promise.all(
          idsVehicles.map(async (id) => await vehiclesService.getVehicleByID(Number(id)).then((data) => data))
        );

        setVehiclesList(vehicles);

        const idsSpecies = filmsList.species.map((speccy) => speccy.split('/')[5]);
        const species = await Promise.all(
          idsSpecies.map(async (id) => await speciesService.getSpeccyByID(Number(id)).then((data) => data))
        );

        setSpeciesList(species);

        const idsStarships = filmsList.starships.map((starship) => starship.split('/')[5]);
        const starships = await Promise.all(
          idsStarships.map(async (id) => await starshipsService.getStarshipByID(Number(id)).then((data) => data))
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
  ) {
    return <Spiner />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.filmByIDContainer}>
        <Card className={classes.card} hoverable>
          <CardRow title={filmsList.title} lable={'Title of the film:'} />
          <CardRow title={filmsList.director} lable={'Director:'} />
          <CardRow title={filmsList.producer} lable={'Producer:'} />
          <CardRow title={filmsList.edited} lable={'Edited:'} />
          <CardRow title={filmsList.episode_id} lable={'Episode_id:'} />
          <CardRow title={filmsList.release_date} lable={'Release_date:'} />
          <Divider orientation={'left'}>Opening_crawl:</Divider>
          <p className={classes.textP}>{filmsList.opening_crawl}</p>
          <MapFieldsByID list={planetsList} title={'name'} lable={'Planets'} />
          <MapFieldsByID list={speciesList} title={'name'} lable={'Species'} />
          <MapFieldsByID list={vehiclesList} title={'name'} lable={'Vehicles'} />
          <MapFieldsByID list={starshipsList} title={'name'} lable={'Starships'} />
        </Card>
      </div>
    </div>
  );
};

export default FilmByID;
