import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Spiner from '../../components/Spiner';
import PaginationCategory from '../../components/Pagination';
import { imgVehiclesList } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import Search from '../../components/Search';
import { getVehicles } from '../../store/vehicles/actions';

import useStyles from './style';

const { Meta } = Card;

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
        {nameVehicles.map((vehicle: any, index: any) => (
          <Card
            key={index}
            className={classes.card}
            hoverable
            cover={
              <img
                className={classes.img}
                key={imgVehiclesList[index].imgLink}
                src={imgVehiclesList[index].imgLink}
                alt="Vehicle wallpaper"
              />
            }
            onClick={() => push(`/vehicles/${vehicle.url.split('/')[5]}`)}
          >
            <Meta title={vehicle.name} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamsVehicles;
