import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { planetsService } from "../../services/planets";
import { useLocation, useNavigate } from "react-router-dom";

const { Meta } = Card;

interface Planets {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

interface PageData {
  size: number;
  page: number;
  pagesTotal: number;
}

const TeamsPlanets = () => {
  const [planetsList, setPlanetsList] = useState<Planets[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    size: 100,
    page: 1,
    pagesTotal: 0,
  });

  const classes = useStyles();
  const push = useNavigate();
  // const location = useLocation();

  const fetchPlanets = async (size: number, page: number) => {
    planetsService.getPlanets().then((res) => {
      console.log(res);
      setPlanetsList(res.data.results);
      // setPageData({
      //   size: res.data.info.results,
      //   page: res.data.info.page,
      //   pagesTotal: 100, // imagine that it`s value from BE
      // });
    });
  };
  useEffect(() => {
    fetchPlanets(pageData.size, pageData.page);
  }, []);

  if (planetsList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.planetsContainer}>
      {planetsList.map((planet) => {
        return (
          <Card
            className={classes.card}
            hoverable
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
