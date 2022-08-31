import React from 'react';
import { Space, Spin } from 'antd';
import useStyles from './style';

const Spiner: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Space size={'middle'} className={classes.spiner}>
      <Spin size={'large'} />
    </Space>
  );
};

export default Spiner;
