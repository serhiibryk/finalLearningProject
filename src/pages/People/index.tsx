import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card, Input } from "antd";
import { debounce } from "lodash";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { peopleService } from "../../services/people";
import { imgPeopleList } from "../../utils";
import { peopleReducer } from "../../store/people/reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";

import useStyles from "./style";
import SearchOutlined from "@ant-design/icons/SearchOutlined";

const { Meta } = Card;

const TeamsPeoples = () => {
  const { people } = useAppSelector((state: any) => state.people);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);
  const [namePeople, setNamePeople] = useState([]);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage = Number(location.search.split("=")[1] || 1);

  const fetchPeople = createAsyncThunk(
    "people/people",
    async (nextPage: number, thunkApi) => {
      try {
        setLoading(true);
        const res = await peopleService.getPeople(nextPage);
        thunkApi.dispatch(peopleReducer.setPeople(res.results));
        setMaxCount(res.count);
        setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchPeople(currentPage));
  }, [currentPage]);

  const handleChange = (page: number) => {
    fetchPeople(page);
    push(`/people?page=${page}`);
  };

  const debouncedSearch = debounce((value) => {
    const filter = (people || []).filter((item: any) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setNamePeople(filter);
  }, 1000);

  const handleSearch = (e: any) => {
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    setNamePeople(people);
  }, [people]);

  if (!people.length || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Input
            className={classes.search}
            onChange={handleSearch}
            placeholder="input name to search"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className={classes.pagination}>
          {people.length && (
            <PaginationCategory
              defaultCurrent={currentPage}
              current={currentPage}
              total={maxCount}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className={classes.content}>
        {namePeople.map((people: any, index: any) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgPeopleList[index].imgLink}
                  src={imgPeopleList[index].imgLink}
                  alt="People wallpaper"
                />
              }
              onClick={() => push(`/people/${people.url.split("/")[5]}`)}
            >
              <Meta title={people.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsPeoples;
