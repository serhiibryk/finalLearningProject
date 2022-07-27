import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { peopleService } from "../../services/people";
import { useLocation, useNavigate } from "react-router-dom";

const { Meta } = Card;

interface Peoples {
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

const TeamsPeoples = () => {
  const [peoplesList, setPeoplesList] = useState<Peoples[]>([]);

  const classes = useStyles();
  const push = useNavigate();
  const location = useLocation();

  const fetchUsers = async () => {
    peopleService.getPeople().then((res) => {
      console.log(res);
      setPeoplesList(res.data.results);
    });
  };

  // const id = location.pathname.split("/")[5];

  useEffect(() => {
    fetchUsers();
  }, []);

  if (peoplesList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.peoplesContainer}>
      {peoplesList.map((people) => {
        return (
          <Card
            className={classes.card}
            hoverable
            onClick={() => push(`/people/${people.url.split("/")[5]}`)}
          >
            <Meta title={people.name} />
          </Card>
        );
      })}
    </div>
  );
};

export default TeamsPeoples;
