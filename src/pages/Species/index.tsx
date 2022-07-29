import React, { useEffect, useState } from "react";
import { Card, Pagination, Space, Spin } from "antd";

import useStyles from "./style";
import { speciesService } from "../../services/species";
import { useLocation, useNavigate } from "react-router-dom";
import { imgSpeciesList } from "../../utils";
import { nextTick } from "process";

const { Meta } = Card;

const TeamsSpecies = () => {
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });

  const classes = useStyles();
  const push = useNavigate();

  const fetchSpecies = async (nextId: number) => {
    speciesService.getSpecies(nextId).then((res) => {
      setSpeciesList(res.data.results);
      const paramsNext = new URL(res.data.next).searchParams;
      const next = paramsNext.get("page");
      // const paramsPrev = new URL(res.data.previous).searchParams;
      // const prev = paramsNext.get("page");
      setPageData({ nextId: Number(next) });
    });
  };
  useEffect(() => {
    fetchSpecies(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchSpecies(id);
  };

  if (speciesList.length === 0) {
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {!!speciesList.length && (
          <div>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              total={37}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className={classes.content}>
        {speciesList.map((speccy, index) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgSpeciesList[index].imgLink}
                  src={imgSpeciesList[index].imgLink}
                />
              }
              onClick={() => push(`/species/${speccy.url.split("/")[5]}`)}
            >
              <Meta title={speccy.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsSpecies;
