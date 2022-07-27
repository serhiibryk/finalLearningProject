import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { speciesService } from "../../services/species";

import useStyles from "./style";

const { Meta } = Card;

interface Species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  films: string[];
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  skin_colors: string;
  url: string;
}

const SpeccyByID = () => {
  const [speciesList, setSpeciesList] = useState<Species | null>(null);

  const location = useLocation();
  // console.log(location);
  const classes = useStyles();

  const fetchSpeccyByID = async (id: number) => {
    speciesService.getSpeccyByID(id).then((resByID) => {
      // console.log(resByID);
      setSpeciesList(resByID.data);
    });
  };

  // console.log(location);

  useEffect(() => {
    const id = location.pathname.split("/")[2]; //Destructurization

    fetchSpeccyByID(Number(id));
  }, []);

  if (speciesList === null) return <div>Loading...</div>;

  return (
    <div className={classes.speccyByIDContainer}>
      <Card className={classes.card} hoverable>
        <span>Speccy name: </span>
        <Meta title={speciesList.name} />
        <span>Speccy classification: </span>
        <Meta title={speciesList.classification} />
      </Card>
    </div>
  );
};

export default SpeccyByID;
