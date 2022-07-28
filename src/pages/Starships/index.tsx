import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { starshipsService } from "../../services/starships";
import { useLocation, useNavigate } from "react-router-dom";
import { imgStarshipsList } from "../../utils";

const { Meta } = Card;

const TeamsStarships = () => {
  const [starshipsList, setStarshipsList] = useState<Starships[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    size: 100,
    page: 1,
    pagesTotal: 0,
  });
  const classes = useStyles();
  const push = useNavigate();

  const fetchStarshipByID = async (size: number, page: number) => {
    starshipsService.getStarships().then((res) => {
      setStarshipsList(res.data.results);
    });
  };
  useEffect(() => {
    fetchStarshipByID(pageData.size, pageData.page);
  }, []);

  if (starshipsList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
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
  );
};

export default TeamsStarships;
