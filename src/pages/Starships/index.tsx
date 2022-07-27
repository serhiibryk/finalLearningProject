import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { starshipsService } from "../../services/starships";
import { useLocation, useNavigate } from "react-router-dom";

const { Meta } = Card;

interface Starships {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: [];
  starship_class: string;
  url: string;
}

interface PageData {
  size: number;
  page: number;
  pagesTotal: number;
}

const TeamsStarships = () => {
  const [starshipsList, setStarshipsList] = useState<Starships[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    size: 100,
    page: 1,
    pagesTotal: 0,
  });
  const classes = useStyles();
  const push = useNavigate();
  // const location = useLocation();
  const fetchStarshipByID = async (size: number, page: number) => {
    starshipsService.getStarships().then((res) => {
      // console.log(res);
      setStarshipsList(res.data.results);
      // setPageData({
      //   size: res.data.info.results,
      //   page: res.data.info.page,
      //   pagesTotal: 100, // imagine that it`s value from BE
      // });
    });
  };
  useEffect(() => {
    fetchStarshipByID(pageData.size, pageData.page);
  }, []);

  if (starshipsList.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.starshipsContainer}>
      {starshipsList.map((starship) => {
        return (
          <Card
            className={classes.card}
            hoverable
            onClick={() => push(`/starships/${starship.url.split("/")[5]}`)}
          >
            <Meta title={starship.name} />
          </Card>
        );
      })}
    </div>
  );
};

export default TeamsStarships;
