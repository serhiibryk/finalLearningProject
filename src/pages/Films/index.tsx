import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/spiner";
import { imgFilmsList } from "../../utils";
import { filmsService } from "../../services/films";

import useStyles from "./style";

const { Meta } = Card;

const TeamsFilms = () => {
  const [filmsList, setFilmsList] = useState<Films[]>([]);

  const classes = useStyles();
  const push = useNavigate();

  const fetchFilms = async () => {
    filmsService.getFilms().then((res) => {
      setFilmsList(res.data.results);
    });
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  if (filmsList.length === 0) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      {filmsList.map((film, index) => {
        return (
          <Card
            className={classes.card}
            hoverable
            cover={
              <img
                className={classes.img}
                key={imgFilmsList[index].imgLink}
                src={imgFilmsList[index].imgLink}
                alt="film wallpaper"
              />
            }
            onClick={() => push(`/film/${film.url.split("/")[5]}`)}
          >
            <Meta title={film.title} />
          </Card>
        );
      })}
    </div>
  );
};

export default TeamsFilms;
