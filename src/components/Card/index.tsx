import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

import { useAppSelector } from '../../store/hooks/redux';

import useStyles from './style';

interface ICard {
  path: string;
  img: string;
  title: string;
  imgSrc: string;
}

const CardComponent: FC<ICard> = ({ path, img, title, imgSrc }) => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);

  const push = useNavigate();

  return (
    <Card
      hoverable
      className={classes.card}
      cover={<img className={classes.img} key={img} src={imgSrc} alt={'img'} />}
      onClick={() => push(`${path}`)}
    >
      <Meta title={title} />
    </Card>
  );
};

export default CardComponent;
