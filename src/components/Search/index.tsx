import React, { FC, FormEvent, useEffect } from 'react';
import { debounce } from 'lodash';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../store/hooks/redux';

import SearchOutlined from '@ant-design/icons/SearchOutlined';
import useStyles from './style';

interface ISearch {
  category: string;
  name: string;
  setSearchState: React.Dispatch<React.SetStateAction<never[]>>;
}

const Search: FC<ISearch> = ({ category, name, setSearchState }) => {
  const { t } = useTranslation();

  const stateCategory = useAppSelector((state: any) => state[category])[category];

  const classes = useStyles();

  const debouncedSearchPagination = debounce((value) => {
    const filter = (stateCategory || []).filter((item: any) => item[name].toLowerCase().includes(value.toLowerCase()));
    setSearchState(filter);
  }, 1000);

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    debouncedSearchPagination(e.currentTarget.value);
  };

  useEffect(() => {
    setSearchState(stateCategory);
  }, [stateCategory, setSearchState]);

  return (
    <Input
      className={classes.search}
      onChange={(e) => handleSearch(e)}
      placeholder={t('search')}
      prefix={<SearchOutlined />}
    />
  );
};

export default Search;
