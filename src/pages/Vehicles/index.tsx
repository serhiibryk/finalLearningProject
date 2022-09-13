import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Spiner from '../../components/Spiner';
import PaginationCategory from '../../components/Pagination';
import { imgVehiclesList } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import Search from '../../components/Search';
import { getVehicles } from '../../store/vehicles/actions';
import CardComponent from '../../components/Card';

import useStyles from './style';

const TeamsVehicles = () => {
  const { vehicles, count, isLoading, error } = useAppSelector((state) => state.vehicles);
  const [nameVehicles, setNameVehicles] = useState([]);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage = Number(location.search.split('=')[1] ?? 1);

  useEffect(() => {
    dispatch(getVehicles(currentPage));
  }, [currentPage, dispatch]);

  const handleChange = (page: number) => {
    push(`/vehicles?page=${page}`);
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
          <Search category={'vehicles'} name={'name'} setSearchState={setNameVehicles} />
        </div>
        <div className={classes.pagination}>
          {vehicles && (
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
        {nameVehicles.map((vehicle: Vehicles, index: number) => (
          <CardComponent
            key={index}
            path={`/vehicles/${vehicle.url.split('/')[5]}`}
            title={vehicle.name}
            img={imgVehiclesList[1].imgLink}
            imgSrc={imgVehiclesList[1].imgLink}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsVehicles;
