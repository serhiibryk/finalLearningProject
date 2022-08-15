import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const dispatch = useAppDispatch();
  // const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  // const fetchSpecies = async (nextId: number) => {
  //   setLoading(true);
  //   speciesService.getSpecies(nextId).then((data) => {
  //     setSpeciesList(data.results);
  //     setMaxCount(data.count);
  //     setLoading(false);
  //   });
  // };

  const fetchSpecy = createAsyncThunk(
    "specy/specy",
    async (nextPage: number, thunkApi) => {
      try {
        const check = nextPage !== 1;
        check && setLoading(true);
        const res = await speciesService.getSpecies(nextPage);

        // console.log(res);
        thunkApi.dispatch(specyReducer.setSpecies(res.results));
        setMaxCount(res.count);
        check && setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchSpecy(pageData));
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchSpecy(page);
    setPageData(page);
  };

  if (specy.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {specy.length && (
          <PaginationCategory
            defaultCurrent={1}
            total={maxCount}
            current={pageData}
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
