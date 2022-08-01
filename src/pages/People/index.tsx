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
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });
  const [isLoading, setLoading] = useState(false);

  const classes = useStyles();
  const push = useNavigate();

  const fetchPeople = async (nextId: number) => {
    setLoading(true);
    peopleService.getPeople(nextId).then((res) => {
      setPeoplesList(res.data.results);
      setLoading(false);
      const params = new URL(res.data.next).searchParams;
      const next = params.get("page");
      setPageData({ nextId: Number(next) });
    });
  };

  useEffect(() => {
    fetchPeople(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchPeople(id);
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
            total={82}
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
