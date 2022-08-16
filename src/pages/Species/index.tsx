import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { speciesService } from "../../services/species";
import { imgSpeciesList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { specyReducer } from "../../store/specy/reducer";

import useStyles from "./style";

const { Meta } = Card;

const TeamsSpecies = () => {
  const { specy } = useAppSelector((state: any) => state.specy);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage =
    location.search.split("=")[1] === undefined
      ? 1
      : Number(location.search.split("=")[1]);

  const fetchSpecy = createAsyncThunk(
    "specy/specy",
    async (nextPage: number, thunkApi) => {
      try {
        setLoading(true);
        const res = await speciesService.getSpecies(nextPage);
        thunkApi.dispatch(specyReducer.setSpecies(res.results));
        setMaxCount(res.count);
        setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchSpecy(currentPage));
  }, [currentPage]);

  const handleChange = (page: number) => {
    fetchSpecy(page);
    push(`/species?page=${page}`);
  };

  if (specy.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {specy.length && (
          <PaginationCategory
            defaultCurrent={currentPage}
            total={maxCount}
            current={currentPage}
            onChange={handleChange}
          />
        )}
      </div>
      <div className={classes.content}>
        {specy.map((speccy: any, index: any) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgSpeciesList[index].imgLink}
                  src={imgSpeciesList[index].imgLink}
                  alt="Speccy wallpaper"
                />
              }
              onClick={() => push(`/species/${speccy.url.split("/")[5]}`)}
            >
              <Meta title={speccy.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsSpecies;
