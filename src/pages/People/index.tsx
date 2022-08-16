import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { peopleService } from "../../services/people";
import { imgPeopleList } from "../../utils";
import { peopleReducer } from "../../store/people/reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";

import useStyles from "./style";

const { Meta } = Card;

const TeamsPeoples = () => {
  const { people } = useAppSelector((state: any) => state.people);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

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

  if (!people.length || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
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
      <div className={classes.content}>
        {people.map((people: any, index: any) => {
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
