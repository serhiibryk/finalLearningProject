import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Spiner from '../../components/Spiner';
import PaginationCategory from '../../components/Pagination';
import { imgPeopleList } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import Search from '../../components/Search';
import { getPeoples } from '../../store/people/actions';
import CardComponent from '../../components/Card';

import useStyles from './style';

const TeamsPeoples: FC = () => {
  const { people, count, isLoading, error } = useAppSelector((state) => state.people);
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);
  // const [isLoading, setLoading] = useState(false);
  // const [maxCount, setMaxCount] = useState(0);
  const [namePeople, setNamePeople] = useState([]);

  const location = useLocation();
  const dispatch = useAppDispatch();

  const classes = useStyles(isDarkMode as boolean);
  const push = useNavigate();

  const currentPage = Number(location.search.split('=')[1] || 1);

  useEffect(() => {
    dispatch(getPeoples(currentPage));
  }, [dispatch, currentPage]);

  const handleChange = (page: number) => {
    push(`/people?page=${page}`);
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
          <Search category={'people'} name={'name'} setSearchState={setNamePeople} />
        </div>
        <div className={classes.pagination}>
          {people && (
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
        {namePeople.map((people: People, index: number) => {
          return (
            <CardComponent
              key={index}
              path={`/people/${people.url.split('/')[5]}`}
              title={people.name}
              img={imgPeopleList[index].imgLink}
              imgSrc={imgPeopleList[index].imgLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamsPeoples;
