import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import { imgFilmsList } from "../../utils";
import { filmsService } from "../../services/films";

import useStyles from "./style";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { filmsReducer } from "../../store/films/reducer";

const { Meta } = Card;

const TeamsFilms = () => {
  // const [filmsList, setFilmsList] = useState<Films[]>([]);
  const { films } = useAppSelector((state: any) => state.films);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  // const fetchFilms = async () => {
  //   filmsService.getFilms().then((data) => {
  //     setFilmsList(data.results);
  //   });
  // };

  const fetchFilms = createAsyncThunk(
    "films/films",
    async (data: any, thunkApi) => {
      try {
        const res = await filmsService.getFilms();

        console.log(res);
        thunkApi.dispatch(filmsReducer.setFilms(res.results));
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchFilms({}));
  }, []);

  if (films.length === 0) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {films.map((film: any, index: any) => {
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
    </div>
  );
};

export default TeamsFilms;
