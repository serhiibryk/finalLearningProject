import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { vehiclesService } from "../../services/vehicles";
import { useLocation, useNavigate } from "react-router-dom";

import useStyles from "./style";

const { Meta } = Card;

const StarshipByID = () => {
  const [vehiclesList, setVehiclesList] = useState<Vehicles | null>(null);

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
