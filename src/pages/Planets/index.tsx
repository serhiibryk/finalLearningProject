import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Switch } from "antd";

import Spiner from "../../components/Spiner";
import { planetsService } from "../../services/planets";
import { imgPlanetsList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { planetsReducer } from "../../store/planets/reducer";
import Search from "../../components/Search";
import PaginationCategory from "../../components/Pagination";
import { infiniteScrollReducer } from "../../store/infiniteScroll/reducer";

import useStyles from "./style";

const { Meta } = Card;

const TeamsPlanets = () => {
  const { planets } = useAppSelector((state) => state.planets);
  const { stateForScroll } = useAppSelector(
    (state: any) => state.stateForScroll
  );
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);
  const [numberPage, setNumberPage] = useState(2);
  const [switcher, setSwitcher] = useState<any>([]);
  const [checked, setChecked] = useState(false);

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
        setSwitcher(res.results);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchPlanets(currentPage));
  }, [currentPage]);

  const fetchNextPlanets = createAsyncThunk(
    "planets/NextPlanets",

    async (id: number, thunkApi) => {
      try {
        const res = await planetsService.getPlanets(id);
        thunkApi.dispatch(
          infiniteScrollReducer.setForScroll(stateForScroll.concat(res.results))
        );
        setMaxCount(res.count);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    checked && dispatch(fetchNextPlanets(1));
  }, [checked]);

  useEffect(() => {
    setSwitcher(stateForScroll);
  }, [stateForScroll]);

  const handleChange = (page: number) => {
    fetchPlanets(page);
    push(`/planets?page=${page}`);
  };

  if (planets.length === 0 || isLoading) {
    return <Spiner />;
  }

  const hasMore = () => {
    return stateForScroll.length < maxCount;
  };

  const checkForScroll = (check: boolean) => {
    setChecked(check);
    if (!check) {
      setSwitcher(planets);
    } else {
      setSwitcher(stateForScroll);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <span className={classes.text}>
          You can switch between pagination/infinitescroll
        </span>
        <div>
          <Switch
            className={classes.switch}
            checked={checked}
            onChange={checkForScroll}
          />
        </div>
        <div>
          <Search
            category={"planets"}
            name={"name"}
            setSearchState={setSwitcher}
          />
        </div>
        {checked === false ? (
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
        ) : null}
      </div>
      <div className={classes.contentScroll}>
        <InfiniteScroll
          dataLength={stateForScroll.length}
          next={() => {
            dispatch(fetchNextPlanets(numberPage));
            setNumberPage(numberPage + 1);
          }}
          hasMore={checked && hasMore()}
          loader={<h4>Loading...</h4>}
        >
          {switcher.map((planet: any, index: any) => {
            return (
              <Card
                className={classes.card}
                hoverable
                cover={
                  <img
                    className={classes.img}
                    // key={imgPlanetsList.imgLink}
                    src={imgPlanetsList[1].imgLink}
                    alt="Planet wallpaper"
                  />
                }
                onClick={() => push(`/planets/${planet.url.split("/")[5]}`)}
              >
                <Meta title={planet.name} />
              </Card>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default TeamsPlanets;
