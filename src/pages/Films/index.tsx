import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import { imgFilmsList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { getFilms } from "../../store/films/actions";

import useStyles from "./style";

const { Meta } = Card;

const TeamsFilms = () => {
  // const [filmsList, setFilmsList] = useState<Films[]>([]);
  const { films, isLoading, error } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  // const fetchFilms = async () => {
  //   filmsService.getFilms().then((data) => {
  //     setFilmsList(data.results);
  //   });
  // };

  // const fetchFilms = createAsyncThunk(
  //   "films/films",
  //   async (data, thunkApi) => {
  //     try {
  //       const res = await filmsService.getFilms();

  //       console.log(res);
  //       thunkApi.dispatch(filmsReducer.setFilms(res.results));
  //     } catch (e) {
  //       return thunkApi.rejectWithValue(e);
  //     }
  //   }
  // );

  // useEffect(() => {
  //   dispatch(fetchFilms({}));
  // }, []);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {films.map((film: Films, index: number) => {
          return (
            <Card
              key={index}
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
