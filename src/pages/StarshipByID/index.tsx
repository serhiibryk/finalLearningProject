import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { starshipsService } from "../../services/starships";
import { useLocation, useNavigate } from "react-router-dom";

import useStyles from "./style";

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

const StarshipByID = () => {
  const [starshipsList, setStarshipsList] = useState<Starships | null>(null);

  const classes = useStyles();
  // const push = useNavigate();
  const location = useLocation();

  const fetchStarshipByID = async (id: number) => {
    starshipsService.getStarshipByID(id).then((resByID) => {
      // console.log(resByID);
      setStarshipsList(resByID.data);
      // setPageData({
      //   size: res.data.info.results,
      //   page: res.data.info.page,
      //   pagesTotal: 100, // imagine that it`s value from BE
      // });
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2]; //Destructurization
    fetchStarshipByID(Number(id));
  }, []);

  if (starshipsList === null) return <div>Loading...</div>;

  return (
    <div className={classes.starshipByIDContainer}>
      <Card className={classes.card} hoverable>
        <span>Name of starship: </span>
        <Meta title={starshipsList.name} />
      </Card>
    </div>
  );
};

export default StarshipByID;
