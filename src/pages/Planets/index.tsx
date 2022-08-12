import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { planetsService } from "../../services/planets";
import { imgPlanetsList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const TeamsPlanets = () => {
  const [planetsList, setPlanetsList] = useState<Planets[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  const fetchPlanets = async (nextId: number) => {
    setLoading(true);
    planetsService.getPlanets(nextId).then((res) => {
      setPlanetsList(res.data.results);
      setMaxCount(res.data.count);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPlanets(pageData);
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchPlanets(page);
    setPageData(page);
  };

  if (planetsList.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {planetsList.length && (
          <PaginationCategory
            defaultCurrent={1}
            total={maxCount}
            current={pageData}
            onChange={handleChange}
          />
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
                  alt="Planet wallpaper"
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
