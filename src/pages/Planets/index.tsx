import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { planetsService } from "../../services/planets";
import { imgPlanetsList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { planetsReducer } from "../../store/planets/reducer";

import useStyles from "./style";

const { Meta } = Card;

const TeamsPlanets = () => {
  const { planets } = useAppSelector((state: any) => state.planets);
  const dispatch = useAppDispatch();
  // const [planetsList, setPlanetsList] = useState<Planets[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  // const fetchPlanets = async (nextId: number) => {
  //   setLoading(true);
  //   planetsService.getPlanets(nextId).then((data) => {
  //     setPlanetsList(data.results);
  //     setMaxCount(data.count);
  //     setLoading(false);
  //   });
  // };

  const fetchPlanets = createAsyncThunk(
    "planets/planets",
    async (nextPage: number, thunkApi) => {
      try {
        const check = nextPage !== 1;
        check && setLoading(true);
        const res = await planetsService.getPlanets(nextPage);
        thunkApi.dispatch(planetsReducer.setPlanets(res.results));
        setMaxCount(res.count);
        check && setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchPlanets(pageData));
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchPlanets(page);
    setPageData(page);
  };

  if (planets.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {planets.length && (
          <PaginationCategory
            defaultCurrent={1}
            total={maxCount}
            current={pageData}
            onChange={handleChange}
          />
        )}
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
