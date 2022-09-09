import React from 'react';
import { Switch as Switcher } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { darkModeReducer } from '../../store/darkMode/reducer';

import useStyles from './style';

const Switch = () => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);
  const dispatch = useAppDispatch();

  const classes = useStyles(isDarkMode as boolean);

  const handleChange = () => {
    dispatch(darkModeReducer.setIsDarkMode(!isDarkMode));
  };

  console.log(isDarkMode);

  return <Switcher className={classes.root} checked={isDarkMode} onChange={handleChange} />;
};

export default Switch;
