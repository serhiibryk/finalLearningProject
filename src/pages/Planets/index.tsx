import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/spiner";
import PaginationCategory from "../../components/pagination";
import { planetsService } from "../../services/planets";
import { imgPlanetsList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const TeamsPlanets = () => {
  const [planetsList, setPlanetsList] = useState<Planets[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });
  const [isLoading, setLoading] = useState(false);

  const classes = useStyles();
  const push = useNavigate();

  const fetchPlanets = async (nextId: number) => {
    setLoading(true);
    planetsService.getPlanets(nextId).then((res) => {
      setPlanetsList(res.data.results);
      setLoading(false);
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

  if (planetsList.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {planetsList.length && (
          <PaginationCategory
            defaultCurrent={1}
            total={60}
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
