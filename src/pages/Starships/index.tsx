import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { starshipsService } from "../../services/starships";
import { imgStarshipsList } from "../../utils";

import useStyles from "./style";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { starshipsReducer } from "../../store/starships/reducer";

const { Meta } = Card;

const TeamsStarships = () => {
  const { starships } = useAppSelector((state: any) => state.starships);
  const dispatch = useAppDispatch();
  // const [starshipsList, setStarshipsList] = useState<Starships[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  // const fetchStarships = async (nextId: number) => {
  //   setLoading(true);
  //   starshipsService.getStarships(nextId).then((data) => {
  //     setStarshipsList(data.results);
  //     setMaxCount(data.count);
  //     setLoading(false);
  //   });
  // };

  const fetchStarships = createAsyncThunk(
    "starships/starships",
    async (nextId: number, thunkApi) => {
      try {
        setLoading(true);
        const res = await starshipsService.getStarships(nextId);

        // console.log(res);
        thunkApi.dispatch(starshipsReducer.setStarships(res.results));
        setMaxCount(res.count);
        setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchStarships(pageData));
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchStarships(page);
    setPageData(page);
  };

  if (starships.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {starships.length && (
          <PaginationCategory
            defaultCurrent={1}
            current={pageData}
            total={maxCount}
            onChange={handleChange}
          />
        )}
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
