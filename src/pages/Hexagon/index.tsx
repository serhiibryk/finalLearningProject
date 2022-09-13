import React from 'react';

import HexagonClear from '../../components/HexagonClear';

import useStyles from './style';

const Hexagon = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HexagonClear />
    </div>
  );
};

export default Hexagon;
