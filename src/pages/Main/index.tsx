import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Spiner from '../../components/Spiner';
import { commonService } from '../../services/common';
import { imgMainList } from '../../utils';
import { useAppSelector } from '../../store/hooks/redux';
import CardComponent from '../../components/Card';

import useStyles from './style';

const Main = () => {
  const [mainList, setMainList] = useState<Common>({
    films: '',
    people: '',
    planets: '',
    species: '',
    starships: '',
    vehicles: '',
  });

  const push = useNavigate();
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);

  const fetchCommon = async () => {
    commonService.getCommon().then((data) => {
      setMainList(data);
    });
  };

  useEffect(() => {
    fetchCommon();
  }, []);

  if (mainList.films === '') {
    return <Spiner />;
  }

  return (
    <div className={classes.root}>
      {Object.entries(mainList).map((item, index) => (
        <CardComponent
          key={index}
          path={`/${item[0]}`}
          title={item[0].toUpperCase()}
          img={imgMainList[index].imgLink}
          imgSrc={imgMainList[index].imgLink}
        />
      ))}
    </div>
  );
};

export default Main;
