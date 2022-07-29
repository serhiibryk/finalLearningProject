import React, { useEffect, useState } from "react";
import { Card, Divider, Space, Spin, Tag } from "antd";
import { useLocation } from "react-router-dom";

import { filmsService } from "../../services/films";
import { peopleService } from "../../services/people";
import { vehiclesService } from "../../services/vehicles";

import useStyles from "./style";
const { Meta } = Card;

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
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );

  return (
    <div className={classes.vehicleByIDContainer}>
      <Card className={classes.card} hoverable>
        <Divider orientation="left">Name of vehicle:</Divider>
        <Meta title={vehiclesList.name} />
        <Divider orientation="left">Cargo capacity:</Divider>
        <Meta title={vehiclesList.cargo_capacity} />
        <Divider orientation="left">Consumables:</Divider>
        <Meta title={vehiclesList.consumables} />
        <Divider orientation="left">Cost in credits:</Divider>
        <Meta title={vehiclesList.cost_in_credits} />
        <Divider orientation="left">Created:</Divider>
        <Meta title={vehiclesList.created} />
        <Divider orientation="left">Crew:</Divider>
        <Meta title={vehiclesList.crew} />
        <Divider orientation="left">Edited:</Divider>
        <Meta title={vehiclesList.edited} />
        <Divider orientation="left">Films:</Divider>
        <div>
          {filmsList.map((film) => (
            <Tag color="geekblue">{film.title}</Tag>
          ))}
        </div>
        <Divider orientation="left">Length:</Divider>
        <Meta title={vehiclesList.length} />
        <Divider orientation="left">Manufacturer:</Divider>
        <Meta title={vehiclesList.manufacturer} />
        <Divider orientation="left">Max atmosphering speed:</Divider>
        <Meta title={vehiclesList.max_atmosphering_speed} />
        <Divider orientation="left">Model:</Divider>
        <Meta title={vehiclesList.model} />
        <Divider orientation="left">Passengers:</Divider>
        <Meta title={vehiclesList.passengers} />
        <Divider orientation="left">Pilots:</Divider>
        <div>
          {peopleList.map((people) => (
            <Tag color="geekblue">{people.name}</Tag>
          ))}
        </div>
        <Divider orientation="left">Vehicle class:</Divider>
        <Meta title={vehiclesList.vehicle_class} />
      </Card>
    </div>
  );
};

export default StarshipByID;
