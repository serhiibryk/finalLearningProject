import React, { useEffect } from 'react';

import Spiner from '../../components/Spiner';
import { imgFilmsList } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { getFilms } from '../../store/films/actions';
import CardComponent from '../../components/Card';

import useStyles from './style';

const TeamsFilms = () => {
  // const [filmsList, setFilmsList] = useState<Films[]>([]);
  const { films, isLoading, error } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const classes = useStyles();

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
        {films.map((film: Films, index: number) => (
          <CardComponent
            key={index}
            path={`/film/${film.url.split('/')[5]}`}
            title={film.title}
            img={imgFilmsList[index].imgLink}
            imgSrc={imgFilmsList[index].imgLink}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsFilms;
