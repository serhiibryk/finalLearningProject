import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Divider, Tag } from "antd";

import Spiner from "../../components/spiner";
import CardRow from "../../components/cardRow";
import { filmsService } from "../../services/films";
import { peopleService } from "../../services/people";
import { vehiclesService } from "../../services/vehicles";

import useStyles from "./style";

const StarshipByID = () => {
  const [vehiclesList, setVehiclesList] = useState<Vehicles | null>(null);
  const [filmsList, setFilmsList] = useState<Films[] | null>(null);
  const [peopleList, setPeopleList] = useState<People[] | null>(null);

  const classes = useStyles();
  const location = useLocation();

  const fetchVehicleByID = async (id: number) => {
    vehiclesService.getVehicleByID(id).then((resByID) => {
      setVehiclesList(resByID.data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    fetchVehicleByID(Number(id));
  }, []);

  useEffect(() => {
    if (vehiclesList) {
      (async () => {
        const idsFilms = vehiclesList.films.map(
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

        const idsPeople = vehiclesList.pilots.map(
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
  }, [vehiclesList]);

  if (vehiclesList === null || filmsList === null || peopleList === null)
    return <Spiner classes={classes.spiner} />;

  return (
    <div className={classes.vehicleByIDContainer}>
      <Card className={classes.card} hoverable>
        <CardRow title={vehiclesList.name} lable="Name of vehicle:" />
        <CardRow title={vehiclesList.cargo_capacity} lable="Cargo capacity:" />
        <CardRow title={vehiclesList.consumables} lable="Consumables:" />
        <CardRow
          title={vehiclesList.cost_in_credits}
          lable="Cost in credits:"
        />
        <CardRow title={vehiclesList.created} lable="Created:" />
        <CardRow title={vehiclesList.crew} lable="Crew:" />
        <CardRow title={vehiclesList.edited} lable="Edited:" />
        <CardRow title={vehiclesList.length} lable="Length:" />
        <CardRow title={vehiclesList.manufacturer} lable="Manufacturer:" />
        <CardRow
          title={vehiclesList.max_atmosphering_speed}
          lable="Max atmosphering speed:"
        />
        <CardRow title={vehiclesList.model} lable="Model:" />
        <CardRow title={vehiclesList.passengers} lable="Passengers:" />
        <CardRow title={vehiclesList.vehicle_class} lable="Vehicle class:" />
        <Divider orientation="left">Films:</Divider>
        <div>
          {filmsList.map((film) => (
            <Tag color="geekblue">{film.title}</Tag>
          ))}
        </div>
        <Divider orientation="left">Pilots:</Divider>
        <div>
          {peopleList.map((people) => (
            <Tag color="geekblue">{people.name}</Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default StarshipByID;
