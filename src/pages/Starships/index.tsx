import React, { useEffect, useState } from "react";
import { Card, Pagination, Space, Spin } from "antd";

import useStyles from "./style";
import { starshipsService } from "../../services/starships";
import { useLocation, useNavigate } from "react-router-dom";
import { imgStarshipsList } from "../../utils";

const { Meta } = Card;

const TeamsStarships = () => {
  const [starshipsList, setStarshipsList] = useState<Starships[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });

  const classes = useStyles();
  const push = useNavigate();

  const fetchStarships = async (nextId: number) => {
    starshipsService.getStarships(nextId).then((res) => {
      setStarshipsList(res.data.results);
      const paramsNext = new URL(res.data.next).searchParams;
      const next = paramsNext.get("page");
      // const paramsPrev = new URL(res.data.previous).searchParams;
      // const prev = paramsNext.get("page");
      setPageData({ nextId: Number(next) });
    });
  };
  useEffect(() => {
    fetchStarships(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchStarships(id);
  };

  if (starshipsList.length === 0) {
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {!!starshipsList.length && (
          <div>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              total={36}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className={classes.content}>
        {starshipsList.map((starship, index) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgStarshipsList[index].imgLink}
                  src={imgStarshipsList[index].imgLink}
                />
              }
              onClick={() => push(`/starships/${starship.url.split("/")[5]}`)}
            >
              <Meta title={starship.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsStarships;
