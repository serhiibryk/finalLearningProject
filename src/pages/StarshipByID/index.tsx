import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { starshipsService } from "../../services/starships";
import { useLocation, useNavigate } from "react-router-dom";

import useStyles from "./style";

const { Meta } = Card;

const StarshipByID = () => {
  const [starshipsList, setStarshipsList] = useState<Starships | null>(null);

  const classes = useStyles();
  const location = useLocation();

  const fetchStarshipByID = async (id: number) => {
    starshipsService.getStarshipByID(id).then((resByID) => {
      setStarshipsList(resByID.data);
    });
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];
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
