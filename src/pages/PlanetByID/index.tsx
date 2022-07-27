import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { planetsService } from "../../services/planets";

import useStyles from "./style";

const { Meta } = Card;

interface Planets {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

const PlanetByID = () => {
  const [planetsList, setPlanetsList] = useState<Planets | null>(null);

  const location = useLocation();
  // console.log(location);
  const classes = useStyles();

  const fetchPlanetByID = async (id: number) => {
    planetsService.getPlanetByID(id).then((resByID) => {
      // console.log(resByID);
      setPlanetsList(resByID.data);
    });
  };

  // console.log(location);

  useEffect(() => {
    const id = location.pathname.split("/")[2]; //Destructurization

    fetchPlanetByID(Number(id));
  }, []);

  if (planetsList === null) return <div>Loading...</div>;

  return (
    <div className={classes.planetByIDContainer}>
      <Card className={classes.card} hoverable>
        <span>Name of palnet: </span>
        <Meta title={planetsList.name} />
        <span>Climate of planet: </span>
        <Meta title={planetsList.climate} />
        {/* <span>Gender: </span> */}
        {/* <Meta title={peopleList.gender} /> */}
      </Card>
    </div>
  );
};

export default PlanetByID;
