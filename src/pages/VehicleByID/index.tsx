import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { vehiclesService } from "../../services/vehicles";
import { useLocation, useNavigate } from "react-router-dom";

import useStyles from "./style";

const { Meta } = Card;

interface Vehicles {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: [];
  url: string;
  vehicle_class: string;
}

const StarshipByID = () => {
  const [vehiclesList, setVehiclesList] = useState<Vehicles | null>(null);

  const classes = useStyles();
  // const push = useNavigate();
  const location = useLocation();

  const fetchVehicleByID = async (id: number) => {
    vehiclesService.getVehicleByID(id).then((resByID) => {
      // console.log(resByID);
      setVehiclesList(resByID.data);
      // setPageData({
      //   size: res.data.info.results,
      //   page: res.data.info.page,
      //   pagesTotal: 100, // imagine that it`s value from BE
      // });
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2]; //Destructurization
    fetchVehicleByID(Number(id));
  }, []);

  if (vehiclesList === null) return <div>Loading...</div>;

  return (
    <div className={classes.vehicleByIDContainer}>
      <Card className={classes.card} hoverable>
        <span>Name of vehicle: </span>
        <Meta title={vehiclesList.name} />
      </Card>
    </div>
  );
};

export default StarshipByID;
