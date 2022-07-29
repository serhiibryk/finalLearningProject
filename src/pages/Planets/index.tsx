import React, { useEffect, useState } from "react";
import { Card, Pagination, Space, Spin } from "antd";

import useStyles from "./style";
import { planetsService } from "../../services/planets";
import { useLocation, useNavigate } from "react-router-dom";
import { imgPlanetsList } from "../../utils";

const { Meta } = Card;

const TeamsPlanets = () => {
  const [planetsList, setPlanetsList] = useState<Planets[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });

  const classes = useStyles();
  const push = useNavigate();

  const fetchPlanets = async (nextId: number) => {
    planetsService.getPlanets(nextId).then((res) => {
      setPlanetsList(res.data.results);
      const paramsNext = new URL(res.data.next).searchParams;
      const next = paramsNext.get("page");
      setPageData({ nextId: Number(next) });
    });
  };
  useEffect(() => {
    fetchPlanets(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchPlanets(id);
  };

  if (planetsList.length === 0) {
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {!!planetsList.length && (
          <div>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              total={60}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className={classes.content}>
        {planetsList.map((planet, index) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgPlanetsList[index].imgLink}
                  src={imgPlanetsList[index].imgLink}
                />
              }
              onClick={() => push(`/planets/${planet.url.split("/")[5]}`)}
            >
              <Meta title={planet.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsPlanets;
