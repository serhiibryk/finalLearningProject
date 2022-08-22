import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { imgSpeciesList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import Search from "../../components/Search";

import useStyles from "./style";
import { getSpecy } from "../../store/specy/actions";

const { Meta } = Card;

const TeamsSpecies = () => {
  const { specy, count, isLoading, error } = useAppSelector(
    (state) => state.specy
  );
  // const [isLoading, setLoading] = useState(false);
  // const [maxCount, setMaxCount] = useState(0);
  const [nameSpecies, setNameSpecies] = useState([]);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage = Number(location.search.split("=")[1] || 1);

  // const fetchSpecy = createAsyncThunk(
  //   "specy/specy",
  //   async (nextPage: number, thunkApi) => {
  //     try {
  //       setLoading(true);
  //       const res = await speciesService.getSpecies(nextPage);
  //       thunkApi.dispatch(specyReducer.setSpecies(res.results));
  //       setMaxCount(res.count);
  //       setLoading(false);
  //     } catch (e) {
  //       return thunkApi.rejectWithValue(e);
  //     }
  //   }
  // );

  useEffect(() => {
    dispatch(getSpecy(currentPage));
  }, [currentPage]);

  const handleChange = (page: number) => {
    // fetchSpecy(page);
    push(`/species?page=${page}`);
  };

  if (isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Search
            category={"specy"}
            name={"name"}
            setSearchState={setNameSpecies}
          />
        </div>
        <div className={classes.pagination}>
          {specy && (
            <PaginationCategory
              defaultCurrent={currentPage}
              total={count}
              current={currentPage}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className={classes.content}>
        {nameSpecies.map((speccy: any, index: any) => {
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
