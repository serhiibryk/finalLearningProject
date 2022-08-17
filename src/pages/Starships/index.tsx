import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { starshipsService } from "../../services/starships";
import { imgStarshipsList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { starshipsReducer } from "../../store/starships/reducer";

import useStyles from "./style";
import Search from "antd/lib/input/Search";

const { Meta } = Card;

const TeamsStarships = () => {
  const { starships } = useAppSelector((state: any) => state.starships);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage =
    location.search.split("=")[1] === undefined
      ? 1
      : Number(location.search.split("=")[1]);

  const fetchStarships = createAsyncThunk(
    "starships/starships",
    async (nextPage: number, thunkApi) => {
      try {
        setLoading(true);
        const res = await starshipsService.getStarships(nextPage);
        thunkApi.dispatch(starshipsReducer.setStarships(res.results));
        setMaxCount(res.count);
        setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchStarships(currentPage));
  }, [currentPage]);

  const handleChange = (page: number) => {
    fetchStarships(page);
    push(`/starships?page=${page}`);
  };

  if (starships.length === 0 || isLoading) {
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
          {starships.length && (
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
        {starships.map((starship: any, index: any) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgStarshipsList[index].imgLink}
                  src={imgStarshipsList[index].imgLink}
                  alt="Starship wallpaper"
                />
              }
              onClick={() => push(`/starships/${starship.url.split("/")[5]}`)}
            >
              <Meta title={starship.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsStarships;
