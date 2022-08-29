import React, { FC, useEffect } from "react";
import { debounce } from "lodash";
import { Input } from "antd";

import { useAppSelector } from "../../store/hooks/redux";

import SearchOutlined from "@ant-design/icons/SearchOutlined";
import useStyles from "./style";

interface ISearch {
  category: string;
  name: string;
  setSearchState: React.Dispatch<React.SetStateAction<never[]>>;
}

const Search: FC<ISearch> = ({ category, name, setSearchState }) => {
  const stateCategory = useAppSelector((state: any) => state[category])[
    category
  ];

  const classes = useStyles();

  const debouncedSearchPagination = debounce((value) => {
    const filter = (stateCategory || []).filter((item: any) =>
      item[name].toLowerCase().includes(value.toLowerCase())
    );
    setSearchState(filter);
  }, 1000);

  const handleSearch = (e: any) => {
    debouncedSearchPagination(e.target.value);
  };

  useEffect(() => {
    setSearchState(stateCategory);
  }, [stateCategory, setSearchState]);

  return (
    <Input
      className={classes.search}
      onChange={handleSearch}
      placeholder="input to search"
      prefix={<SearchOutlined />}
    />
  );
};

export default Search;
