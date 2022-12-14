import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Spiner from '../../components/Spiner';
import PaginationCategory from '../../components/Pagination';
import { imgStarshipsList } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import Search from '../../components/Search';
import { getStarships } from '../../store/starships/actions';
import CardComponent from '../../components/Card';

import useStyles from './style';

const TeamsStarships = () => {
  const { starships, count, isLoading, error } = useAppSelector((state) => state.starships);

  const [nameStarships, setNameStarships] = useState([]);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage = Number(location.search.split('=')[1] || 1);

  useEffect(() => {
    dispatch(getStarships(currentPage));
  }, [currentPage, dispatch]);

  const handleChange = (page: number) => {
    push(`/starships?page=${page}`);
  };

  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Search category={'starships'} name={'name'} setSearchState={setNameStarships} />
        </div>
        <div className={classes.pagination}>
          {starships && (
            <PaginationCategory
              defaultCurrent={currentPage}
              current={currentPage}
              total={count}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className={classes.content}>
        {nameStarships.map((starship: Starships, index: number) => (
          <CardComponent
            key={index}
            path={`/starships/${starship.url.split('/')[5]}`}
            title={starship.name}
            img={imgStarshipsList[1].imgLink}
            imgSrc={imgStarshipsList[1].imgLink}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsStarships;
