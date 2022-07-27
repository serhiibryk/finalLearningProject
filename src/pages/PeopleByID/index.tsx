import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { peopleService } from "../../services/people";

import useStyles from "./style";

const { Meta } = Card;

interface People {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [];
  starships: string[];
  url: string;
  vehicles: string[];
}

const PeopleByID = () => {
  const [peopleList, setPeopleList] = useState<People | null>(null);

  const location = useLocation();
  // console.log(location);
  const classes = useStyles();

  const fetchPeopleByID = async (id: number) => {
    peopleService.getPeopleByID(id).then((resByID) => {
      // console.log(resByID);
      setPeopleList(resByID.data);
    });
  };
  // console.log(location);

  useEffect(() => {
    const id = location.pathname.split("/")[2]; //Destructurization

    fetchPeopleByID(Number(id));
  }, []);

  if (peopleList === null) return <div>Loading...</div>;

  return (
    <div className={classes.peopleByIDContainer}>
      <Card className={classes.card} hoverable>
        <span>Name of people: </span>
        <Meta title={peopleList.name} />
        <span>Birth-year of people: </span>
        <Meta title={peopleList.birth_year} />
        <span>Gender: </span>
        <Meta title={peopleList.gender} />
      </Card>
    </div>
  );
};

export default PeopleByID;
