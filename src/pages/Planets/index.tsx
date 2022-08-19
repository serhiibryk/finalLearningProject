import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import { planetsService } from "../../services/planets";
import { imgPlanetsList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { planetsReducer } from "../../store/planets/reducer";
import Search from "../../components/Search";

import useStyles from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import PaginationCategory from "../../components/Pagination";
import { infiniteScrollReducer } from "../../store/infiniteScroll/reducer";

const { Meta } = Card;

const TeamsPlanets = () => {
  const { planets } = useAppSelector((state) => state.planets);
  const { stateForScroll } = useAppSelector((state) => state.stateForScroll);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);
  const [namePlanets, setNamePlanets] = useState([]);
  const [numberPage, setNumberPage] = useState(2);

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
    dispatch(fetchNextPlanets(1));
  }, []);

  // const handleChange = (page: number) => {
  //   fetchPlanets(page);
  //   push(`/planets?page=${page}`);
  // };

  if (planets.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }
  const hasMore = () => {
    return stateForScroll.length < maxCount;
  };

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Search
            category={"planets"}
            name={"name"}
            setSearchState={setNamePlanets}
          />
        </div>
        {/* <div className={classes.pagination}>
          {planets.length && (
            <PaginationCategory
              defaultCurrent={currentPage}
              total={maxCount}
              current={currentPage}
              onChange={handleChange}
            />
          )}
        </div> */}
      </div>
      <div className={classes.contentScroll}>
        <InfiniteScroll
          dataLength={stateForScroll.length}
          next={() => {
            dispatch(fetchNextPlanets(numberPage));
            setNumberPage(numberPage + 1);
          }}
          hasMore={hasMore()}
          loader={<h4>Loading...</h4>}
        >
          {stateForScroll.map((planet: any, index: any) => {
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
      {/* <div className={classes.content}>{namePlanets.map}</div> */}
    </div>
  );
};

export default TeamsPlanets;
