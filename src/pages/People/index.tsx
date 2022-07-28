import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { peopleService } from "../../services/people";
import { useLocation, useNavigate } from "react-router-dom";
import { imgPeopleList } from "../../utils";

const { Meta } = Card;

const TeamsPeoples = () => {
  const [peoplesList, setPeoplesList] = useState<People[]>([]);

  const classes = useStyles();
  const push = useNavigate();
  const location = useLocation();

  const fetchUsers = async () => {
    peopleService.getPeople().then((res) => {
      setPeoplesList(res.data.results);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (peoplesList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      {peoplesList.map((people, index) => {
        return (
          <Card
            className={classes.card}
            hoverable
            cover={
              <img
                className={classes.img}
                key={imgPeopleList[index].imgLink}
                src={imgPeopleList[index].imgLink}
              />
            }
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
