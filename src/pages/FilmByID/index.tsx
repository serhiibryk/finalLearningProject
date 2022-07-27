import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { filmsService } from "../../services/films";

import useStyles from "./style";

const { Meta } = Card;

interface Films {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

const FilmByID = () => {
  const [filmsList, setFilmsList] = useState<Films | null>(null);

  const location = useLocation();
  // console.log(location);
  const classes = useStyles();

  const fetchFilmsByID = async (id: number) => {
    filmsService.getFilmByID(id).then((resByID) => {
      console.log(resByID);
      setFilmsList(resByID.data);
    });
  };
  console.log(filmsList);

  useEffect(() => {
    const id = location.pathname.split("/")[2]; //Destructurization

    fetchFilmsByID(Number(id));
  }, []);

  if (filmsList === null) return <div>Loading...</div>;

  return (
    <div className={classes.filmByIDContainer}>
      <Card className={classes.card} hoverable>
        <span>Title of the film: </span>
        <Meta title={filmsList.title} />
        <span>Director: </span>
        <Meta title={filmsList.director} />
        <span>Producer: </span>
        <Meta title={filmsList.producer} />
      </Card>
    </div>
  );
};

export default FilmByID;
