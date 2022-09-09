import React from 'react';
import { Pagination } from 'antd';
import { useAppSelector } from '../../store/hooks/redux';
import useStyles from './style';

const PaginationCategory: React.FunctionComponent<IPagination> = ({ defaultCurrent, total, current, onChange }) => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);
  return (
    <Pagination
      className={classes.pagination}
      showSizeChanger={false}
      defaultCurrent={defaultCurrent}
      current={current}
      total={total}
      onChange={onChange}
    />
  );
};

export default PaginationCategory;
