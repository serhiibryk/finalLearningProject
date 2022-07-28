import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { planetsService } from "../../services/planets";
import { useLocation, useNavigate } from "react-router-dom";
import { imgPlanetsList } from "../../utils";

const { Meta } = Card;

const TeamsPlanets = () => {
  const [planetsList, setPlanetsList] = useState<Planets[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    size: 100,
    page: 1,
    pagesTotal: 0,
  });

  const classes = useStyles();
  const push = useNavigate();

  const fetchPlanets = async (size: number, page: number) => {
    planetsService.getPlanets().then((res) => {
      setPlanetsList(res.data.results);
    });
  };
  useEffect(() => {
    fetchPlanets(pageData.size, pageData.page);
  }, []);

  if (planetsList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
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
  );
};

export default TeamsPlanets;
