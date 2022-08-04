import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/spiner";
import PaginationCategory from "../../components/pagination";
import { peopleService } from "../../services/people";
import { imgPeopleList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const TeamsPeoples = () => {
  const [peoplesList, setPeoplesList] = useState<People[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  const fetchPeople = async (nextId: number) => {
    setLoading(true);
    peopleService.getPeople(nextId).then((res) => {
      setPeoplesList(res.data.results);
      setMaxCount(res.data.count);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPeople(pageData);
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchPeople(page);
    setPageData(page);
  };

  if (peoplesList.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {peoplesList.length && (
          <PaginationCategory
            defaultCurrent={1}
            current={pageData}
            total={maxCount}
            onChange={handleChange}
          />
        )}
      </div>
      <div className={classes.content}>
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
                  alt="People wallpaper"
                />
              }
              onClick={() => push(`/people/${people.url.split("/")[5]}`)}
            >
              <Meta title={people.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsPeoples;
