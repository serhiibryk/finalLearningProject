import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { planetsService } from "../../services/planets";
import { imgPlanetsList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { planetsReducer } from "../../store/planets/reducer";

import useStyles from "./style";
import Search from "antd/lib/input/Search";

const { Meta } = Card;

const TeamsPlanets = () => {
  const { planets } = useAppSelector((state: any) => state.planets);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();
  const location = useLocation();

  const currentPage =
    location.search.split("=")[1] === undefined
      ? 1
      : Number(location.search.split("=")[1]);

  const fetchPlanets = createAsyncThunk(
    "planets/planets",
    async (nextPage: number, thunkApi) => {
      try {
        setLoading(true);
        const res = await planetsService.getPlanets(nextPage);
        thunkApi.dispatch(planetsReducer.setPlanets(res.results));
        setMaxCount(res.count);
        setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchPlanets(currentPage));
  }, [currentPage]);

  const handleChange = (page: number) => {
    fetchPlanets(page);
    push(`/planets?page=${page}`);
  };

  if (planets.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Search
            className={classes.search}
            placeholder="input name for search"
            // onSearch={onSearch}
            style={{ width: 350 }}
          />
        </div>
        <div className={classes.pagination}>
          {planets.length && (
            <PaginationCategory
              defaultCurrent={currentPage}
              total={maxCount}
              current={currentPage}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className={classes.content}>
        {planets.map((planet: any, index: any) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgPlanetsList[index].imgLink}
                  src={imgPlanetsList[index].imgLink}
                  alt="Planet wallpaper"
                />
              }
              onClick={() => push(`/planets/${planet.url.split("/")[5]}`)}
            >
              <Meta title={planet.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsPlanets;
