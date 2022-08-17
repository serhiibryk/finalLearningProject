import React, { FC, useEffect, useState } from "react";
import { debounce } from "lodash";
import { Input } from "antd";

import { useAppSelector } from "../../store/hooks/redux";

import SearchOutlined from "@ant-design/icons/SearchOutlined";
import { SetState } from "immer/dist/internal";

interface ISearch {
  category: string;
  name: string;
  searchState: any;
  setSearchState: any;
}

const Search: FC<ISearch> = ({
  category,
  name,
  searchState,
  setSearchState,
}) => {
  const stateRedux = useAppSelector((state: any) => state[category]);
  const stateCategory = stateRedux[category];

  // const filtered = (stateCategory || []).filter((item: any) =>
  //   item[title].toLowerCase().includes(value.toLowerCase())
  // );

  const debouncedSearch = debounce((value) => {
    const filter = (stateCategory || []).filter((item: any) =>
      item[name].toLowerCase().includes(value.toLowerCase())
    );
    setSearchState(filter);
  }, 1000);

  const handleSearch = (e: any) => {
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    setSearchState(stateCategory);
  }, [stateCategory]);
  return (
    <Input
      onChange={handleSearch}
      placeholder="input name to search"
      prefix={<SearchOutlined />}
    />
  );
};

export default Search;
