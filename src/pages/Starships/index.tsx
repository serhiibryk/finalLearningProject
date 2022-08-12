import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { starshipsService } from "../../services/starships";
import { imgStarshipsList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const TeamsStarships = () => {
  const [starshipsList, setStarshipsList] = useState<Starships[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  const fetchStarships = async (nextId: number) => {
    setLoading(true);
    starshipsService.getStarships(nextId).then((res) => {
      setStarshipsList(res.data.results);
      setMaxCount(res.data.count);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchStarships(pageData);
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchStarships(page);
    setPageData(page);
  };

  if (starshipsList.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {starshipsList.length && (
          <PaginationCategory
            defaultCurrent={1}
            current={pageData}
            total={maxCount}
            onChange={handleChange}
          />
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
                  alt="Starship wallpaper"
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
